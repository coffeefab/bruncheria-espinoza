import { useState, useEffect, useRef } from 'react'
import WelcomeScreen from './components/WelcomeScreen'
import MenuScreen from './components/MenuScreen'
import ReviewScreen from './components/ReviewScreen'
import ConfirmationScreen from './components/ConfirmationScreen'
import KitchenScreen from './components/KitchenScreen'
import DisplayScreen from './components/DisplayScreen'
import { fetchMenu, buildFallbackMenu } from './data/menu'
import { pushOrder } from './data/orders'

export const STORAGE_KEY = 'be_orders_v2'

export default function App() {
  const [routeHash, setRouteHash] = useState(window.location.hash)
  const routeQuery = new URLSearchParams(window.location.search).get('view')
  const isKitchen = window.location.pathname.endsWith('/kitchen')
    || routeHash === '#kitchen'
    || routeQuery === 'kitchen'
  const isDisplay = window.location.pathname.endsWith('/display')
    || routeHash === '#display'
    || routeQuery === 'display'

  // Menu data
  const [menuItems, setMenuItems] = useState([])
  // 'loading' | 'sheets' | 'fallback'
  const [menuSource, setMenuSource] = useState('loading')

  // Customer flow
  const [screen, setScreen] = useState('welcome')
  const [cart, setCart] = useState([])
  const [lastOrder, setLastOrder] = useState(null)
  const [toast, setToast] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const submittingRef = useRef(false)
  const submissionAttempt = useRef(null)

  useEffect(() => {
    const handleHashChange = () => setRouteHash(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

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
    setSubmitError('')
    submissionAttempt.current = null
  }

  function handleAddItem(item, modifiers) {
    setCart(prev => [...prev, { id: Date.now(), item, modifiers }])
    showToast(`${item.name_en} added`)
  }

  async function handleSubmitOrder() {
    if (submittingRef.current || !cart.length) return
    submittingRef.current = true
    setSubmitting(true)
    setSubmitError('')
    submissionAttempt.current ||= {}
    try {
      const order = await pushOrder({ cart: [...cart] }, submissionAttempt.current)
      setLastOrder(order)
      setScreen('confirmation')
    } catch (error) {
      console.error('Order submission failed:', error)
      const code = typeof error?.code === 'string' ? error.code : 'unknown'
      const detail = typeof error?.message === 'string'
        ? error.message.replace(/https?:\/\/\S+/g, '[Firebase endpoint]').slice(0, 180)
        : 'No error details returned.'
      setSubmitError(`Order error [${code}]: ${detail}`)
    } finally {
      submittingRef.current = false
      setSubmitting(false)
    }
  }

  useEffect(() => {
    if (screen !== 'confirmation') return
    const timer = setTimeout(resetToWelcome, 60_000)
    return () => clearTimeout(timer)
  }, [screen, lastOrder])

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
          submitting={submitting}
          submitError={submitError}
          orderLocked={!!submissionAttempt.current}
          onConfirm={handleSubmitOrder}
          onBack={() => setScreen('menu')}
          onRemoveItem={id => setCart(current => current.filter(item => item.id !== id))}
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
