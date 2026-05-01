import { useState, useEffect } from 'react'
import { subscribeOrders, subscribeHistory, markPickedUp } from '../data/orders'

const READY_TTL_MS = 10 * 60 * 1000 // show ready orders for 10 min

function Clock() {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return (
    <span className="display-time">
      {time.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })}
    </span>
  )
}

export default function DisplayScreen() {
  const [active, setActive]         = useState([])
  const [rawHistory, setRawHistory] = useState([])
  const [dismissing, setDismissing] = useState(new Set())
  const [tick, setTick]             = useState(0)

  useEffect(() => {
    const unsubs = [
      subscribeOrders(orders => setActive(orders.filter(o => o.status === 'active'))),
      subscribeHistory(setRawHistory),
    ]
    // tick every 30s so expired "ready" orders auto-drop
    const id = setInterval(() => setTick(t => t + 1), 30_000)
    return () => { unsubs.forEach(u => u()); clearInterval(id) }
  }, [])

  const ready = rawHistory.filter(
    o => o.completedAt && Date.now() - new Date(o.completedAt).getTime() < READY_TTL_MS
  )

  function handlePickup(order) {
    setDismissing(prev => new Set(prev).add(order.historyKey))
    setTimeout(() => markPickedUp(order), 400)
  }

  return (
    <div className="display-screen">
      {/* Header */}
      <div className="display-header">
        <div className="display-brand">
          <span className="display-brand-emoji">🌮</span>
          Bruncheria Espinoza
        </div>
        <div className="display-header-right">
          <div className="display-tagline">Pick up your order when your number appears below</div>
          <Clock />
        </div>
      </div>

      {/* Columns */}
      <div className="display-body">

        {/* Preparing */}
        <div className="display-col display-col--preparing">
          <div className="display-col-header">
            <div className="display-col-icon">🍳</div>
            <div>
              <div className="display-col-title">Preparing</div>
              <div className="display-col-sub">Preparando</div>
            </div>
          </div>

          {active.length === 0 ? (
            <div className="display-empty">
              <div className="display-empty-icon">✓</div>
              <div>All caught up</div>
              <div className="display-empty-sub">Al corriente</div>
            </div>
          ) : (
            <div className="display-numbers">
              {active.map(order => (
                <div key={order.firebaseKey || order.id} className="display-number display-number--preparing">
                  <div className="display-number-val">{order.number}</div>
                  <div className="display-number-items">
                    {order.cart.map(ci => {
                      const name = ci.item.name_en || ci.item.name_es || ''
                      return <div key={ci.id} className="display-number-item">{name}</div>
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="display-divider" />

        {/* Ready */}
        <div className="display-col display-col--ready">
          <div className="display-col-header">
            <div className="display-col-icon">✅</div>
            <div>
              <div className="display-col-title">Ready!</div>
              <div className="display-col-sub">¡Listo!</div>
            </div>
          </div>

          {ready.length === 0 ? (
            <div className="display-empty">
              <div className="display-empty-icon">⏳</div>
              <div>Coming soon</div>
              <div className="display-empty-sub">Pronto</div>
            </div>
          ) : (
            <div className="display-numbers">
              {ready.map(order => (
                <div
                  key={order.historyKey}
                  className={`display-number display-number--ready${dismissing.has(order.historyKey) ? ' display-number--dismissing' : ''}`}
                >
                  <div className="display-number-val">{order.number}</div>
                  <div className="display-number-ready-label">Pick up now · Recoge ahora</div>
                  <button
                    className="display-pickup-btn"
                    onClick={() => handlePickup(order)}
                  >
                    ✓ Recogido
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Footer */}
      <div className="display-footer">
        💳 Pay at the window &nbsp;·&nbsp; Pague en la ventana
      </div>
    </div>
  )
}
