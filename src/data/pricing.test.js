import assert from 'node:assert/strict'
import test from 'node:test'
import { calculateOrderTotals } from './pricing.js'

test('calculates subtotal, 7% tax, and total including paid modifiers', () => {
  const cart = [
    { item: { price: 10 }, modifiers: [{ price: 1.5 }] },
    { item: { price: 2 }, modifiers: [] },
  ]

  assert.deepEqual(calculateOrderTotals(cart), {
    subtotal: 13.5,
    tax: 0.95,
    total: 14.45,
  })
})

test('returns zero totals for an empty cart', () => {
  assert.deepEqual(calculateOrderTotals([]), {
    subtotal: 0,
    tax: 0,
    total: 0,
  })
})
