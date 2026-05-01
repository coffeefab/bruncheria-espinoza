import { useState } from 'react'
import { Logo } from './WelcomeScreen'

// ── Helpers ──────────────────────────────────────────────────────────────────

function itemTotal(item, selectedMods) {
  return item.price + selectedMods.reduce((s, m) => s + (m.price || 0), 0)
}

function cartTotal(cart) {
  return cart.reduce((s, ci) => s + itemTotal(ci.item, ci.modifiers), 0)
}

// ── Modifier bottom sheet ─────────────────────────────────────────────────────

function ModifierModal({ item, onDone, onClose }) {
  const [selected, setSelected] = useState([])

  function toggle(mod) {
    setSelected(prev =>
      prev.find(m => m.id === mod.id)
        ? prev.filter(m => m.id !== mod.id)
        : [...prev, mod]
    )
  }

  const removeGroup = item.modifiers.filter(m => m.group === 'remove')
  const addGroup    = item.modifiers.filter(m => m.group === 'add')

  const selectedTotal = selected.reduce((s, m) => s + (m.price || 0), 0)
  const lineTotal = item.price + selectedTotal

  return (
    <>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modifier-modal">
        <div className="modal-drag" />

        <div className="modal-header">
          {item.emoji && <span className="modal-item-emoji">{item.emoji}</span>}
          <span className="modal-item-name">{item.name_en}</span>
          <span className="modal-item-price">${lineTotal.toFixed(2)}</span>
        </div>

        <div className="modal-scroll">
          {removeGroup.length > 0 && (
            <ModifierGroup label="Remove" modifiers={removeGroup} selected={selected} onToggle={toggle} />
          )}
          {addGroup.length > 0 && (
            <ModifierGroup label="Add" modifiers={addGroup} selected={selected} onToggle={toggle} />
          )}
          {item.modifiers.length === 0 && (
            <p style={{ color: 'var(--gray)', fontSize: 14, padding: '12px 0' }}>
              No modifications available
            </p>
          )}
        </div>

        <div className="modal-footer">
          <button className="btn-primary" onClick={() => onDone(selected)}>
            Add to Order · ${lineTotal.toFixed(2)}
          </button>
        </div>
      </div>
    </>
  )
}

function ModifierGroup({ label, modifiers, selected, onToggle }) {
  return (
    <div className="modifier-group">
      <div className="modifier-group-label">{label}</div>
      <div className="modifier-grid">
        {modifiers.map(mod => {
          const on = !!selected.find(m => m.id === mod.id)
          return (
            <button
              key={mod.id}
              className={`modifier-btn${on ? ' selected' : ''}`}
              onClick={() => onToggle(mod)}
            >
              <span>
                {mod.en}
                {mod.price > 0 && (
                  <span style={{ fontWeight: 600, color: 'var(--gray)', marginLeft: 4 }}>
                    (+${mod.price.toFixed(2)})
                  </span>
                )}
              </span>
              {on && <span className="modifier-check">✓</span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ── Menu screen ───────────────────────────────────────────────────────────────

export default function MenuScreen({ cart, menuItems, menuSource, onAddItem, onCheckout, onBack }) {
  const [modalItem, setModalItem] = useState(null)

  const total = cartTotal(cart)
  const count = cart.length

  const countById = cart.reduce((acc, ci) => {
    acc[ci.item.id] = (acc[ci.item.id] || 0) + 1
    return acc
  }, {})

  function handleTap(item) {
    if (item.modifiers && item.modifiers.length > 0) {
      setModalItem(item)
    } else {
      onAddItem(item, [])
    }
  }

  function handleModalDone(modifiers) {
    onAddItem(modalItem, modifiers)
    setModalItem(null)
  }

  // Derive sections from unified item list
  const foodItems  = menuItems.filter(i => i.category === 'food')
  const drinkItems = menuItems.filter(i => i.category === 'drink')

  // Group food by subcategory (present in fallback data) or show flat
  const foodSections = buildFoodSections(foodItems)

  return (
    <div className="menu-screen">
      <div className="menu-header">
        <button className="btn-back" onClick={onBack}>← Back</button>
        <Logo />
        {count > 0 && (
          <button className="menu-checkout-btn" onClick={onCheckout} style={{ marginLeft: 'auto' }}>
            <span className="menu-badge">{count}</span>
            ${total.toFixed(2)}
          </button>
        )}
      </div>

      {menuSource === 'fallback' && (
        <div style={{
          background: '#FFF8DC',
          borderBottom: '1px solid #E8D87A',
          padding: '6px 20px',
          fontSize: 12,
          fontWeight: 600,
          color: '#7A6A00',
          flexShrink: 0,
        }}>
          ⚠ Using backup menu — Google Sheet unavailable
        </div>
      )}

      {menuItems.length === 0 ? (
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gray)' }}>
          Loading menu…
        </div>
      ) : (
        <div className="menu-scroll">
          {foodSections.map(({ label, items }) => (
            <div key={label} className="menu-section">
              <div className="menu-section-label">{label}</div>
              <div className="menu-grid">
                {items.map(item => (
                  <ItemButton
                    key={item.id}
                    item={item}
                    count={countById[item.id]}
                    onTap={() => handleTap(item)}
                  />
                ))}
              </div>
            </div>
          ))}

          {drinkItems.length > 0 && (
            <div className="menu-section">
              <div className="menu-section-label">Drinks</div>
              <div className="menu-grid">
                {drinkItems.map(item => (
                  <ItemButton
                    key={item.id}
                    item={item}
                    count={countById[item.id]}
                    onTap={() => handleTap(item)}
                    isDrink
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {count > 0 && (
        <div className="menu-footer">
          <button className="btn-primary" onClick={onCheckout}>
            Review Order · ${total.toFixed(2)}
          </button>
        </div>
      )}

      {modalItem && (
        <ModifierModal
          item={modalItem}
          onDone={handleModalDone}
          onClose={() => setModalItem(null)}
        />
      )}
    </div>
  )
}

function ItemButton({ item, count, onTap, isDrink }) {
  return (
    <button className={`menu-item-btn${isDrink ? ' drink-btn' : ''}`} onClick={onTap}>
      {count > 0 && <span className="menu-item-count">×{count}</span>}
      {item.emoji && <span className="menu-item-emoji">{item.emoji}</span>}
      <span className="menu-item-name">{item.name_en}</span>
      <span className="menu-item-price">${item.price.toFixed(2)}</span>
    </button>
  )
}

function buildFoodSections(foodItems) {
  const hasSub = foodItems.some(i => i.subcategory)
  if (!hasSub) return [{ label: 'Food', items: foodItems }]

  const order = []
  const map = {}
  for (const item of foodItems) {
    const sub = item.subcategory || 'Other'
    if (!map[sub]) { map[sub] = []; order.push(sub) }
    map[sub].push(item)
  }
  return order.map(label => ({ label, items: map[label] }))
}
