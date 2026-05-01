export default function ConfirmationScreen({ order, onDone }) {
  return (
    <div className="confirmation-screen">
      <div className="confirmation-inner">
        {/* Animated egg */}
        <div className="confirmation-egg">🍳</div>

        <p className="confirmation-label">We're working on your order!</p>
        <p className="confirmation-label-es">¡Estamos preparando su orden!</p>

        {/* Ringer number */}
        <div className="confirmation-ringer-tag">{order.number}</div>

        {/* Buzz line */}
        <div className="confirmation-buzz">
          Your ringer will buzz when it's ready
          <span className="confirmation-buzz-es">Su localizador vibrará cuando esté lista</span>
        </div>

        {/* Pay pill */}
        <div className="confirmation-pay">
          💳 Pay at the window · Pague en la ventana
        </div>
      </div>

      <button className="btn-primary confirmation-new-order" onClick={onDone}>
        Start New Order · Nueva Orden
      </button>
    </div>
  )
}
