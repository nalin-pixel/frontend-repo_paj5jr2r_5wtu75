import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Catalog() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API_BASE}/api/products`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setError('Не удалось загрузить каталог')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="catalog" className="relative py-16 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-rose-900">Каталог</h2>
            <p className="mt-1 text-rose-700/70">Тщательно подобранные модели для ежедневного комфорта</p>
          </div>
        </div>
        {loading && <div className="text-rose-700">Загрузка…</div>}
        {error && <div className="text-rose-700">{error}</div>}
        {!loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p, idx) => (
              <ProductCard key={idx} {...p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
