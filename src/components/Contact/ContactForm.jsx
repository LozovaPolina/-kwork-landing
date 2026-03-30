import { useState } from 'react'

const TO_EMAIL = '1polinalozovaya1@gmail.com'

export default function ContactForm({ variant = 'light' }) {
  const [form, setForm] = useState({ name: '', contact: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const dark = variant === 'dark'

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Введите имя'
    if (!form.contact.trim()) e.contact = 'Введите контакт'
    if (!form.message.trim()) e.message = 'Введите сообщение'
    return e
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    const subject = encodeURIComponent(`Заявка от ${form.name}`)
    const body = encodeURIComponent(
      `Имя: ${form.name}\nКонтакт: ${form.contact}\n\nСообщение:\n${form.message}`
    )
    window.location.href = `mailto:${TO_EMAIL}?subject=${subject}&body=${body}`
    setStatus('success')
    setForm({ name: '', contact: '', message: '' })
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 text-3xl ${dark ? 'bg-green-900/40 text-green-400' : 'bg-green-100 text-green-600'}`}>✓</div>
        <h3 className={`text-xl font-bold mb-2 ${dark ? 'text-white' : 'text-gray-900 dark:text-white'}`}>Сообщение отправлено!</h3>
        <p className={dark ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'}>Свяжемся с вами в течение нескольких часов.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-primary-400 hover:underline text-sm"
        >
          Отправить ещё
        </button>
      </div>
    )
  }

  const labelClass = dark
    ? 'block text-sm font-medium text-gray-300 mb-1'
    : 'block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'

  const inputBase = 'w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary-500 transition placeholder-gray-500'
  const inputClass = (hasError) => dark
    ? `${inputBase} ${hasError ? 'border-red-500' : 'border-gray-600'} bg-gray-700 text-white`
    : `${inputBase} ${hasError ? 'border-red-400' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-800 text-gray-900 dark:text-white`

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label className={labelClass}>Имя</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Ваше имя"
          className={inputClass(errors.name)}
        />
        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
      </div>

      <div>
        <label className={labelClass}>Контакт (Telegram / WhatsApp / Email)</label>
        <input
          name="contact"
          value={form.contact}
          onChange={handleChange}
          placeholder="@username или email"
          className={inputClass(errors.contact)}
        />
        {errors.contact && <p className="mt-1 text-xs text-red-400">{errors.contact}</p>}
      </div>

      <div>
        <label className={labelClass}>Сообщение</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Опишите ваш проект..."
          rows={4}
          className={`${inputClass(errors.message)} resize-none`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3.5 rounded-xl font-bold text-base transition-all hover:shadow-lg hover:shadow-primary-500/30 hover:scale-[1.02] active:scale-100"
      >
        Отправить сообщение →
      </button>
    </form>
  )
}
