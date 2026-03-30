import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiSun, HiMoon, HiMenu, HiX } from 'react-icons/hi'
import { useTheme } from '../../context/ThemeContext'
import { useScrollTo } from '../../hooks/useScrollTo'

const navLinks = [
  { label: 'Услуги', href: 'services' },
  { label: 'Портфолио', href: 'portfolio' },
  { label: 'Отзывы', href: 'testimonials' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const scrollTo = useScrollTo()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    scrollTo(id)
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="text-xl font-bold text-primary-600 dark:text-accent hover:opacity-80 transition-opacity"
        >
          Roxensoft
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-accent transition-colors font-medium"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-full font-semibold transition-all hover:shadow-lg hover:scale-105"
          >
            Связаться
          </button>
        </div>

        {/* Theme toggle + burger */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <HiSun size={20} /> : <HiMoon size={20} />}
          </button>

          {/* Burger (mobile) */}
          <button
            className="md:hidden p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="px-5 py-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-accent font-medium py-2 text-base transition-colors border-b border-gray-100 dark:border-gray-800 last:border-0"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('contact')}
                className="mt-1 bg-primary-600 hover:bg-primary-700 text-white px-5 py-3 rounded-full font-semibold transition-all w-full text-base"
              >
                Связаться
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
