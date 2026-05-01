import { Logo } from './WelcomeScreen'

function itemTotal(item, mods) {
  return item.price + mods.reduce((s, m) => s + (m.price || 0), 0)
}

export default function ReviewScreen({ cart, onConfirm, onBack, onReset }) {
  const total = cart.reduce((s, ci) => s + itemTotal(ci.item, ci.modifiers), 0)

  return (
    <div className="review-screen">
      <div className="screen-header">
        <button className="btn-back" onClick={onBack}>← Back</button>
        <Logo />
        <button
          onClick={onReset}
          style={{
            marginLeft: 'auto',
            fontSize: 22,
            fontWeight: 700,
            color: 'var(--gray)',
            padding: '14px 24px',
            borderRadius: 'var(--r-full)',
            transition: 'background var(--t)',
          }}
        >
          Start Over
        </button>
      </div>

      <div className="review-scroll">
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

        <div className="review-total-bar">
          <span className="review-total-label">Total</span>
          <span className="review-total-amount">${total.toFixed(2)}</span>
        </div>
        <div style={{ textAlign: 'center', fontSize: 15, color: 'var(--gray)', marginTop: 6 }}>
          + tax at checkout
        </div>
      </div>

      <div className="screen-footer">
        <button className="btn-primary" onClick={onConfirm}>
          Confirm Order · Confirmar
        </button>
        <button className="btn-add-more" onClick={onBack}>
          + Add something else · Agregar más
        </button>
      </div>
    </div>
  )
}
