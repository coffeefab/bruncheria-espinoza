import { useState, useEffect, useRef } from 'react'
import {
  subscribeOrders, subscribeHistory, subscribeRingers,
  moveOrderToHistory, restoreFromHistory, claimRinger, cancelOrder, markPickedUp,
} from '../data/orders'

const UNDO_MS = 8000

function Clock() {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return (
    <span className="kitchen-time">
      {time.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })}
    </span>
  )
}

export default function KitchenScreen() {
  const [tab, setTab]         = useState('active')
  const [orders, setOrders]   = useState([])
  const [history, setHistory] = useState([])
  const [inUse, setInUse]     = useState(new Set())
  const [loading, setLoading] = useState(true)
  const [undoItem, setUndoItem] = useState(null) // { historyOrder, timer }
  const undoTimer = useRef(null)

  useEffect(() => {
    const unsubs = [
      subscribeOrders(incoming => { setOrders(incoming.filter(o => o.status === 'active')); setLoading(false) }),
      subscribeHistory(setHistory),
      subscribeRingers(setInUse),
    ]
    return () => unsubs.forEach(u => u())
  }, [])

  async function handleDone(order) {
    const historyKey = await moveOrderToHistory(order)
    const historyOrder = {
      ...order,
      historyKey,
      status: 'done',
      completedAt: new Date().toISOString(),
    }
    if (undoTimer.current) clearTimeout(undoTimer.current)
    setUndoItem(historyOrder)
    undoTimer.current = setTimeout(() => setUndoItem(null), UNDO_MS)
  }

  async function handleUndo() {
    if (!undoItem) return
    clearTimeout(undoTimer.current)
    const ringerFree = !inUse.has(undoItem.number)
    await restoreFromHistory(undoItem, ringerFree)
    setUndoItem(null)
  }

  async function handleCancel(order) {
    await cancelOrder(order)
  }

  async function handleRestore(historyOrder) {
    const ringerFree = !inUse.has(historyOrder.number)
    await restoreFromHistory(historyOrder, ringerFree)
    if (!ringerFree) {
      alert(`⚠️ Localizador #${historyOrder.number} está en uso. La orden fue restaurada sin re-asignar el localizador.`)
    }
  }

  async function handlePickup(historyOrder) {
    await markPickedUp(historyOrder)
  }

  if (loading) {
    return (
      <div className="kitchen-screen">
        <div className="kitchen-empty">
          <div className="kitchen-empty-emoji">⏳</div>
          <div>Cargando órdenes…</div>
        </div>
      </div>
    )
  }

  return (
    <div className="kitchen-screen">
      {/* Header */}
      <div className="kitchen-header">
        <div className="kitchen-title">🌮 Bruncheria</div>
        <div className="kitchen-status">
          <Clock />
          <span className="kitchen-badge">
            {orders.length} {orders.length === 1 ? 'orden' : 'órdenes'}
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="kitchen-tabs">
        <button
          className={`kitchen-tab${tab === 'active' ? ' kitchen-tab--active' : ''}`}
          onClick={() => setTab('active')}
        >
          Activas {orders.length > 0 && <span className="kitchen-tab-count">{orders.length}</span>}
        </button>
        <button
          className={`kitchen-tab${tab === 'history' ? ' kitchen-tab--active' : ''}`}
          onClick={() => setTab('history')}
        >
          Historial {history.length > 0 && <span className="kitchen-tab-count">{history.length}</span>}
        </button>
      </div>

      {/* Undo banner */}
      {undoItem && (
        <div className="kitchen-undo-bar">
          <span>Orden #{undoItem.number} completada</span>
          <button className="kitchen-undo-btn" onClick={handleUndo}>↩ Deshacer</button>
        </div>
      )}

      {/* Active orders */}
      {tab === 'active' && (
        orders.length === 0 ? (
          <div className="kitchen-empty">
            <div className="kitchen-empty-emoji">✅</div>
            <div>Al corriente</div>
            <div style={{ fontSize: 20, fontWeight: 500 }}>Sin órdenes pendientes</div>
          </div>
        ) : (
          <div className="kitchen-scroll">
            <div className="kitchen-grid">
              {orders.map(order => (
                <KitchenOrder key={order.firebaseKey || order.id} order={order} onDone={() => handleDone(order)} onCancel={() => handleCancel(order)} />
              ))}
            </div>
          </div>
        )
      )}

      {/* History */}
      {tab === 'history' && (
        history.length === 0 ? (
          <div className="kitchen-empty">
            <div className="kitchen-empty-emoji">📋</div>
            <div>Sin historial aún</div>
          </div>
        ) : (
          <div className="kitchen-scroll">
            <div className="kitchen-grid">
              {history.map(order => (
                <KitchenHistoryOrder
                  key={order.historyKey}
                  order={order}
                  ringerInUse={inUse.has(order.number)}
                  onRestore={() => handleRestore(order)}
                  onPickup={() => handlePickup(order)}
                />
              ))}
            </div>
          </div>
        )
      )}
    </div>
  )
}

function KitchenOrder({ order, onDone, onCancel }) {
  const [confirming, setConfirming] = useState(false)
  const created = new Date(order.createdAt || order.timestamp)
  const elapsed = Math.floor((Date.now() - created.getTime()) / 60_000)
  const isOld = elapsed >= 10
  const timeLabel = created.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })

  if (confirming) {
    return (
      <div className="kitchen-order kitchen-order--confirming">
        <div className="kitchen-order-number">{order.number}</div>
        <div className="kitchen-divider" />
        <div className="kitchen-cancel-confirm">
          <div className="kitchen-cancel-icon">🗑️</div>
          <div className="kitchen-cancel-question">¿Cancelar esta orden?</div>
          <div className="kitchen-cancel-hint">Se eliminará permanentemente</div>
          <button className="kitchen-cancel-yes-btn" onClick={onCancel}>Sí, cancelar</button>
          <button className="kitchen-cancel-no-btn" onClick={() => setConfirming(false)}>No, regresar</button>
        </div>
      </div>
    )
  }

  return (
    <div className={`kitchen-order${isOld ? ' kitchen-order--urgent' : ''}`}>
      <div className="kitchen-order-header">
        <div className="kitchen-order-timestamp">{timeLabel}</div>
        <button className="kitchen-cancel-trigger" onClick={() => setConfirming(true)} title="Cancelar orden">✕</button>
      </div>
      <div className="kitchen-order-number">{order.number}</div>
      <div className="kitchen-divider" />
      <div className="kitchen-items">
        {order.cart.map(ci => {
          const name = ci.item.name_es || ci.item.nameEs || ci.item.name_en || ''
          return (
            <div key={ci.id} className="kitchen-item">
              <div className="kitchen-item-name">{ci.item.emoji && `${ci.item.emoji} `}{name}</div>
              {ci.modifiers?.length > 0 && (
                <div className="kitchen-item-mods">
                  {ci.modifiers.map(m => (
                    <span key={m.id} className="kitchen-mod-tag">{m.es || m.nameEs || m.en}</span>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
      {isOld && (
        <div className="kitchen-order-delayed">Retrasado</div>
      )}
      {!isOld && elapsed > 0 && (
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
          hace {elapsed}min
        </div>
      )}
      <button className="kitchen-done-btn" onClick={onDone}>✓ LISTO</button>
    </div>
  )
}

function KitchenHistoryOrder({ order, ringerInUse, onRestore, onPickup }) {
  const completedAt = order.completedAt
    ? new Date(order.completedAt).toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })
    : '—'

  return (
    <div className="kitchen-order kitchen-order--history">
      <div className="kitchen-order-number kitchen-order-number--history">{order.number}</div>
      <div className="kitchen-divider" />
      <div className="kitchen-items">
        {order.cart.map(ci => {
          const name = ci.item.name_es || ci.item.nameEs || ci.item.name_en || ''
          return (
            <div key={ci.id} className="kitchen-item">
              <div className="kitchen-item-name" style={{ opacity: 0.6 }}>{ci.item.emoji && `${ci.item.emoji} `}{name}</div>
            </div>
          )
        })}
      </div>
      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
        Completada a las {completedAt}
        {ringerInUse && <div style={{ color: '#FF6B6B', marginTop: 2 }}>⚠ Localizador en uso</div>}
      </div>
      <button className="kitchen-pickup-btn" onClick={onPickup}>✓ Recogido</button>
      <button className="kitchen-restore-btn" onClick={onRestore}>↩ Restaurar</button>
    </div>
  )
}
