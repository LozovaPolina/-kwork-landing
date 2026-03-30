import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  FaTelegram, FaGlobe, FaShoppingCart, FaRobot, FaCode, FaPlug,
  FaMobileAlt, FaDatabase, FaComments,
} from 'react-icons/fa'
import { useScrollTo } from '../../hooks/useScrollTo'

const categories = [
  {
    id: 'bots',
    label: 'Боты и автоматизация',
    services: [
      {
        icon: FaTelegram,
        title: 'Telegram-боты',
        description: 'Чат-боты для продаж, поддержки клиентов, уведомлений и приёма заказов.',
        color: 'text-blue-500',
        bg: 'bg-blue-50 dark:bg-blue-900/20',
      },
      {
        icon: FaRobot,
        title: 'Парсеры и автоматизация',
        description: 'Сбор данных с сайтов, автопостинг, мониторинг цен и автоматизация рутины.',
        color: 'text-purple-500',
        bg: 'bg-purple-50 dark:bg-purple-900/20',
      },
      {
        icon: FaPlug,
        title: 'API-интеграции',
        description: 'Подключение CRM, платёжных систем, мессенджеров и сторонних сервисов.',
        color: 'text-pink-500',
        bg: 'bg-pink-50 dark:bg-pink-900/20',
      },
      {
        icon: FaComments,
        title: 'Чат-боты для бизнеса',
        description: 'WhatsApp, Viber, VK-боты для автоматизации общения с клиентами.',
        color: 'text-green-500',
        bg: 'bg-green-50 dark:bg-green-900/20',
      },
    ],
  },
  {
    id: 'web',
    label: 'Веб-разработка',
    services: [
      {
        icon: FaGlobe,
        title: 'Лендинги и сайты',
        description: 'Продающие одностраничные сайты и корпоративные страницы с быстрой загрузкой.',
        color: 'text-green-500',
        bg: 'bg-green-50 dark:bg-green-900/20',
      },
      {
        icon: FaCode,
        title: 'Веб-приложения',
        description: 'Полноценные SPA и веб-сервисы на React с авторизацией и базой данных.',
        color: 'text-primary-500',
        bg: 'bg-primary-50 dark:bg-primary-900/20',
      },
      {
        icon: FaShoppingCart,
        title: 'Интернет-магазины',
        description: 'E-commerce с каталогом, корзиной, онлайн-оплатой и панелью администратора.',
        color: 'text-orange-500',
        bg: 'bg-orange-50 dark:bg-orange-900/20',
      },
      {
        icon: FaMobileAlt,
        title: 'Адаптивная вёрстка',
        description: 'Перевод дизайна из Figma в код, pixel-perfect вёрстка для любых экранов.',
        color: 'text-cyan-500',
        bg: 'bg-cyan-50 dark:bg-cyan-900/20',
      },
    ],
  },
  {
    id: 'data',
    label: 'Данные и интеграции',
    services: [
      {
        icon: FaDatabase,
        title: 'Базы данных',
        description: 'Проектирование и оптимизация БД, миграции, настройка PostgreSQL / MongoDB.',
        color: 'text-yellow-500',
        bg: 'bg-yellow-50 dark:bg-yellow-900/20',
      },
      {
        icon: FaPlug,
        title: 'REST API',
        description: 'Разработка и документирование REST API для мобильных и веб-приложений.',
        color: 'text-indigo-500',
        bg: 'bg-indigo-50 dark:bg-indigo-900/20',
      },
    ],
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut', delay: i * 0.06 },
  }),
}

export default function Services() {
  const scrollTo = useScrollTo()
  const shouldReduce = useReducedMotion()
  const [activeCategory, setActiveCategory] = useState('bots')

  const current = categories.find(c => c.id === activeCategory)

  return (
    <section id="services" className="py-20 sm:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="text-sm font-semibold text-primary-600 dark:text-accent uppercase tracking-wider">
            Что мы делаем
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Наши услуги
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            От простого бота до сложного веб-приложения — реализуем любые идеи
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12"
        >
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25 scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          >
            {current.services.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  custom={i}
                  variants={shouldReduce ? {} : cardVariant}
                  initial="hidden"
                  animate="visible"
                  onClick={() => scrollTo('contact')}
                  className="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl p-5 sm:p-6 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`inline-flex p-3 rounded-xl ${service.bg} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} className={service.color} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 text-primary-600 dark:text-accent text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Узнать подробнее →
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
