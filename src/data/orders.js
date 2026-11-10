import { db } from '../firebase'
import {
  get, onValue, push, ref, runTransaction, set, update,
} from 'firebase/database'
import { calculateOrderTotals } from './pricing'
import { shortOrderId } from './orderNumber'

const ORDERS_PATH = 'orders'
const HISTORY_PATH = 'history'
const RINGERS_PATH = 'ringers'
const COUNTERS_PATH = 'orderCounters'
const ARCHIVED_STATUSES = new Set(['ready', 'completed', 'cancelled'])

function isPermissionDenied(error) {
  const code = String(error?.code || '').toLowerCase()
  const message = String(error?.message || '').toLowerCase()
  return code.includes('permission_denied')
    || code.includes('permission-denied')
    || message.includes('permission_denied')
    || message.includes('permission denied')
}

function localDayKey(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export async function pushOrder(order, attempt) {
  if (!attempt) throw new Error('Order submission state is required.')
  if (!attempt.firebaseKey) {
    const newOrderRef = push(ref(db, ORDERS_PATH))
    if (!newOrderRef.key) throw new Error('Could not create an order ID.')
    attempt.firebaseKey = newOrderRef.key
  }
  if (!attempt.orderNumber) {
    const now = new Date()
    const counterRef = ref(db, `${COUNTERS_PATH}/${localDayKey(now)}`)
    try {
      const result = await runTransaction(counterRef, current => (
        (Number(current) || 100) + 1
      ), { applyLocally: false })
      if (!result.committed) throw new Error('Could not allocate an order number.')
      attempt.orderNumber = result.snapshot.val()
    } catch (error) {
      if (!isPermissionDenied(error)) throw error
      attempt.orderNumber = shortOrderId(attempt.firebaseKey)
    }
    attempt.createdAt = now.toISOString()
  }

  const totals = calculateOrderTotals(order.cart)
  const savedOrder = {
    ...order,
    ...totals,
    firebaseKey: attempt.firebaseKey,
    orderNumber: attempt.orderNumber,
    dateKey: localDayKey(new Date(attempt.createdAt)),
    status: 'awaiting_confirmation',
    timestamp: attempt.createdAt,
    createdAt: attempt.createdAt,
  }
  await set(ref(db, `${ORDERS_PATH}/${attempt.firebaseKey}`), savedOrder)
  return savedOrder
}

export async function updatePendingOrder(order, cart) {
  const orderRef = ref(db, `${ORDERS_PATH}/${order.firebaseKey}`)
  const totals = calculateOrderTotals(cart)
  const result = await runTransaction(orderRef, current => {
    if (!current || current.status !== 'awaiting_confirmation') return
    if ((current.editRevision || 0) !== (order.editRevision || 0)) return
    return {
      ...current,
      cart,
      ...totals,
      editRevision: (current.editRevision || 0) + 1,
      updatedAt: new Date().toISOString(),
    }
  }, { applyLocally: false })
  if (!result.committed) throw new Error('This order changed in another staff session. Review the latest version and try again.')
  return result.snapshot.val()
}

export async function confirmOrder(order, buzzerNumber, paymentAcknowledged) {
  if (!paymentAcknowledged) throw new Error('Confirm that payment was collected first.')
  if (!Number.isInteger(buzzerNumber) || buzzerNumber < 1 || buzzerNumber > 20) {
    throw new Error('Choose a buzzer number from 1 to 20.')
  }
  if (!order.firebaseKey) throw new Error('This order is missing its database ID.')
  const orderRef = ref(db, `${ORDERS_PATH}/${order.firebaseKey}`)
  const ringerRef = ref(db, `${RINGERS_PATH}/${buzzerNumber}`)
  const reservation = await runTransaction(orderRef, current => {
    if (!current) return
    if (current.status === 'preparing' && current.buzzerNumber === buzzerNumber) return current
    if (current.status !== 'awaiting_confirmation') return
    if (current.confirmationBuzzer && current.confirmationBuzzer !== buzzerNumber) return
    return { ...current, confirmationBuzzer: buzzerNumber }
  }, { applyLocally: false })
  const reservedOrder = reservation.snapshot.val()
  if (!reservation.committed
    && !(reservedOrder?.status === 'awaiting_confirmation' && reservedOrder.confirmationBuzzer === buzzerNumber)) {
    if (reservedOrder?.status === 'preparing' && reservedOrder.buzzerNumber === buzzerNumber) return reservedOrder
    if (reservedOrder?.confirmationBuzzer && reservedOrder.confirmationBuzzer !== buzzerNumber) {
      throw new Error(`This order has a pending confirmation with buzzer #${reservedOrder.confirmationBuzzer}.`)
    }
    throw new Error('This order was already confirmed or changed by another staff member.')
  }
  if (reservedOrder?.status === 'preparing') return reservedOrder

  const lock = await runTransaction(ringerRef, current => {
    if (current == null) {
      return { orderKey: order.firebaseKey, orderNumber: order.orderNumber ?? order.number }
    }
    if (current.orderKey === order.firebaseKey) return current
    return
  }, { applyLocally: false })
  if (!lock.committed) {
    await clearConfirmationReservation(orderRef, buzzerNumber)
    throw new Error(`Buzzer #${buzzerNumber} is already assigned.`)
  }

  try {
    const result = await runTransaction(orderRef, current => {
      if (!current) return
      if (current.status === 'awaiting_confirmation' && current.confirmationBuzzer === buzzerNumber) {
        const { confirmationBuzzer, ...orderWithoutReservation } = current
        return {
          ...orderWithoutReservation,
          status: 'preparing',
          buzzerNumber,
          paymentConfirmedAt: new Date().toISOString(),
        }
      }
      if (current.status === 'preparing' && current.buzzerNumber === buzzerNumber) return current
      return
    }, { applyLocally: false })
    const savedOrder = result.snapshot.val()
    if (result.committed || (savedOrder?.status === 'preparing' && savedOrder.buzzerNumber === buzzerNumber)) {
      return savedOrder
    }

    await releaseRinger(buzzerNumber, order.firebaseKey, false)
    await clearConfirmationReservation(orderRef, buzzerNumber)
    throw new Error('This order was already confirmed or changed by another staff member.')
  } catch (error) {
    if (error.message.startsWith('This order was already')) throw error

    try {
      const current = (await get(orderRef)).val()
      if (current?.status === 'preparing' && current.buzzerNumber === buzzerNumber) return current
      if (current?.status === 'awaiting_confirmation' && current.confirmationBuzzer === buzzerNumber) {
        throw error
      }
      await releaseRinger(buzzerNumber, order.firebaseKey, false)
    } catch (recoveryError) {
      if (recoveryError === error) throw error
      console.error('Could not verify order confirmation after a network error:', recoveryError)
    }
    throw error
  }
}

export async function cancelOrder(order) {
  const orderRef = ref(db, `${ORDERS_PATH}/${order.firebaseKey}`)
  let reservedBuzzer
  const result = await runTransaction(orderRef, current => {
    if (!current || !['awaiting_confirmation', 'preparing', 'active'].includes(current.status)) return
    reservedBuzzer = current.confirmationBuzzer
    const { confirmationBuzzer, ...orderWithoutReservation } = current
    return { ...orderWithoutReservation, status: 'cancelled', cancelledAt: new Date().toISOString() }
  }, { applyLocally: false })
  if (!result.committed) throw new Error('This order can no longer be cancelled.')
  if (reservedBuzzer) await releaseRinger(reservedBuzzer, order.firebaseKey, false)
  return result.snapshot.val()
}

async function clearConfirmationReservation(orderRef, buzzerNumber) {
  await runTransaction(orderRef, current => {
    if (!current || current.status !== 'awaiting_confirmation' || current.confirmationBuzzer !== buzzerNumber) return
    const { confirmationBuzzer, ...orderWithoutReservation } = current
    return orderWithoutReservation
  }, { applyLocally: false })
}

export async function markOrderReady(order) {
  if (!order.firebaseKey) throw new Error('This order is missing its database ID.')
  const orderRef = ref(db, `${ORDERS_PATH}/${order.firebaseKey}`)
  const result = await runTransaction(orderRef, current => {
    if (!current || !['preparing', 'active'].includes(current.status)) return
    return { ...current, status: 'ready', readyAt: new Date().toISOString() }
  }, { applyLocally: false })
  if (!result.committed) throw new Error('This order is no longer being prepared.')
  return result.snapshot.val()
}

export async function restoreFromHistory(order) {
  if (!order.historyKey) {
    const orderRef = ref(db, `${ORDERS_PATH}/${order.firebaseKey}`)
    const result = await runTransaction(orderRef, current => {
      if (!current || current.status !== 'ready') return
      return { ...current, status: 'preparing', readyAt: null }
    }, { applyLocally: false })
    if (!result.committed) throw new Error('This order can no longer be restored.')
    return result.snapshot.val()
  }

  const firebaseKey = order.firebaseKey || push(ref(db, ORDERS_PATH)).key
  const buzzerNumber = order.buzzerNumber ?? (order.status === 'done' ? order.number : null)
  if (buzzerNumber) await claimRinger(buzzerNumber, firebaseKey)

  const { historyKey, completedAt, status, ...rest } = order
  const restored = {
    ...rest,
    firebaseKey,
    status: 'preparing',
    buzzerNumber,
  }
  try {
    await update(ref(db), {
      [`${ORDERS_PATH}/${firebaseKey}`]: restored,
      [`${HISTORY_PATH}/${historyKey}`]: null,
    })
  } catch (error) {
    if (buzzerNumber) await releaseRinger(buzzerNumber, firebaseKey)
    throw error
  }
  return restored
}

export async function markPickedUp(order) {
  const path = order.historyKey
    ? `${HISTORY_PATH}/${order.historyKey}`
    : `${ORDERS_PATH}/${order.firebaseKey}`
  const orderRef = ref(db, path)
  const result = await runTransaction(orderRef, current => {
    if (!current || !['ready', 'done'].includes(current.status)) return
    return {
      ...current,
      status: 'completed',
      completedAt: new Date().toISOString(),
    }
  }, { applyLocally: false })
  if (!result.committed && result.snapshot.val()?.status !== 'completed') {
    throw new Error('This order is no longer ready for pickup.')
  }
  return result.snapshot.val()
}

export async function releaseOrderBuzzer(order) {
  const buzzerNumber = order.buzzerNumber ?? (!order.orderNumber ? order.number : null)
  if (!buzzerNumber) return
  await releaseRinger(buzzerNumber, order.firebaseKey)
  const path = order.historyKey
    ? `${HISTORY_PATH}/${order.historyKey}`
    : `${ORDERS_PATH}/${order.firebaseKey}`
  await update(ref(db, path), { buzzerReleasedAt: new Date().toISOString() })
}

export async function clearOrderHistory() {
  const [ordersSnapshot, historySnapshot] = await Promise.all([
    get(ref(db, ORDERS_PATH)),
    get(ref(db, HISTORY_PATH)),
  ])
  const updates = { [HISTORY_PATH]: null }
  const ordersToRemove = []

  ordersSnapshot.forEach(child => {
    const order = child.val()
    if (!ARCHIVED_STATUSES.has(order.status)) return
    updates[`${ORDERS_PATH}/${child.key}`] = null
    ordersToRemove.push({ ...order, firebaseKey: child.key })
  })

  for (const order of ordersToRemove) {
    await releaseArchivedBuzzer(order, order.firebaseKey)
  }
  const historyOrders = []
  historySnapshot.forEach(child => {
    historyOrders.push(child.val())
  })
  for (const order of historyOrders) {
    await releaseArchivedBuzzer(order, order.firebaseKey)
  }

  await update(ref(db), updates)
}

async function releaseArchivedBuzzer(order, orderKey) {
  const buzzerNumber = order.buzzerNumber ?? (!order.orderNumber ? order.number : null)
  if (!buzzerNumber) return
  try {
    await releaseRinger(buzzerNumber, orderKey)
  } catch (error) {
    if (error.message !== `Buzzer #${buzzerNumber} is assigned to another order.`) throw error
  }
}

export async function claimRinger(number, orderKey) {
  const result = await runTransaction(ref(db, `${RINGERS_PATH}/${number}`), current => {
    if (current == null) return orderKey ? { orderKey } : true
    if (orderKey && current.orderKey === orderKey) return current
    return
  }, { applyLocally: false })
  if (!result.committed) throw new Error(`Buzzer #${number} is already assigned.`)
  return result.snapshot.val()
}

export async function releaseRinger(number, orderKey, allowLegacy = true) {
  const ringerRef = ref(db, `${RINGERS_PATH}/${number}`)
  const result = await runTransaction(ringerRef, current => {
    if (current == null) return null
    if ((allowLegacy && current === true) || (orderKey && current.orderKey === orderKey)) return null
    return
  }, { applyLocally: false })
  if (!result.committed && result.snapshot.val() != null) {
    throw new Error(`Buzzer #${number} is assigned to another order.`)
  }
}

export function subscribeOrders(callback, onError) {
  return onValue(ref(db, ORDERS_PATH), snapshot => {
    const val = snapshot.val() || {}
    const orders = Object.values(val).sort(
      (a, b) => new Date(a.createdAt || a.timestamp) - new Date(b.createdAt || b.timestamp)
    )
    callback(orders)
  }, onError)
}

export function subscribeHistory(callback, onError) {
  return onValue(ref(db, HISTORY_PATH), snapshot => {
    const val = snapshot.val() || {}
    const history = Object.values(val).sort(
      (a, b) => new Date(b.readyAt || b.completedAt || b.createdAt || 0)
        - new Date(a.readyAt || a.completedAt || a.createdAt || 0)
    )
    callback(history)
  }, onError)
}

export function subscribeRingers(callback, onError) {
  return onValue(ref(db, RINGERS_PATH), snapshot => {
    const val = snapshot.val() || {}
    callback(new Set(Object.keys(val).map(Number)))
  }, onError)
}
