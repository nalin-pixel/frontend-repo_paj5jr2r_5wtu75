import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [status, setStatus] = useState('')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('')
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Request failed')
      setForm({ name: '', email: '', message: '' })
      setStatus('Ваше сообщение отправлено!')
    } catch (e) {
      setStatus('Ошибка отправки. Попробуйте позже.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-3xl font-bold text-rose-900">Обратная связь</h3>
          <p className="mt-2 text-rose-700/80">Есть вопрос по размеру или заказу? Напишите нам — ответим в течение дня.</p>
          <ul className="mt-6 space-y-2 text-rose-700/70">
            <li>Электронная почта: hello@momtobe.shop</li>
            <li>График: пн-пт 10:00–18:00</li>
          </ul>
        </div>
        <form onSubmit={onSubmit} className="bg-rose-50/60 border border-rose-100 rounded-2xl p-6">
          <div className="grid gap-4">
            <input required placeholder="Ваше имя" className="px-4 py-3 rounded-xl bg-white border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} />
            <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-white border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
            <textarea required rows="4" placeholder="Сообщение" className="px-4 py-3 rounded-xl bg-white border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} />
          </div>
          <button className="mt-4 w-full py-3 rounded-xl bg-rose-600 text-white font-medium hover:bg-rose-700 transition">Отправить</button>
          {status && <div className="mt-3 text-rose-700">{status}</div>}
        </form>
      </div>
    </section>
  )
}
