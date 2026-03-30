import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useScrollTo } from '../../hooks/useScrollTo'

const floatingShapes = [
  { size: 'w-64 h-64', pos: 'top-10 -left-20', delay: 0, color: 'bg-primary-500/20 dark:bg-primary-500/10', anim: 'animate-float' },
  { size: 'w-96 h-96', pos: 'top-20 -right-32', delay: 1, color: 'bg-accent/20 dark:bg-accent/10', anim: 'animate-float-delayed' },
  { size: 'w-48 h-48', pos: 'bottom-20 left-1/4', delay: 2, color: 'bg-primary-600/15 dark:bg-primary-600/8', anim: 'animate-float' },
  { size: 'w-32 h-32', pos: 'bottom-32 right-1/4', delay: 0.5, color: 'bg-accent/25 dark:bg-accent/15', anim: 'animate-pulse-slow' },
]

const stats = [
  { value: 50, suffix: '+', label: 'проектов' },
  { value: 3, suffix: '+', label: 'года опыта' },
  { value: 100, suffix: '%', label: 'довольных клиентов' },
]

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

function StatCard({ value, suffix, label, delay, shouldReduce }) {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)
  const count = useCountUp(value, 1600, inView && !shouldReduce)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={shouldReduce ? false : { opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center"
    >
      <span className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-primary-500 to-accent bg-clip-text text-transparent leading-none">
        {shouldReduce ? value : count}{suffix}
      </span>
      <span className="mt-1.5 text-sm sm:text-base text-gray-500 dark:text-gray-400 font-medium">
        {label}
      </span>
    </motion.div>
  )
}

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
        <motion.div variants={container} initial="hidden" animate="visible">
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

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto"
          >
            {stats.map((s, i) => (
              <StatCard
                key={s.label}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                delay={i * 0.15}
                shouldReduce={shouldReduceMotion}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute bottom-8 inset-x-0 flex justify-center"
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
