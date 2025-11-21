const API_BASE = import.meta.env.VITE_BACKEND_URL || ''
const proxy = (url) => url ? `${API_BASE}/api/proxy-image?url=${encodeURIComponent(url)}` : ''

export default function ProductCard({ title, price, image_url, sizes }) {
  const fallbackImg = 'https://placehold.co/800x1000/fff1f2/7f1d1d?text=momtobe'
  const safePrice = typeof price === 'number' && !Number.isNaN(price) ? price : 0

  return (
    <div className="group rounded-2xl bg-white/70 backdrop-blur border border-rose-100 shadow-sm overflow-hidden hover:shadow-md transition">
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={proxy(image_url) || fallbackImg}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          referrerPolicy="no-referrer"
          onError={(e) => { e.currentTarget.src = fallbackImg }}
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-rose-900">{title}</h3>
        <div className="mt-1 text-rose-700">{safePrice.toFixed(2)} ₽</div>
        {sizes?.length ? (
          <div className="mt-3 flex flex-wrap gap-2 text-sm">
            {sizes.map((s) => (
              <span key={s} className="px-2 py-1 rounded-md bg-rose-50 text-rose-700 border border-rose-100">{s}</span>
            ))}
          </div>
        ) : null}
        <button className="mt-4 w-full py-2 rounded-xl bg-rose-600 text-white font-medium hover:bg-rose-700 transition">В корзину</button>
      </div>
    </div>
  )
}
