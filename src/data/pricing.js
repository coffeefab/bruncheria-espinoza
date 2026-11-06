export const TAX_RATE = 0.07

export function calculateOrderTotals(cart) {
  const subtotalCents = cart.reduce((sum, cartItem) => {
    const itemPrice = cartItem.item.price
    const modifierPrice = cartItem.modifiers.reduce((modifierSum, modifier) => (
      modifierSum + (modifier.price || 0)
    ), 0)
    return sum + Math.round((itemPrice + modifierPrice) * 100)
  }, 0)
  const taxCents = Math.round(subtotalCents * TAX_RATE)

  return {
    subtotal: subtotalCents / 100,
    tax: taxCents / 100,
    total: (subtotalCents + taxCents) / 100,
  }
}
