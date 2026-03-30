import { motion } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'
import { FaTelegram, FaWhatsapp, FaGithub } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import ContactForm from './ContactForm'

const contactLinks = [
  {
    icon: FaTelegram,
    label: 'Telegram',
    value: '@Polina_Lozova',
    href: 'https://t.me/Polina_Lozova',
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '+380 73 200 16 11',
    href: 'https://wa.me/380732001611',
    color: 'text-green-500',
    bg: 'bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/40',
  },
  {
    icon: HiMail,
    label: 'Email',
    value: '1polinalozovaya1@gmail.com',
    href: 'mailto:1polinalozovaya1@gmail.com',
    color: 'text-red-500',
    bg: 'bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/40',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/LozovaPolina',
    href: 'https://github.com/LozovaPolina',
    color: 'text-gray-800 dark:text-gray-200',
    bg: 'bg-gray-100 dark:bg-gray-800/60 hover:bg-gray-200 dark:hover:bg-gray-700',
  },
]

export default function Contact() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary-600 dark:text-accent uppercase tracking-wider">Напишите нам</span>
          <h2 className="mt-3 text-4xl font-extrabold text-gray-900 dark:text-white">Начнём работу?</h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Расскажите о вашем проекте — ответим в течение нескольких часов
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Оставьте заявку</h3>
            <ContactForm />
          </motion.div>

          {/* Contact links */}
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Или напишите напрямую</h3>
              <p className="text-gray-500 dark:text-gray-400">Выберите удобный способ связи</p>
            </div>

            <div className="flex flex-col gap-4">
              {contactLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 ${link.bg}`}
                  >
                    <div className="flex-shrink-0">
                      <Icon size={28} className={link.color} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{link.label}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{link.value}</div>
                    </div>
                  </a>
                )
              })}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary-500 to-accent text-white">
              <div className="text-2xl font-bold mb-2">Бесплатная консультация</div>
              <p className="text-white/80 text-sm">
                Обсудим ваш проект, предложим решение и назовём точную стоимость — без скрытых платежей.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
