export function shortOrderId(firebaseKey) {
  return firebaseKey.slice(-6).toUpperCase()
}

export function formatOrderNumber(order) {
  const number = order?.orderNumber ?? order?.number
  if (number == null && order?.firebaseKey) return shortOrderId(order.firebaseKey)
  if (typeof number === 'string' && number === order?.firebaseKey) {
    return shortOrderId(number)
  }
  return number ?? '—'
}
