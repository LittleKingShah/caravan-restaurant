import { useState, useRef, useEffect, useCallback } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGS, LANG_LABELS } from '../../i18n'

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const { lang } = useParams()

  const currentLang = lang || i18n.language

  const handleSelect = (newLang) => {
    // Replace the lang segment in the current path
    const pathWithoutLang = location.pathname.replace(/^\/[a-z]{2}/, '')
    const newPath = `/${newLang}${pathWithoutLang || '/'}`
    navigate(newPath + location.hash)
    setOpen(false)
  }

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') setOpen(false)
  }, [])

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, handleKeyDown])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t('langSwitcher.current', { lang: currentLang.toUpperCase() })}
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-body font-medium uppercase tracking-[0.15em] text-caravan-cream/50 hover:text-caravan-gold border border-caravan-gold/10 hover:border-caravan-gold/30 transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caravan-gold"
      >
        {currentLang.toUpperCase()}
        <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t('langSwitcher.label')}
          className="absolute top-full end-0 mt-2 min-w-[140px] bg-caravan-dark/95 border border-caravan-gold/15 backdrop-blur-sm z-50 py-1"
        >
          {SUPPORTED_LANGS.map((code) => (
            <li key={code} role="option" aria-selected={code === currentLang}>
              <button
                onClick={() => handleSelect(code)}
                className={`w-full text-start px-4 py-2.5 text-sm transition-colors duration-150 cursor-pointer ${
                  code === currentLang
                    ? 'text-caravan-gold bg-caravan-gold/5'
                    : 'text-caravan-cream/60 hover:text-caravan-cream hover:bg-caravan-gold/5'
                }`}
              >
                <span className="font-body">{LANG_LABELS[code]}</span>
                <span className="ms-2 text-xs text-caravan-cream/30 uppercase">{code}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
