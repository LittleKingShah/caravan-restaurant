import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SUPPORTED_LANGS } from '../i18n'
import SectionHeading from '../components/ui/SectionHeading'
import ScrollReveal from '../components/ui/ScrollReveal'
import { siteContent } from '../data/siteContent'
import useDirection from '../hooks/useDirection'
import ikatPattern from '../assets/patterns/ikat-pattern.svg'

const SITE_URL = 'https://caravan-restaurant.vercel.app'
const FORMSPREE_ID = 'xpwzgqkl'

export default function ContactPage() {
  const { t } = useTranslation()
  const { lang } = useParams()
  const { contact } = siteContent
  const { x } = useDirection()
  const [formState, setFormState] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setFormState('submitting')

    const data = new FormData(e.target)

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setFormState('success')
        e.target.reset()
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  const infoBlocks = [
    {
      label: t('location.address'),
      content: <p>{contact.address}</p>,
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      ),
    },
    {
      label: t('location.contactLabel'),
      content: (
        <>
          <p>
            <a href={`tel:${contact.phone}`} className="hover:text-caravan-gold transition-colors duration-300">
              {contact.phone}
            </a>
          </p>
          <p className="mt-1">
            <a href={`mailto:${contact.email}`} className="hover:text-caravan-gold transition-colors duration-300">
              {contact.email}
            </a>
          </p>
        </>
      ),
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
      ),
    },
    {
      label: t('location.hoursLabel'),
      content: (
        <>
          <p>{t('hours.monday')}</p>
          <p>{t('hours.weekday')}</p>
          <p>{t('hours.friday')}</p>
          <p>{t('hours.weekend')}</p>
        </>
      ),
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
    },
  ]

  const inputClasses =
    'w-full bg-caravan-navy/40 border border-caravan-gold/10 px-4 py-3 text-sm text-caravan-cream/80 placeholder:text-caravan-cream/20 focus:border-caravan-gold/40 focus:outline-none transition-colors duration-200'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>{t('contact.metaTitle')}</title>
        <meta name="description" content={t('contact.metaDescription')} />
        <link rel="canonical" href={`${SITE_URL}/${lang}/contact`} />
        {SUPPORTED_LANGS.map((code) => (
          <link key={code} rel="alternate" hrefLang={code} href={`${SITE_URL}/${code}/contact`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/en/contact`} />
      </Helmet>

      {/* Hero banner */}
      <section className="relative h-[40vh] min-h-80 flex items-center justify-center overflow-hidden -mt-[calc(5rem+env(safe-area-inset-top))] lg:-mt-[calc(6rem+env(safe-area-inset-top))] pt-[calc(5rem+env(safe-area-inset-top))] lg:pt-[calc(6rem+env(safe-area-inset-top))]">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('/images/menu/lamb-on-naan.webp')" }}
        />
        <div className="absolute inset-0 bg-caravan-dark/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-caravan-dark/30 via-transparent to-caravan-dark" />
        <div
          className="absolute inset-0 ikat-shimmer"
          style={{
            backgroundImage: `url(${ikatPattern})`,
            backgroundSize: '200px 200px',
          }}
        />

        <div className="absolute top-28 inset-s-8 sm:inset-s-12 w-12 h-12 border-s border-t border-caravan-gold/15 z-10" />
        <div className="absolute bottom-12 inset-e-8 sm:inset-e-12 w-12 h-12 border-e border-b border-caravan-gold/15 z-10" />

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            className="h-px w-10 bg-caravan-gold/40 mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display text-xs tracking-[0.4em] text-caravan-gold/60 uppercase mb-4"
          >
            {t('contact.heroOverline')}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-light text-caravan-cream text-glow-gold tracking-wide"
          >
            {t('contact.heroTitle')}
          </motion.h1>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16 sm:py-24 bg-caravan-dark relative">
        <div className="absolute inset-0 spotlight pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Contact form */}
            <ScrollReveal direction="left" className="lg:col-span-7">
              <SectionHeading title={t('contact.formTitle')} />

              {formState === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16 border border-caravan-gold/10"
                >
                  <p className="font-heading text-2xl text-caravan-cream mb-3">
                    {t('contact.successTitle')}
                  </p>
                  <p className="text-caravan-cream/50 text-sm">
                    {t('contact.successMessage')}
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="mt-8 px-6 py-2.5 text-xs uppercase tracking-widest text-caravan-gold border border-caravan-gold/20 hover:bg-caravan-gold/10 transition-colors duration-200 cursor-pointer"
                  >
                    {t('contact.sendAnother')}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase tracking-widest text-caravan-gold/50 mb-2">
                        {t('contact.nameLabel')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className={inputClasses}
                        placeholder={t('contact.namePlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-widest text-caravan-gold/50 mb-2">
                        {t('contact.emailLabel')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className={inputClasses}
                        placeholder={t('contact.emailPlaceholder')}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-caravan-gold/50 mb-2">
                      {t('contact.subjectLabel')}
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className={`${inputClasses} cursor-pointer`}
                      defaultValue=""
                    >
                      <option value="" disabled>{t('contact.subjectPlaceholder')}</option>
                      <option value="reservation">{t('contact.subjectReservation')}</option>
                      <option value="catering">{t('contact.subjectCatering')}</option>
                      <option value="feedback">{t('contact.subjectFeedback')}</option>
                      <option value="other">{t('contact.subjectOther')}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-widest text-caravan-gold/50 mb-2">
                      {t('contact.messageLabel')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className={`${inputClasses} resize-none`}
                      placeholder={t('contact.messagePlaceholder')}
                    />
                  </div>

                  {formState === 'error' && (
                    <p className="text-caravan-ruby text-sm">{t('contact.errorMessage')}</p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="px-10 py-3.5 bg-caravan-gold text-caravan-dark text-xs uppercase tracking-[0.2em] font-medium hover:bg-caravan-gold-light transition-colors duration-200 disabled:opacity-50 cursor-pointer"
                  >
                    {formState === 'submitting' ? t('contact.sending') : t('contact.sendButton')}
                  </button>
                </form>
              )}
            </ScrollReveal>

            {/* Info sidebar */}
            <div className="lg:col-span-5 lg:ps-4">
              <div className="flex flex-col justify-start h-full space-y-10 lg:pt-16">
                {infoBlocks.map((block, i) => (
                  <motion.div
                    key={block.label}
                    initial={{ opacity: 0, x: x(20) }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-caravan-gold/50">{block.icon}</span>
                      <h3 className="font-display text-xs tracking-[0.25em] text-caravan-gold/70 uppercase">
                        {block.label}
                      </h3>
                    </div>
                    <div className="text-caravan-cream/50 text-sm leading-[1.9] font-light ps-7">
                      {block.content}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map */}
              <ScrollReveal direction="right" className="mt-10">
                <div className="relative overflow-hidden border border-caravan-gold/8 h-[250px] bg-caravan-navy/30">
                  <iframe
                    title={t('location.mapTitle')}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.586083762658!2d-74.0096076!3d40.705112799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b4032e7fa75%3A0x609410d869e6d3ee!2sCaravan%20Uyghur%20Cuisine!5e0!3m2!1sen!2sus!4v1773084560162!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) brightness(0.7) contrast(1.3) saturate(0.3)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute top-3 inset-s-3 w-6 h-6 border-s border-t border-caravan-gold/20 pointer-events-none" />
                  <div className="absolute bottom-3 inset-e-3 w-6 h-6 border-e border-b border-caravan-gold/20 pointer-events-none" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
