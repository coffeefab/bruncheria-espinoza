import { useState, useEffect } from 'react'
import { subscribeOrders, subscribeHistory, markPickedUp } from '../data/orders'
import { formatOrderNumber } from '../data/orderNumber'
import { Logo } from './WelcomeScreen'

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
  const [orders, setOrders]         = useState([])
  const [rawHistory, setRawHistory] = useState([])
  const [dismissing, setDismissing] = useState(new Set())
  const [pickupError, setPickupError] = useState('')

  useEffect(() => {
    const unsubs = [
      subscribeOrders(setOrders),
      subscribeHistory(setRawHistory),
    ]
    return () => unsubs.forEach(u => u())
  }, [])

  const preparing = orders.filter(order => order.status === 'preparing' || order.status === 'active')
  const readyOrders = [
    ...orders.filter(order => order.status === 'ready'),
    ...rawHistory.filter(order => order.status === 'done' || order.status === 'ready'),
  ]
  const ready = readyOrders.filter(order => {
    const readyAt = order.readyAt || order.completedAt
    return readyAt && Date.now() - new Date(readyAt).getTime() < READY_TTL_MS
  })

  function displayKey(order) {
    return order.historyKey || order.firebaseKey || order.id
  }

  function buzzerNumber(order) {
    return order.buzzerNumber ?? (!order.orderNumber ? order.number : null)
  }

  function handlePickup(order) {
    const key = displayKey(order)
    setDismissing(prev => new Set(prev).add(key))
    setPickupError('')
    setTimeout(async () => {
      try {
        await markPickedUp(order)
      } catch (error) {
        console.error('Could not mark order as picked up:', error)
        setDismissing(prev => {
          const next = new Set(prev)
          next.delete(key)
          return next
        })
        setPickupError('No se pudo actualizar la orden. Pide ayuda al personal.')
      }
    }, 400)
  }

  return (
    <div className="display-screen">
      {/* Header */}
      <div className="display-header">
        <div className="display-brand">
          <Logo />
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

          {preparing.length === 0 ? (
            <div className="display-empty">
              <div className="display-empty-icon">✓</div>
              <div>All caught up</div>
              <div className="display-empty-sub">Al corriente</div>
            </div>
          ) : (
            <div className="display-numbers">
              {preparing.map(order => (
                <div key={displayKey(order)} className="display-number display-number--preparing">
                  <div className="display-number-val">{formatOrderNumber(order)}</div>
                  {buzzerNumber(order) != null && (
                    <div className="display-number-buzzer">Localizador #{buzzerNumber(order)}</div>
                  )}
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
                  key={displayKey(order)}
                  className={`display-number display-number--ready${dismissing.has(displayKey(order)) ? ' display-number--dismissing' : ''}`}
                >
                  <div className="display-number-val">{formatOrderNumber(order)}</div>
                  {buzzerNumber(order) != null && (
                    <div className="display-number-buzzer">Localizador #{buzzerNumber(order)}</div>
                  )}
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
        {pickupError || '💳 Pay at the window · Pague en la ventana'}
      </div>
    </div>
  )
}
