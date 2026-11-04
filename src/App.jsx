import { useState, useEffect } from 'react'
import WelcomeScreen from './components/WelcomeScreen'
import MenuScreen from './components/MenuScreen'
import ReviewScreen from './components/ReviewScreen'
import OrderNumberScreen from './components/OrderNumberScreen'
import ConfirmationScreen from './components/ConfirmationScreen'
import KitchenScreen from './components/KitchenScreen'
import DisplayScreen from './components/DisplayScreen'
import { fetchMenu, buildFallbackMenu } from './data/menu'
import { pushOrder, claimRinger } from './data/orders'

export const STORAGE_KEY = 'be_orders_v2'

export default function App() {
  const isKitchen = window.location.pathname.endsWith('/kitchen') || window.location.hash === '#kitchen'
  const isDisplay = window.location.pathname.endsWith('/display') || window.location.hash === '#display'

  // Menu data
  const [menuItems, setMenuItems] = useState([])
  // 'loading' | 'sheets' | 'fallback'
  const [menuSource, setMenuSource] = useState('loading')

  // Customer flow
  const [screen, setScreen] = useState('welcome')
  const [cart, setCart] = useState([])
  const [lastOrder, setLastOrder] = useState(null)
  const [toast, setToast] = useState(null)

  // Fetch menu on mount
  useEffect(() => {
    let cancelled = false
    fetchMenu()
      .then(items => {
        if (!cancelled) { setMenuItems(items); setMenuSource('sheets') }
      })
      .catch(() => {
        if (!cancelled) { setMenuItems(buildFallbackMenu()); setMenuSource('fallback') }
      })
    return () => { cancelled = true }
  }, [])


  function showToast(msg) {
    setToast(msg)
    setTimeout(() => setToast(null), 1600)
  }

  function resetToWelcome() {
    setScreen('welcome')
    setCart([])
    setLastOrder(null)
  }

  function handleAddItem(item, modifiers) {
    setCart(prev => [...prev, { id: Date.now(), item, modifiers }])
    showToast(`${item.name_en} added`)
  }

  function handleOrderNumberSelect(number) {
    const order = {
      id: Date.now(),
      number,
      cart: [...cart],
      status: 'active',
      timestamp: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    }
    // Navigate immediately — push to Firebase in background
    setLastOrder(order)
    setScreen('confirmation')
    claimRinger(number).catch(err => console.error('Ringer claim failed:', err))
    pushOrder(order).catch(err => console.error('Firebase push failed:', err))
  }

  if (isKitchen) return <KitchenScreen />
  if (isDisplay) return <DisplayScreen />

  return (
    <div className="app">
      {screen === 'welcome' && (
        <WelcomeScreen
          onStart={() => setScreen('menu')}
          menuLoading={menuSource === 'loading'}
        />
      )}

      {screen === 'menu' && (
        <MenuScreen
          cart={cart}
          menuItems={menuItems}
          menuSource={menuSource}
          onAddItem={handleAddItem}
          onCheckout={() => setScreen('review')}
          onBack={resetToWelcome}
        />
      )}

      {screen === 'review' && (
        <ReviewScreen
          cart={cart}
          onConfirm={() => setScreen('order-number')}
          onBack={() => setScreen('menu')}
          onReset={resetToWelcome}
        />
      )}

      {screen === 'order-number' && (
        <OrderNumberScreen
          onSelect={handleOrderNumberSelect}
          onBack={() => setScreen('review')}
        />
      )}

      {screen === 'confirmation' && lastOrder && (
        <ConfirmationScreen
          order={lastOrder}
          onDone={resetToWelcome}
        />
      )}

      {toast && <div className="toast">✓ {toast}</div>}
    </div>
  )
}
