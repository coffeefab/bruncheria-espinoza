import { Logo } from './WelcomeScreen'
import { calculateOrderTotals } from '../data/pricing'

function itemTotal(item, mods) {
  return item.price + mods.reduce((sum, modifier) => sum + (modifier.price || 0), 0)
}

export default function ReviewScreen({
  cart, submitting, submitError, orderLocked, onConfirm, onBack,
}) {
  const { subtotal, tax, total } = calculateOrderTotals(cart)

  return (
    <div className="review-screen">
      <div className="screen-header">
        <button className="btn-back" onClick={onBack} disabled={orderLocked || submitting}>← Back</button>
        <Logo />
      </div>

      <div className="review-scroll">
        <div className="review-heading">
          <div className="review-heading-title">Everything look right?</div>
          <div className="review-heading-copy">Review your items before sending your order to the window.</div>
        </div>

        {/* Customer summary (English) */}
        <div className="review-section">
          <div className="review-section-label">🧾 Your Order</div>
          {cart.map(ci => {
            const lineTotal = itemTotal(ci.item, ci.modifiers)
            return (
              <div key={ci.id} className="review-item">
                <div className="review-item-left">
                  <div className="review-item-name">
                    {ci.item.emoji && `${ci.item.emoji} `}{ci.item.name_en}
                  </div>
                  {ci.modifiers.length > 0 && (
                    <div className="review-mods">
                      {ci.modifiers.map(m => (
                        <span key={m.id} className="review-mod-tag">
                          {m.en}{m.price > 0 && ` +$${m.price.toFixed(2)}`}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="review-item-price">${lineTotal.toFixed(2)}</div>
              </div>
            )
          })}
        </div>

        <div className="review-tax-breakdown">
          <div><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
          <div><span>Tax (7%)</span><span>${tax.toFixed(2)}</span></div>
          <div className="review-total-bar">
            <span className="review-total-label">Total</span>
            <span className="review-total-amount">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="screen-footer">
        {submitError && <div className="order-submit-error" role="alert">{submitError}</div>}
        <button className="btn-primary" onClick={onConfirm} disabled={submitting || !cart.length}>
          {submitting ? 'Sending order…' : orderLocked ? 'Retry sending my order' : 'Send my order'}
        </button>
        <button className="btn-add-more" onClick={onBack} disabled={orderLocked || submitting}>
          Edit order
        </button>
      </div>
    </div>
  )
}
