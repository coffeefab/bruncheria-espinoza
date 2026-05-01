// ─── Google Sheets config ────────────────────────────────────────────────────
// Publish sheet: File → Share → Publish to web → CSV → copy URL
export const MENU_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vThIbNlg4o0feIEFJ9nPwmcwCg13YvId2COr_rbjMUYfphhoVcOjTtw-Uqv_SnRE_VVGMbkDqpNC4tm/pub?output=csv'

// ─── CSV parsing ─────────────────────────────────────────────────────────────

function splitCSVLine(line) {
  const result = []
  let cur = ''
  let inQ = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (c === '"') {
      if (inQ && line[i + 1] === '"') { cur += '"'; i++ }
      else { inQ = !inQ }
    } else if (c === ',' && !inQ) {
      result.push(cur); cur = ''
    } else {
      cur += c
    }
  }
  result.push(cur)
  return result
}

function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/).filter(l => l.trim())
  if (lines.length < 2) return []
  const headers = splitCSVLine(lines[0]).map(h => h.trim())
  return lines.slice(1).map(line => {
    const vals = splitCSVLine(line)
    return Object.fromEntries(headers.map((h, i) => [h, (vals[i] ?? '').trim()]))
  })
}

// ─── Row → unified item model ─────────────────────────────────────────────────
// Expected columns: id, name_en, name_es, category, price, enabled,
//                   modifier_group, modifier_en, modifier_es, modifier_price

function transformRows(rows) {
  const map = new Map()

  for (const row of rows) {
    const {
      id, name_en, name_es, category, price, enabled,
      modifier_group, modifier_en, modifier_es, modifier_price,
    } = row

    if (!id || enabled?.toUpperCase() !== 'TRUE') continue

    const basePrice = parseFloat(price) || 0

    if (!map.has(id)) {
      map.set(id, {
        id,
        name_en: name_en || id,
        name_es: name_es || name_en || id,
        category: (category || 'food').toLowerCase(), // 'food' | 'drink'
        price: basePrice,
        modifiers: [],
      })
    } else {
      // Duplicate row → keep highest base price
      const item = map.get(id)
      if (basePrice > item.price) item.price = basePrice
    }

    // Attach modifier if this row defines one
    if (modifier_group && modifier_en) {
      const item = map.get(id)
      const modPrice = parseFloat(modifier_price) || 0
      const modId = `${id}::${modifier_group}::${modifier_en}`
      if (!item.modifiers.find(m => m.id === modId)) {
        item.modifiers.push({
          id: modId,
          group: modifier_group.toLowerCase(), // 'remove' | 'add'
          en: modifier_en,
          es: modifier_es || modifier_en,
          price: modPrice,
        })
      }
    }
  }

  return [...map.values()]
}

// ─── Public fetch function ────────────────────────────────────────────────────

export async function fetchMenu() {
  if (!MENU_CSV_URL || MENU_CSV_URL.startsWith('PASTE_')) {
    throw new Error('MENU_CSV_URL not configured')
  }
  const res = await fetch(MENU_CSV_URL)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const text = await res.text()
  const rows = parseCSV(text)
  const items = transformRows(rows)
  if (!items.length) throw new Error('Empty menu')
  return items
}

// ─── Local fallback data (original Square catalog) ───────────────────────────
// Converted to the same unified shape so components only handle one model.

const FALLBACK_MODIFIER_SETS = {
  remove: [
    { en: 'No Onion',    es: 'Sin cebolla',   price: 0 },
    { en: 'No Cilantro', es: 'Sin cilantro',  price: 0 },
    { en: 'No Beans',    es: 'Sin frijoles',  price: 0 },
    { en: 'No Avocado',  es: 'Sin aguacate',  price: 0 },
    { en: 'No Salsa',    es: 'Sin salsa',     price: 0 },
    { en: 'No Cheese',   es: 'Sin queso',     price: 0 },
    { en: 'No Egg',      es: 'Sin huevo',     price: 0 },
    { en: 'No Tomato',   es: 'Sin tomate',    price: 0 },
  ],
  add: [
    { en: 'Extra Meat',       es: 'Más carne',         price: 2.00 },
    { en: 'Add Egg',          es: 'Con huevo',          price: 1.50 },
    { en: 'Extra Avocado',    es: 'Más aguacate',       price: 1.00 },
    { en: 'Extra Cheese',     es: 'Más queso',          price: 0.50 },
    { en: 'Extra Salsa',      es: 'Más salsa',          price: 0    },
  ],
}

function buildModifiers(id, groups) {
  return groups.flatMap(group =>
    FALLBACK_MODIFIER_SETS[group].map(m => ({
      id: `${id}::${group}::${m.en}`,
      group,
      en: m.en,
      es: m.es,
      price: m.price,
    }))
  )
}

const RAW_FOOD = [
  { id: 'avocado-toast',       name_en: 'Avocado Toast',         name_es: 'Pan con Aguacate',          price: 8.50,  emoji: '🥑', subcategory: 'Brunch',   mods: ['remove','add'] },
  { id: 'huevos-rancheros',    name_en: 'Huevos Rancheros',      name_es: 'Huevos Rancheros',          price: 10.50, emoji: '🍳', subcategory: 'Brunch',   mods: ['remove','add'] },
  { id: 'croissant-sandwich',  name_en: 'Croissant Sandwich',    name_es: 'Sándwich de Croissant',     price: 6.50,  emoji: '🥐', subcategory: 'Brunch',   mods: ['remove','add'] },
  { id: 'burrito-ranchero',    name_en: 'Burrito Ranchero',      name_es: 'Burrito Ranchero',          price: 11.00, emoji: '🌯', subcategory: 'Burritos', mods: ['remove','add'] },
  { id: 'burrito-asada',       name_en: 'Burrito Asada',         name_es: 'Burrito de Asada',          price: 14.00, emoji: '🥩', subcategory: 'Burritos', mods: ['remove','add'] },
  { id: 'chilaquiles-burrito', name_en: 'Chilaquiles Burrito',   name_es: 'Burrito de Chilaquiles',    price: 13.00, emoji: '🌮', subcategory: 'Burritos', mods: ['remove','add'] },
  { id: 'chori-burrito',       name_en: 'Chori Burrito',         name_es: 'Burrito de Chorizo',        price: 12.00, emoji: '🌯', subcategory: 'Burritos', mods: ['remove','add'] },
  { id: 'chorizo-bowl',        name_en: 'Chorizo Bowl',          name_es: 'Bowl de Chorizo',           price: 13.00, emoji: '🥣', subcategory: 'Burritos', mods: ['remove','add'] },
  { id: 'concha-french-toast', name_en: 'Concha French Toast',   name_es: 'Pan Francés de Concha',     price: 8.00,  emoji: '🍞', subcategory: 'Sweet',    mods: [] },
  { id: 'strawberry-crepes',   name_en: 'Strawberry Crepes',     name_es: 'Crepas de Fresa',           price: 8.00,  emoji: '🥞', subcategory: 'Sweet',    mods: [] },
  { id: 'apple-cinnamon-crepe',name_en: 'Apple Cinnamon Crepe',  name_es: 'Crepa de Manzana y Canela', price: 6.99,  emoji: '🍎', subcategory: 'Sweet',    mods: [] },
  { id: 'churro-muffin',       name_en: 'Churro Muffin',         name_es: 'Muffin de Churro',          price: 3.50,  emoji: '🧁', subcategory: 'Sweet',    mods: [] },
]

const RAW_DRINKS = [
  { id: 'cafe-de-olla',  name_en: 'Café de Olla', name_es: 'Café de Olla',      price: 3.00, emoji: '☕' },
  { id: 'jamaica',       name_en: 'Jamaica',       name_es: 'Agua de Jamaica',   price: 4.00, emoji: '🌺' },
  { id: 'water-bottle',  name_en: 'Water',         name_es: 'Agua',              price: 1.00, emoji: '💧' },
]

export function buildFallbackMenu() {
  return [
    ...RAW_FOOD.map(r => ({
      id: r.id,
      name_en: r.name_en,
      name_es: r.name_es,
      category: 'food',
      subcategory: r.subcategory,
      emoji: r.emoji,
      price: r.price,
      modifiers: buildModifiers(r.id, r.mods),
    })),
    ...RAW_DRINKS.map(r => ({
      id: r.id,
      name_en: r.name_en,
      name_es: r.name_es,
      category: 'drink',
      emoji: r.emoji,
      price: r.price,
      modifiers: [],
    })),
  ]
}
