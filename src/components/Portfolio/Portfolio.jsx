import { motion, useReducedMotion } from 'framer-motion'
import { useScrollTo } from '../../hooks/useScrollTo'
import { HiExternalLink } from 'react-icons/hi'

const projects = [
  {
    title: 'KART PODO',
    stack: ['E-commerce', 'Online Academy', 'Multilingual'],
    description: 'Платформа электронной коммерции и образовательный портал для профессиональной косметики и педикюра. Онлайн-курсы сертификации для специалистов.',
    gradient: 'from-rose-400 to-pink-600',
    emoji: '💆',
    url: 'https://kart-podo.eu/en',
  },
  {
    title: '2feet.pro — BeautyRoom Shop',
    stack: ['Marketplace', 'Multilingual', 'B2B+B2C'],
    description: 'Онлайн-магазин профессиональной косметики для специалистов красоты и домашних пользователей с верификацией профессионалов.',
    gradient: 'from-purple-400 to-violet-600',
    emoji: '💅',
    url: 'https://2feet.pro/ru',
  },
  {
    title: 'Helios CreWorld',
    stack: ['Job Platform', 'Maritime', 'Recruitment'],
    description: 'Платформа рекрутинга в морской индустрии — связывает моряков с судоходными компаниями, система вакансий и проверки кандидатов.',
    gradient: 'from-blue-400 to-cyan-600',
    emoji: '⚓',
    url: 'https://helios-creworld.com/en/main',
  },
]

export default function Portfolio() {
  const scrollTo = useScrollTo()
  const shouldReduce = useReducedMotion()

  return (
    <section id="portfolio" className="py-20 sm:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-sm font-semibold text-primary-600 dark:text-accent uppercase tracking-wider">Наши работы</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">Портфолио</h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Реальные проекты, которые мы реализовали для наших клиентов
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={shouldReduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-shadow duration-300"
            >
              {/* Card header */}
              <div
                className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden cursor-pointer`}
                onClick={() => scrollTo('contact')}
              >
                <span className="text-6xl select-none">{project.emoji}</span>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    Обсудить похожий проект →
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 leading-snug">{project.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-accent hover:underline"
                  onClick={e => e.stopPropagation()}
                >
                  Открыть сайт <HiExternalLink size={15} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
