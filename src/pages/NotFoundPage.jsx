import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { SUPPORTED_LANGS, DEFAULT_LANG } from '../i18n'

export default function NotFoundPage() {
  const { lang } = useParams()
  const { t } = useTranslation()
  const validLang = SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center"
    >
      <p className="font-display text-sm tracking-[0.3em] text-caravan-gold/50 uppercase mb-4">
        404
      </p>
      <h1 className="font-heading text-4xl sm:text-5xl font-light text-caravan-cream mb-6">
        {t('notFound.title', { defaultValue: 'Page Not Found' })}
      </h1>
      <p className="font-body text-caravan-cream-dim max-w-md mb-10">
        {t('notFound.message', { defaultValue: 'The page you are looking for does not exist or has been moved.' })}
      </p>
      <Link
        to={`/${validLang}/`}
        className="px-8 py-3 border border-caravan-gold/30 text-caravan-gold text-sm uppercase tracking-widest hover:bg-caravan-gold/10 transition-colors duration-200"
      >
        {t('notFound.backHome', { defaultValue: 'Back to Home' })}
      </Link>
    </motion.div>
  )
}
