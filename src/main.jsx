import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'

class AppErrorBoundary extends React.Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error) {
    console.error('App render failed:', error)
  }

  render() {
    if (this.state.error) {
      return (
        <main style={{
          minHeight: '100dvh',
          display: 'grid',
          placeContent: 'center',
          gap: 16,
          padding: 24,
          color: '#111',
          background: '#FDCC14',
          fontFamily: 'sans-serif',
          textAlign: 'center',
        }}>
          <h1>The kitchen screen couldn’t load.</h1>
          <p>Please refresh this page or return to the ordering screen.</p>
          <pre style={{ maxWidth: 720, whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}>
            {this.state.error?.message || 'Unknown rendering error'}
          </pre>
          <a href="/bruncheria-espinoza/" style={{ color: '#111', fontWeight: 700 }}>
            Return to ordering
          </a>
        </main>
      )
    }
    return this.props.children
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  </React.StrictMode>
)
