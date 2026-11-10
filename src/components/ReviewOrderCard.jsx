import { useState, useEffect } from 'react'
import { calculateOrderTotals } from '../data/pricing'
import { formatOrderNumber } from '../data/orderNumber'

function orderTime(order) {
  return new Date(order.createdAt || order.timestamp).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  })
}

export default function ReviewOrderCard({ order, onSave, onCancel, onConfirm }) {
  const [cart, setCart] = useState(order.cart || [])
  const [editing, setEditing] = useState(false)
  const [confirmingCancel, setConfirmingCancel] = useState(false)
  const [paymentAcknowledged, setPaymentAcknowledged] = useState(false)
  const [buzzerNumber, setBuzzerNumber] = useState(
    order.confirmationBuzzer ? String(order.confirmationBuzzer) : ''
  )
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const totals = calculateOrderTotals(editing ? cart : (order.cart || []))

  useEffect(() => {
    setBuzzerNumber(order.confirmationBuzzer ? String(order.confirmationBuzzer) : '')
  }, [order.confirmationBuzzer])

  function updateModifiers(itemIndex, modifier) {
    setCart(current => current.map((cartItem, index) => {
      if (index !== itemIndex) return cartItem
      const selected = cartItem.modifiers || []
      const isSelected = selected.some(item => item.id === modifier.id)
      return {
        ...cartItem,
        modifiers: isSelected
          ? selected.filter(item => item.id !== modifier.id)
          : [...selected, modifier],
      }
    }))
  }

  function changeQuantity(itemIndex, delta) {
    setCart(current => {
      if (delta < 0) return current.filter((_, index) => index !== itemIndex)
      const cartItem = current[itemIndex]
      const copy = {
        ...cartItem,
        id: `${cartItem.id}-${Date.now()}-${current.length}`,
        modifiers: [...(cartItem.modifiers || [])],
      }
      return [...current, copy]
    })
  }

  async function runAction(action) {
    setBusy(true)
    setError('')
    try {
      await action()
    } catch (actionError) {
      console.error('Staff order action failed:', actionError)
      setError(actionError.message || 'The order could not be updated. Try again.')
    } finally {
      setBusy(false)
    }
  }

  async function saveEdits() {
    await runAction(async () => {
      await onSave(cart)
      setEditing(false)
    })
  }

  async function confirmOrder() {
    if (!paymentAcknowledged) {
      setError('Confirm that payment was collected first.')
      return
    }
    const selectedBuzzer = Number(buzzerNumber)
    if (!Number.isInteger(selectedBuzzer) || selectedBuzzer < 1 || selectedBuzzer > 20) {
      setError('Enter an available buzzer number from 1 to 20.')
      return
    }
    await runAction(() => onConfirm(selectedBuzzer, paymentAcknowledged))
  }

  return (
    <article className="staff-order-card">
      <header className="staff-order-header">
        <div>
          <div className="staff-order-number">Order #{formatOrderNumber(order)}</div>
          <div className="staff-order-time">Submitted {orderTime(order)}</div>
        </div>
        <span className="staff-order-status">Awaiting confirmation</span>
      </header>

      <div className="staff-order-items">
        {(editing ? cart : (order.cart || [])).map((cartItem, index) => (
          <div className="staff-order-item" key={cartItem.id}>
            <div className="staff-order-item-copy">
              <strong>{cartItem.item.name_en}</strong>
              <span>{cartItem.item.name_es || cartItem.item.name_en}</span>
              {editing ? (
                <div className="staff-modifier-list">
                  {(cartItem.item.modifiers || []).map(modifier => {
                    const selected = (cartItem.modifiers || []).some(item => item.id === modifier.id)
                    return (
                      <button
                        key={modifier.id}
                        type="button"
                        className={`staff-modifier${selected ? ' staff-modifier--selected' : ''}`}
                        aria-pressed={selected}
                        onClick={() => updateModifiers(index, modifier)}
                      >
                        {modifier.en}{modifier.price > 0 && ` +$${modifier.price.toFixed(2)}`}
                      </button>
                    )
                  })}
                </div>
              ) : (
                cartItem.modifiers?.length > 0 && (
                  <span className="staff-order-mods">
                    {cartItem.modifiers.map(modifier => modifier.en).join(', ')}
                  </span>
                )
              )}
            </div>
            <div className="staff-order-item-actions">
              <span>${(cartItem.item.price + (cartItem.modifiers || []).reduce(
                (sum, modifier) => sum + (modifier.price || 0), 0
              )).toFixed(2)}</span>
              {editing && (
                <div className="staff-quantity-actions">
                  <button type="button" aria-label="Remove one" onClick={() => changeQuantity(index, -1)}>−</button>
                  <button type="button" aria-label="Add one" onClick={() => changeQuantity(index, 1)}>+</button>
                </div>
              )}
            </div>
          </div>
        ))}
        {cart.length === 0 && editing && <div className="staff-order-empty">No items. Cancel this order if needed.</div>}
      </div>

      <div className="staff-order-totals">
        <div><span>Subtotal</span><span>${totals.subtotal.toFixed(2)}</span></div>
        <div><span>Tax (7%)</span><span>${totals.tax.toFixed(2)}</span></div>
        <div className="staff-order-grand-total"><span>Total</span><span>${totals.total.toFixed(2)}</span></div>
      </div>

      {editing ? (
        <div className="staff-order-actions">
          <button className="staff-action-secondary" disabled={busy} onClick={() => {
            setCart(order.cart || [])
            setEditing(false)
            setError('')
          }}>Discard changes</button>
          <button className="staff-action-primary" disabled={busy || cart.length === 0} onClick={saveEdits}>
            {busy ? 'Saving…' : 'Save order'}
          </button>
        </div>
      ) : (
        <>
          <div className="staff-confirm-panel">
            <label className="staff-payment-check">
              <input
                type="checkbox"
                checked={paymentAcknowledged}
                onChange={event => setPaymentAcknowledged(event.target.checked)}
              />
              Payment collected outside the app
            </label>
            <label className="staff-buzzer-label">
              Assign physical buzzer (1–20)
              <input
                type="number"
                inputMode="numeric"
                min="1"
                max="20"
                value={buzzerNumber}
                onChange={event => setBuzzerNumber(event.target.value)}
              />
            </label>
            <button
              className="staff-action-primary"
              disabled={busy || !paymentAcknowledged || !cart.length}
              onClick={confirmOrder}
            >
              {busy ? 'Confirming…' : 'Confirm payment & send to kitchen'}
            </button>
          </div>
          <div className="staff-order-actions">
            <button className="staff-action-secondary" disabled={busy} onClick={() => {
              setPaymentAcknowledged(false)
              setBuzzerNumber('')
              setEditing(true)
            }}>Edit order</button>
            {!confirmingCancel ? (
              <button className="staff-action-danger" disabled={busy} onClick={() => setConfirmingCancel(true)}>Cancel order</button>
            ) : (
              <div className="staff-cancel-confirm">
                <span>Cancel this order?</span>
                <button className="staff-action-danger" disabled={busy} onClick={() => runAction(onCancel)}>Yes, cancel</button>
                <button className="staff-action-secondary" disabled={busy} onClick={() => setConfirmingCancel(false)}>Keep order</button>
              </div>
            )}
          </div>
        </>
      )}
      {error && <div className="staff-order-error" role="alert">{error}</div>}
    </article>
  )
}
