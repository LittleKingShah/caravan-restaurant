import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import useLocalizedPath from '../../hooks/useLocalizedPath'
import useDirection from '../../hooks/useDirection'
import LanguageSwitcher from '../ui/LanguageSwitcher'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()
  const lp = useLocalizedPath()
  const navigate = useNavigate()
  const { x } = useDirection()

  const homePath = lp('/')
  const [activeHash, setActiveHash] = useState(null)

  const NAV_LINKS = [
    { to: lp('/'), label: t('nav.home') },
    { to: lp('/menu'), label: t('nav.menu') },
    { to: lp('/#about'), label: t('nav.ourStory'), hash: 'about' },
    { to: lp('/contact'), label: t('nav.contact') },
  ]

  // Track which section is in view on homepage
  useEffect(() => {
    const path = location.pathname.replace(/\/$/, '')
    const home = homePath.replace(/\/$/, '')
    if (path !== home) {
      setActiveHash(null)
      return
    }

    const el = document.getElementById('about')
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setActiveHash(entry.isIntersecting ? 'about' : null),
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [location.pathname, homePath])

  function handleHashClick(e, link) {
    if (!link.hash) return
    e.preventDefault()
    const path = location.pathname.replace(/\/$/, '')
    const home = homePath.replace(/\/$/, '')
    if (path === home) {
      document.getElementById(link.hash)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(homePath)
      setTimeout(() => {
        document.getElementById(link.hash)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  function isActive(link) {
    if (link.hash) return activeHash === link.hash
    if (link.to === homePath) return location.pathname === link.to && !activeHash
    return location.pathname === link.to
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape' && mobileOpen) {
      setMobileOpen(false)
    }
  }, [mobileOpen])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <nav
      aria-label={t('nav.navLabel')}
      className={`fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top)] transition-[background-color,border-color] duration-500 ${
        scrolled
          ? 'bg-caravan-dark/95 border-b border-caravan-gold/8'
          : 'bg-transparent'
      }`}
    >
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:start-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-caravan-gold focus:text-caravan-dark focus:text-sm focus:font-medium"
      >
        {t('nav.skipToContent')}
      </a>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to={lp('/')} className="group relative focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-caravan-gold">
            <span className="font-display text-xl sm:text-2xl font-semibold tracking-[0.15em] text-caravan-gold group-hover:text-caravan-gold-light transition-colors duration-500 uppercase">
              Caravan
            </span>
            <span className="absolute -bottom-1 start-0 w-full h-px bg-caravan-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-[start]" aria-hidden="true" />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={(e) => handleHashClick(e, link)}
                className="relative group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-caravan-gold"
                aria-current={isActive(link) ? 'page' : undefined}
              >
                <span className={`text-xs font-body font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                  isActive(link)
                    ? 'text-caravan-gold'
                    : 'text-caravan-cream/50 group-hover:text-caravan-cream'
                }`}>
                  {link.label}
                </span>
                <span className={`absolute -bottom-1.5 start-0 w-full h-px bg-caravan-gold transition-transform duration-300 origin-[start] ${
                  isActive(link) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} aria-hidden="true" />
              </Link>
            ))}
            <LanguageSwitcher />
            <Link
              to={lp('/menu')}
              className="ms-4 relative overflow-hidden px-6 py-2.5 border border-caravan-gold/60 text-caravan-gold text-xs font-body font-medium uppercase tracking-[0.2em] group transition-colors duration-300 hover:text-caravan-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-caravan-gold"
            >
              <span className="relative z-10">{t('nav.reserve')}</span>
              <span className="absolute inset-0 bg-caravan-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-caravan-gold"
            aria-label={mobileOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-0.5 bg-caravan-gold origin-center"
              aria-hidden="true"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, x: x(-10) } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
              className="block w-6 h-0.5 bg-caravan-gold"
              aria-hidden="true"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-0.5 bg-caravan-gold origin-center"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label={t('nav.mobileNavLabel')}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden fixed inset-0 top-[calc(5rem+env(safe-area-inset-top))] bg-caravan-dark/98 z-40"
          >
            <div className="px-8 py-12 flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: x(-20) }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                >
                  <Link
                    to={link.to}
                    onClick={(e) => handleHashClick(e, link)}
                    className="text-caravan-cream/70 font-heading text-3xl font-light hover:text-caravan-gold transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-caravan-gold"
                    aria-current={isActive(link) ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="mt-4 mb-6">
                  <LanguageSwitcher />
                </div>
                <div className="pt-6 border-t border-caravan-gold/10">
                  <Link
                    to={lp('/menu')}
                    className="inline-block px-8 py-3 border border-caravan-gold text-caravan-gold text-sm font-body uppercase tracking-[0.2em] hover:bg-caravan-gold hover:text-caravan-dark transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-caravan-gold"
                  >
                    {t('nav.reserveTable')}
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
