import { useState, useEffect, useRef } from 'react'
import {
  cancelOrder, confirmOrder, markOrderReady, markPickedUp, releaseOrderBuzzer,
  restoreFromHistory, subscribeHistory, subscribeOrders, subscribeRingers,
  updatePendingOrder,
} from '../data/orders'
import ReviewOrderCard from './ReviewOrderCard'

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

function orderNumber(order) {
  return order.orderNumber ?? order.number
}

function buzzerNumber(order) {
  return order.buzzerNumber ?? (!order.orderNumber ? order.number : null)
}

export default function KitchenScreen() {
  const [tab, setTab] = useState('review')
  const [orders, setOrders] = useState([])
  const [history, setHistory] = useState([])
  const [inUse, setInUse] = useState(new Set())
  const [loading, setLoading] = useState(true)
  const [dataError, setDataError] = useState('')
  const [actionError, setActionError] = useState('')
  const [undoItem, setUndoItem] = useState(null)
  const undoTimer = useRef(null)

  useEffect(() => {
    setLoading(true)
    setDataError('')
    const handleDataError = error => {
      console.error('Kitchen data subscription failed:', error)
      setDataError('No se pudieron cargar los datos. Verifica las reglas de acceso de Firebase.')
      setLoading(false)
    }
    const unsubs = [
      subscribeOrders(incoming => { setOrders(incoming); setLoading(false) }, handleDataError),
      subscribeHistory(setHistory, handleDataError),
      subscribeRingers(setInUse, handleDataError),
    ]
    return () => unsubs.forEach(unsubscribe => unsubscribe())
  }, [])

  async function handleDone(order) {
    try {
      const readyOrder = await markOrderReady(order)
      if (undoTimer.current) clearTimeout(undoTimer.current)
      setUndoItem(readyOrder)
      undoTimer.current = setTimeout(() => setUndoItem(null), UNDO_MS)
      setActionError('')
    } catch (error) {
      console.error('Could not mark order ready:', error)
      setActionError(error.message || 'No se pudo actualizar la orden.')
    }
  }

  async function handleUndo() {
    if (!undoItem) return
    clearTimeout(undoTimer.current)
    try {
      await restoreFromHistory(undoItem)
      setUndoItem(null)
      setActionError('')
    } catch (error) {
      console.error('Could not undo ready order:', error)
      setActionError(error.message || 'No se pudo restaurar la orden.')
    }
  }

  async function handleCancel(order) {
    try {
      await cancelOrder(order)
      setActionError('')
    } catch (error) {
      console.error('Could not cancel order:', error)
      setActionError(error.message || 'No se pudo cancelar la orden.')
    }
  }

  async function handleRestore(order) {
    try {
      await restoreFromHistory(order)
      setActionError('')
    } catch (error) {
      console.error('Could not restore order:', error)
      setActionError(error.message || 'No se pudo restaurar la orden.')
    }
  }

  async function handlePickup(order) {
    try {
      await markPickedUp(order)
      setActionError('')
    } catch (error) {
      console.error('Could not mark order as picked up:', error)
      setActionError(error.message || 'No se pudo completar la entrega.')
    }
  }

  async function handleReleaseBuzzer(order) {
    try {
      await releaseOrderBuzzer(order)
      setActionError('')
    } catch (error) {
      console.error('Could not release buzzer:', error)
      setActionError(error.message || 'No se pudo liberar el localizador.')
    }
  }

  if (loading || dataError) {
    return (
      <div className="kitchen-screen">
        <div className="kitchen-empty">
          <div className="kitchen-empty-emoji">{dataError ? '⚠️' : '⏳'}</div>
          <div>{dataError || 'Cargando órdenes…'}</div>
        </div>
      </div>
    )
  }

  const awaiting = orders.filter(order => order.status === 'awaiting_confirmation')
  const preparing = orders.filter(order => order.status === 'preparing' || order.status === 'active')
  const archiveItems = [
    ...history,
    ...orders.filter(order => ['ready', 'completed', 'cancelled'].includes(order.status)),
  ]
  const archiveById = new Map(archiveItems.map(order => [
    order.historyKey || order.firebaseKey || order.id,
    order,
  ]))
  const archived = [...archiveById.values()].sort((a, b) => (
    new Date(b.readyAt || b.completedAt || b.cancelledAt || b.timestamp)
    - new Date(a.readyAt || a.completedAt || a.cancelledAt || a.timestamp)
  ))

  return (
    <div className="kitchen-screen">
      <div className="kitchen-header">
        <div className="kitchen-title">🌮 Bruncheria</div>
        <div className="kitchen-status">
          <Clock />
          <span className="kitchen-badge">{awaiting.length} por confirmar · {preparing.length} en cocina</span>
        </div>
      </div>

      <div className="kitchen-tabs">
        <button className={`kitchen-tab${tab === 'review' ? ' kitchen-tab--active' : ''}`} onClick={() => setTab('review')}>
          Por confirmar {awaiting.length > 0 && <span className="kitchen-tab-count">{awaiting.length}</span>}
        </button>
        <button className={`kitchen-tab${tab === 'active' ? ' kitchen-tab--active' : ''}`} onClick={() => setTab('active')}>
          Cocina {preparing.length > 0 && <span className="kitchen-tab-count">{preparing.length}</span>}
        </button>
        <button className={`kitchen-tab${tab === 'history' ? ' kitchen-tab--active' : ''}`} onClick={() => setTab('history')}>
          Historial {archived.length > 0 && <span className="kitchen-tab-count">{archived.length}</span>}
        </button>
      </div>

      {undoItem && (
        <div className="kitchen-undo-bar">
          <span>Pedido #{orderNumber(undoItem)} marcado listo</span>
          <button className="kitchen-undo-btn" onClick={handleUndo}>↩ Deshacer</button>
        </div>
      )}
      {actionError && <div className="kitchen-action-error" role="alert">{actionError}</div>}

      {tab === 'review' && (
        <div className="kitchen-scroll">
          {awaiting.length === 0 ? (
            <div className="kitchen-empty">
              <div className="kitchen-empty-emoji">✅</div>
              <div>Al corriente</div>
              <div style={{ fontSize: 20, fontWeight: 500 }}>No hay órdenes por confirmar</div>
            </div>
          ) : (
            <div className="staff-order-grid">
              {awaiting.map(order => (
                <ReviewOrderCard
                  key={order.firebaseKey || order.id}
                  order={order}
                  onSave={cart => updatePendingOrder(order, cart)}
                  onCancel={() => handleCancel(order)}
                  onConfirm={(buzzer, paid) => confirmOrder(order, buzzer, paid)}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {tab === 'active' && (
        preparing.length === 0 ? (
          <div className="kitchen-empty">
            <div className="kitchen-empty-emoji">✅</div>
            <div>Al corriente</div>
            <div style={{ fontSize: 20, fontWeight: 500 }}>Sin órdenes pendientes</div>
          </div>
        ) : (
          <div className="kitchen-scroll">
            <div className="kitchen-grid">
              {preparing.map(order => (
                <KitchenOrder
                  key={order.firebaseKey || order.id}
                  order={order}
                  onDone={() => handleDone(order)}
                  onCancel={() => handleCancel(order)}
                />
              ))}
            </div>
          </div>
        )
      )}

      {tab === 'history' && (
        archived.length === 0 ? (
          <div className="kitchen-empty">
            <div className="kitchen-empty-emoji">📋</div>
            <div>Sin historial aún</div>
          </div>
        ) : (
          <div className="kitchen-scroll">
            <div className="kitchen-grid">
              {archived.map(order => (
                <KitchenHistoryOrder
                  key={order.historyKey || order.firebaseKey || order.id}
                  order={order}
                  ringerInUse={inUse.has(buzzerNumber(order))}
                  onRestore={() => handleRestore(order)}
                  onPickup={() => handlePickup(order)}
                  onReleaseBuzzer={() => handleReleaseBuzzer(order)}
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
        <KitchenIdentifiers order={order} />
        <div className="kitchen-divider" />
        <div className="kitchen-cancel-confirm">
          <div className="kitchen-cancel-icon">🗑️</div>
          <div className="kitchen-cancel-question">¿Cancelar esta orden?</div>
          <div className="kitchen-cancel-hint">Se conservará en el historial</div>
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
      <KitchenIdentifiers order={order} />
      <div className="kitchen-divider" />
      <div className="kitchen-items">
        {order.cart.map(cartItem => {
          const name = cartItem.item.name_es || cartItem.item.nameEs || cartItem.item.name_en || ''
          return (
            <div key={cartItem.id} className="kitchen-item">
              <div className="kitchen-item-name">{cartItem.item.emoji && `${cartItem.item.emoji} `}{name}</div>
              {cartItem.modifiers?.length > 0 && (
                <div className="kitchen-item-mods">
                  {cartItem.modifiers.map(modifier => (
                    <span key={modifier.id} className="kitchen-mod-tag">{modifier.es || modifier.nameEs || modifier.en}</span>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
      {isOld && <div className="kitchen-order-delayed">Retrasado</div>}
      {!isOld && elapsed > 0 && (
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>hace {elapsed}min</div>
      )}
      <button className="kitchen-done-btn" onClick={onDone}>✓ LISTO</button>
    </div>
  )
}

function KitchenIdentifiers({ order }) {
  return (
    <div className="kitchen-identifiers">
      <div>Pedido #{orderNumber(order)}</div>
      {buzzerNumber(order) != null && <span>Localizador #{buzzerNumber(order)}</span>}
    </div>
  )
}

function KitchenHistoryOrder({ order, ringerInUse, onRestore, onPickup, onReleaseBuzzer }) {
  const isReady = order.status === 'ready' || order.status === 'done'
  const statusLabel = order.status === 'cancelled'
    ? 'Cancelada'
    : isReady ? 'Lista' : 'Entregada'
  const hasBuzzer = buzzerNumber(order) != null
  const timestamp = order.completedAt || order.readyAt || order.cancelledAt || order.completedAt
  const timeLabel = timestamp
    ? new Date(timestamp).toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })
    : '—'

  return (
    <div className="kitchen-order kitchen-order--history">
      <KitchenIdentifiers order={order} />
      <div className="kitchen-divider" />
      <div className="kitchen-items">
        {(order.cart || []).map(cartItem => {
          const name = cartItem.item.name_es || cartItem.item.nameEs || cartItem.item.name_en || ''
          return (
            <div key={cartItem.id} className="kitchen-item">
              <div className="kitchen-item-name" style={{ opacity: 0.6 }}>
                {cartItem.item.emoji && `${cartItem.item.emoji} `}{name}
              </div>
            </div>
          )
        })}
      </div>
      <div className="kitchen-history-status">{statusLabel} · {timeLabel}</div>
      {isReady && (
        <>
          <button className="kitchen-pickup-btn" onClick={onPickup}>✓ Entregado</button>
          <button className="kitchen-restore-btn" onClick={onRestore}>↩ Restaurar a cocina</button>
        </>
      )}
      {!isReady && hasBuzzer && ringerInUse && (
        <button className="kitchen-restore-btn" onClick={onReleaseBuzzer}>Liberar localizador devuelto</button>
      )}
    </div>
  )
}
