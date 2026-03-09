import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import { siteContent } from '../../data/siteContent'
import useDirection from '../../hooks/useDirection'

export default function LocationHours() {
  const { t } = useTranslation()
  const { contact } = siteContent
  const { x } = useDirection()

  const infoBlocks = [
    {
      label: t('location.address'),
      content: <p>{contact.address}</p>,
    },
    {
      label: t('location.contactLabel'),
      content: (
        <>
          <p><a href={`tel:${contact.phone}`} className="hover:text-caravan-gold transition-colors duration-300">{contact.phone}</a></p>
          <p className="mt-1"><a href={`mailto:${contact.email}`} className="hover:text-caravan-gold transition-colors duration-300">{contact.email}</a></p>
        </>
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
    },
  ]

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-caravan-indigo overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-caravan-dark/40 to-caravan-dark/60 pointer-events-none" />
      <div className="absolute inset-0 spotlight pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          title={t('location.title')}
          subtitle={t('location.subtitle')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Map */}
          <ScrollReveal direction="left" className="lg:col-span-7">
            <div className="relative overflow-hidden border border-caravan-gold/8 h-[320px] sm:h-[420px] bg-caravan-navy/30">
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
              {/* Corner accents */}
              <div className="absolute top-3 start-3 w-6 h-6 border-s border-t border-caravan-gold/20 pointer-events-none" />
              <div className="absolute bottom-3 end-3 w-6 h-6 border-e border-b border-caravan-gold/20 pointer-events-none" />
            </div>
          </ScrollReveal>

          {/* Info blocks */}
          <ScrollReveal direction="right" className="lg:col-span-5 lg:ps-4">
            <div className="flex flex-col justify-center h-full space-y-10">
              {infoBlocks.map((block, i) => (
                <motion.div
                  key={block.label}
                  initial={{ opacity: 0, x: x(20) }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-5 h-px bg-caravan-gold/40" />
                    <h3 className="font-display text-xs tracking-[0.25em] text-caravan-gold/70 uppercase">
                      {block.label}
                    </h3>
                  </div>
                  <div className="text-caravan-cream/50 text-sm leading-[1.9] font-light ps-8">
                    {block.content}
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
