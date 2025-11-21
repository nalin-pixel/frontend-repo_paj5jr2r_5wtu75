import Hero from './components/Hero'
import Catalog from './components/Catalog'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-extrabold tracking-tight text-rose-900">momtobe</a>
          <nav className="hidden md:flex items-center gap-6 text-rose-800/80">
            <a href="#catalog" className="hover:text-rose-900">Каталог</a>
            <a href="#contact" className="hover:text-rose-900">Контакты</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Catalog />
        <Contact />
      </main>

      <footer className="py-10 bg-rose-50/60 border-t border-rose-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-rose-700/70">
          <div>© {new Date().getFullYear()} momtobe</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-rose-900">Политика конфиденциальности</a>
            <a href="#" className="hover:text-rose-900">Условия</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
