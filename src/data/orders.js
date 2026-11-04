import { db } from '../firebase'
import { ref, push, set, remove, onValue } from 'firebase/database'

const ORDERS_PATH  = 'orders'
const HISTORY_PATH = 'history'
const RINGERS_PATH = 'ringers'

// ── Orders ────────────────────────────────────────────────────────

export async function pushOrder(order) {
  const newRef = push(ref(db, ORDERS_PATH))
  await set(newRef, { ...order, firebaseKey: newRef.key })
  return newRef.key
}

// Permanently cancel an active order and release its ringer
export async function cancelOrder(order) {
  await Promise.all([
    remove(ref(db, `${ORDERS_PATH}/${order.firebaseKey}`)),
    releaseRinger(order.number),
  ])
}

// Move active order → history and release ringer
export async function moveOrderToHistory(order) {
  const histRef = push(ref(db, HISTORY_PATH))
  const historyKey = histRef.key
  await Promise.all([
    set(histRef, {
      ...order,
      historyKey,
      status: 'done',
      completedAt: new Date().toISOString(),
    }),
    remove(ref(db, `${ORDERS_PATH}/${order.firebaseKey}`)),
    releaseRinger(order.number),
  ])
  return historyKey
}

// Move history order → active orders (optionally re-claim ringer)
export async function restoreFromHistory(historyOrder, reclaimRinger = false) {
  const newRef = push(ref(db, ORDERS_PATH))
  const { historyKey, completedAt, status, ...rest } = historyOrder
  await Promise.all([
    set(newRef, { ...rest, firebaseKey: newRef.key, status: 'active' }),
    remove(ref(db, `${HISTORY_PATH}/${historyKey}`)),
    ...(reclaimRinger ? [claimRinger(historyOrder.number)] : []),
  ])
  return newRef.key
}

export async function markPickedUp(historyOrder) {
  await remove(ref(db, `${HISTORY_PATH}/${historyOrder.historyKey}`))
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
      (a, b) => new Date(b.completedAt) - new Date(a.completedAt)
    )
    callback(history)
  }, onError)
}

// ── Ringers ───────────────────────────────────────────────────────

export async function claimRinger(number) {
  await set(ref(db, `${RINGERS_PATH}/${number}`), true)
}

export async function releaseRinger(number) {
  await remove(ref(db, `${RINGERS_PATH}/${number}`))
}

export function subscribeRingers(callback, onError) {
  return onValue(ref(db, RINGERS_PATH), snapshot => {
    const val = snapshot.val() || {}
    callback(new Set(Object.keys(val).map(Number)))
  }, onError)
}
