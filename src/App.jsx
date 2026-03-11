import { Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence } from 'framer-motion'
import { SUPPORTED_LANGS, DEFAULT_LANG, RTL_LANGS, detectBrowserLang } from './i18n'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import NotFoundPage from './pages/NotFoundPage'
import ContactPage from './pages/ContactPage'

function LangWrapper({ children }) {
  const { lang } = useParams()
  const { i18n } = useTranslation()

  useEffect(() => {
    if (lang && SUPPORTED_LANGS.includes(lang) && i18n.language !== lang) {
      i18n.changeLanguage(lang)
    }
  }, [lang, i18n])

  useEffect(() => {
    const isRTL = RTL_LANGS.includes(lang)
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
    document.documentElement.lang = lang || DEFAULT_LANG
  }, [lang])

  if (!SUPPORTED_LANGS.includes(lang)) {
    return <Navigate to={`/${detectBrowserLang()}/`} replace />
  }

  return children
}

function AppRoutes() {
  const params = useParams()
  const subPath = params['*'] || ''

  return (
    <AnimatePresence mode="wait">
      {subPath === 'menu' ? (
        <MenuPage key="menu" />
      ) : subPath === 'contact' ? (
        <ContactPage key="contact" />
      ) : subPath === '' ? (
        <HomePage key="home" />
      ) : (
        <NotFoundPage key="404" />
      )}
    </AnimatePresence>
  )
}

function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Navigate to={`/${detectBrowserLang()}/`} replace />} />
      <Route path="/:lang/*" element={
        <LangWrapper>
          <Layout>
            <AppRoutes />
          </Layout>
        </LangWrapper>
      } />
    </Routes>
    </>
  )
}

export default App
