import { motion, useReducedMotion } from 'framer-motion'
import { useScrollTo } from '../../hooks/useScrollTo'

const floatingShapes = [
  { size: 'w-64 h-64', pos: 'top-10 -left-20', delay: 0, color: 'bg-primary-500/20 dark:bg-primary-500/10', anim: 'animate-float' },
  { size: 'w-96 h-96', pos: 'top-20 -right-32', delay: 1, color: 'bg-accent/20 dark:bg-accent/10', anim: 'animate-float-delayed' },
  { size: 'w-48 h-48', pos: 'bottom-20 left-1/4', delay: 2, color: 'bg-primary-600/15 dark:bg-primary-600/8', anim: 'animate-float' },
  { size: 'w-32 h-32', pos: 'bottom-32 right-1/4', delay: 0.5, color: 'bg-accent/25 dark:bg-accent/15', anim: 'animate-pulse-slow' },
]

export default function Hero() {
  const scrollTo = useScrollTo()
  const shouldReduceMotion = useReducedMotion()

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  }

  const fadeUp = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-primary-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 bg-size-300 animate-gradient-shift"
    >
      {/* Floating background shapes */}
      {!shouldReduceMotion && floatingShapes.map((s, i) => (
        <div
          key={i}
          className={`absolute ${s.size} ${s.pos} ${s.color} ${s.anim} rounded-full blur-3xl pointer-events-none`}
          style={{ animationDelay: `${s.delay}s` }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 pt-24 pb-16 sm:pt-0 sm:pb-0 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-5 sm:mb-6"
          >
            Создаём{' '}
            <span className="bg-gradient-to-r from-primary-500 to-accent bg-clip-text text-transparent">
              цифровые продукты
            </span>
            , которые работают
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed"
          >
            Telegram-боты, веб-приложения, лендинги и интернет-магазины.
            Быстро, качественно, с гарантией результата.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => scrollTo('contact')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all hover:shadow-xl hover:shadow-primary-500/30 hover:scale-105 active:scale-100"
            >
              Обсудить проект →
            </button>
            <button
              onClick={() => scrollTo('portfolio')}
              className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all hover:shadow-lg hover:scale-105 active:scale-100"
            >
              Посмотреть работы
            </button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 sm:mt-14 flex flex-wrap justify-center gap-5 sm:gap-8 text-sm text-gray-500 dark:text-gray-400"
          >
            {['50+ проектов', 'Гарантия качества', 'Поддержка 24/7'].map((stat) => (
              <div key={stat} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                {stat}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 bg-gray-400 dark:bg-gray-600 rounded-full" />
          </div>
        </motion.div>
      )}
    </section>
  )
}
