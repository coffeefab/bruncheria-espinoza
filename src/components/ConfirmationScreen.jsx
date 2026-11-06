export default function ConfirmationScreen({ order, onDone }) {
  return (
    <div className="confirmation-screen">
      <div className="confirmation-inner">
        <div className="confirmation-egg">🍳</div>
        <p className="confirmation-label">Got it! We've received your order.</p>
        <p className="confirmation-label-es">¡Listo! Recibimos tu orden.</p>
        <div className="confirmation-order-number">Order #{order.orderNumber}</div>
        <div className="confirmation-buzz">
          Head to the window to confirm and pay.
          <span>Show us your order number. We’ll confirm everything, take your payment, and give you a buzzer.</span>
          <span className="confirmation-buzz-es">Muestra tu número en la ventana. Confirmaremos tu orden, recibiremos el pago y te daremos un localizador.</span>
        </div>
        <p className="confirmation-footer-copy">
          Your order will be prepared once it’s confirmed at the window.
        </p>
      </div>

      <button className="btn-primary confirmation-new-order" onClick={onDone}>
        Start New Order
      </button>
    </div>
  )
}
