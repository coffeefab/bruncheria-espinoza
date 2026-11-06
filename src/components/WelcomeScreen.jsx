// Logo used in screen headers
export function Logo() {
  return (
    <img
      src="/logo.png"
      alt="Bruncheria Espinoza"
      style={{ height: 60, width: 60, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
    />
  )
}

export default function WelcomeScreen({ onStart, menuLoading }) {
  return (
    <div className="welcome-screen">
      <div className="welcome-brand">
        <img src="/logo.png" alt="Bruncheria Espinoza" className="welcome-logo-img" />
      </div>

      <div className="welcome-instruction">Order here, pay at the window.</div>

      <button
        className="welcome-cta"
        onClick={onStart}
        disabled={menuLoading}
        style={menuLoading ? { opacity: 0.6, cursor: 'default', animation: 'none' } : {}}
      >
        {menuLoading ? (
          <span>Loading menu…</span>
        ) : (
          <>
            <span>Order Here</span>
            <span className="welcome-cta-sep">·</span>
            <span>Ordene Aquí</span>
          </>
        )}
      </button>

      {/* Testing only — remove before production */}
      <a
        href="#kitchen"
        style={{
          position: 'absolute',
          bottom: 16,
          right: 20,
          fontSize: 12,
          fontWeight: 600,
          color: 'rgba(0,0,0,0.35)',
          textDecoration: 'none',
          padding: '6px 12px',
          borderRadius: 999,
          background: 'rgba(0,0,0,0.08)',
        }}
      >
        🍳 Kitchen view
      </a>
    </div>
  )
}
