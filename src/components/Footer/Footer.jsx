import { FaTelegram, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import ContactForm from '../Contact/ContactForm'
import { motion, useReducedMotion } from 'framer-motion'

const contactLinks = [
  {
    icon: FaTelegram,
    label: 'Telegram',
    value: '@Polina_Lozova',
    href: 'https://t.me/Polina_Lozova',
    hover: 'hover:text-blue-400',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '+380 73 200 16 11',
    href: 'https://wa.me/380732001611',
    hover: 'hover:text-green-400',
  },
  {
    icon: HiMail,
    label: 'Email',
    value: '1polinalozovaya1@gmail.com',
    href: 'mailto:1polinalozovaya1@gmail.com',
    hover: 'hover:text-red-400',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/LozovaPolina',
    href: 'https://github.com/LozovaPolina',
    hover: 'hover:text-white',
  },
]

export default function Footer() {
  const shouldReduce = useReducedMotion()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      {/* Second contact block */}
      <div className="border-b border-gray-800 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-white">Готовы начать проект?</h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto">
              Оставьте заявку и мы свяжемся с вами сегодня
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Form */}
            <motion.div
              initial={shouldReduce ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-3xl p-6 sm:p-8"
            >
              <ContactForm variant="dark" />
            </motion.div>

            {/* Contact links */}
            <motion.div
              initial={shouldReduce ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <p className="text-gray-400 mb-2">Или напишите напрямую:</p>
              {contactLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-2xl bg-gray-800 hover:bg-gray-700 transition-colors duration-200 group`}
                  >
                    <Icon size={22} className={`text-gray-400 ${link.hover} transition-colors`} />
                    <div>
                      <div className="text-xs text-gray-500 leading-none mb-0.5">{link.label}</div>
                      <div className="text-sm font-medium text-gray-200">{link.value}</div>
                    </div>
                  </a>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-gray-500 text-sm">
            © {year} DevTeam. Все права защищены.
          </div>
          <div className="flex items-center gap-4">
            {contactLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-500 ${link.hover} transition-colors`}
                  aria-label={link.label}
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
