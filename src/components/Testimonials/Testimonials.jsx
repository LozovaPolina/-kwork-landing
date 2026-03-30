import { motion, useReducedMotion } from 'framer-motion'

const testimonials = [
  {
    name: 'Алексей Петров',
    role: 'Владелец салона красоты',
    rating: 5,
    text: 'Заказал CRM систему для своего салона. Всё сделано чётко по ТЗ, в срок. Теперь записи и финансы — под контролем. Обращусь ещё!',
    avatar: 'АП',
    color: 'bg-pink-500',
  },
  {
    name: 'Марина Соколова',
    role: 'Владелец службы доставки',
    rating: 5,
    text: 'Сделали Telegram-бота для приёма заказов. Автоматизировали весь процесс от заявки до доставки. Выручка выросла на 30%!',
    avatar: 'МС',
    color: 'bg-blue-500',
  },
  {
    name: 'Дмитрий Волков',
    role: 'Директор по маркетингу',
    rating: 5,
    text: 'Лендинг сделан красиво и быстро. Конверсия выросла в 2 раза по сравнению со старым сайтом. Профессиональная команда!',
    avatar: 'ДВ',
    color: 'bg-green-500',
  },
  {
    name: 'Ольга Тихонова',
    role: 'CEO интернет-магазина',
    rating: 5,
    text: 'Заказала интернет-магазин под ключ. Отлично справились с интеграцией платёжной системы и личным кабинетом. Рекомендую!',
    avatar: 'ОТ',
    color: 'bg-purple-500',
  },
  {
    name: 'Иван Куприянов',
    role: 'Аналитик данных',
    rating: 5,
    text: 'Нужен был парсер для мониторинга цен конкурентов. Сделали быстро, надёжно работает уже 6 месяцев без сбоев.',
    avatar: 'ИК',
    color: 'bg-orange-500',
  },
]

const Stars = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < count ? 'text-yellow-400' : 'text-gray-300'}>★</span>
    ))}
  </div>
)

export default function Testimonials() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary-600 dark:text-accent uppercase tracking-wider">Что говорят клиенты</span>
          <h2 className="mt-3 text-4xl font-extrabold text-gray-900 dark:text-white">Отзывы</h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Больше 50 довольных клиентов по всей России
          </p>
        </motion.div>

        {/* Desktop grid / Mobile horizontal scroll */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={shouldReduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
            >
              <div className="mb-4">
                <span className="text-4xl text-primary-200 dark:text-primary-800 font-serif leading-none">"</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">{t.text}</p>
              <Stars count={t.rating} />
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: horizontal scroll snap */}
        <div
          className="sm:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none' }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="snap-start flex-shrink-0 w-80 bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
            >
              <div className="mb-4">
                <span className="text-4xl text-primary-200 dark:text-primary-800 font-serif leading-none">"</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">{t.text}</p>
              <Stars count={t.rating} />
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
