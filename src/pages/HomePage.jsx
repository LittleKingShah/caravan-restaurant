import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SUPPORTED_LANGS } from '../i18n'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import FeaturedDishes from '../components/sections/FeaturedDishes'
import Testimonials from '../components/sections/Testimonials'
import LocationHours from '../components/sections/LocationHours'

const SITE_URL = 'https://caravan-restaurant.vercel.app'

export default function HomePage() {
  const { t } = useTranslation()
  const { lang } = useParams()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Helmet>
        <title>{t('meta.homeTitle')}</title>
        <meta name="description" content={t('meta.homeDescription')} />
        <link rel="canonical" href={`${SITE_URL}/${lang}/`} />
        {SUPPORTED_LANGS.map((code) => (
          <link key={code} rel="alternate" hrefLang={code} href={`${SITE_URL}/${code}/`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/en/`} />
      </Helmet>
      <Hero />
      <About />
      <FeaturedDishes />
      <Testimonials />
      <LocationHours />
    </motion.div>
  )
}
