import { motion } from 'framer-motion'

export default function Hero() {
  const fallbackImg = 'https://placehold.co/1200x900/ffe4e6/7f1d1d?text=momtobe'

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-rose-50 to-pink-50" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-rose-900"
          >
            momtobe
          </motion.h1>
          <p className="mt-5 text-lg text-rose-800/80 max-w-xl">
            Аккуратная одежда для будущих мам: мягкие ткани, продуманный крой и комфорт на каждом этапе беременности.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#catalog" className="px-6 py-3 rounded-xl bg-rose-600 text-white font-medium shadow-md hover:bg-rose-700 transition">Каталог</a>
            <a href="#contact" className="px-6 py-3 rounded-xl bg-white text-rose-700 border border-rose-200 font-medium hover:bg-rose-50 transition">Связаться</a>
          </div>
          <div className="mt-8 text-sm text-rose-700/70">Бесплатная доставка от 5000₽ • Безопасная оплата</div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1400&auto=format&fit=crop"
            alt="momtobe"
            className="rounded-3xl shadow-2xl object-cover aspect-[4/3] w-full"
            referrerPolicy="no-referrer"
            onError={(e) => { e.currentTarget.src = fallbackImg }}
          />
        </motion.div>
      </div>
    </section>
  )
}
