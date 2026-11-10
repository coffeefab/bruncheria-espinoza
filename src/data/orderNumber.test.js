import assert from 'node:assert/strict'
import test from 'node:test'
import { formatOrderNumber, shortOrderId } from './orderNumber.js'

test('formats legacy Firebase IDs as short order numbers', () => {
  assert.equal(formatOrderNumber({
    firebaseKey: 'P652cwNcgKz9QcEYRR',
    orderNumber: 'P652cwNcgKz9QcEYRR',
  }), 'QCEYRR')
})

test('keeps assigned numeric order numbers unchanged', () => {
  assert.equal(formatOrderNumber({ firebaseKey: 'firebase-key', orderNumber: 104 }), 104)
})

test('uses a short ID when an order has no assigned number', () => {
  assert.equal(shortOrderId('P654t93_hdAXYktzUwI'), 'KTZUWI')
  assert.equal(formatOrderNumber({ firebaseKey: 'P654t93_hdAXYktzUwI' }), 'KTZUWI')
})
