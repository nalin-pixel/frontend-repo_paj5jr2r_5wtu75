export default function ProductCard({ title, price, image_url, sizes }) {
  return (
    <div className="group rounded-2xl bg-white/70 backdrop-blur border border-rose-100 shadow-sm overflow-hidden hover:shadow-md transition">
      <div className="aspect-[4/5] overflow-hidden">
        <img src={image_url} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-rose-900">{title}</h3>
        <div className="mt-1 text-rose-700">{price.toFixed(2)} ₽</div>
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
