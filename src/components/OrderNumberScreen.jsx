import { useState, useEffect } from 'react'
import { subscribeRingers } from '../data/orders'

const NUMBERS = Array.from({ length: 20 }, (_, i) => i + 1)

export default function OrderNumberScreen({ onSelect, onBack }) {
  const [selected, setSelected] = useState(null)
  const [inUse, setInUse] = useState(new Set())

  useEffect(() => {
    const unsub = subscribeRingers(setInUse)
    return unsub
  }, [])

  return (
    <div className="order-number-screen">
      <div className="screen-header">
        <button className="btn-back" onClick={onBack}>← Back</button>
        <div>
          <div className="screen-title">Select Ringer Number</div>
          <div className="screen-subtitle">Seleccione el número del localizador</div>
        </div>
      </div>

      <div className="order-number-prompt">
        <div className="order-number-prompt-text">📟 Match the number on the ringer</div>
        <div className="order-number-prompt-sub">Haga coincidir el número del localizador</div>
      </div>

      <div className="order-number-scroll">
        <div className="number-grid">
          {NUMBERS.map(n => {
            const busy = inUse.has(n)
            return (
              <button
                key={n}
                className={`number-btn${selected === n ? ' number-btn--selected' : ''}${busy ? ' number-btn--busy' : ''}`}
                onClick={() => !busy && setSelected(n)}
                disabled={busy}
                aria-label={busy ? `Ringer ${n} in use` : `Ringer ${n}`}
              >
                {n}
                {busy && <span className="number-btn-busy-dot" />}
              </button>
            )
          })}
        </div>
      </div>

      <div className="order-number-footer">
        <button
          className="btn-primary"
          disabled={!selected}
          onClick={() => selected && onSelect(selected)}
          style={!selected ? { opacity: 0.35, cursor: 'default' } : {}}
        >
          {selected ? `Confirm Ringer #${selected} · Confirmar #${selected}` : 'Select a number above'}
        </button>
      </div>
    </div>
  )
}
