import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import ScrollReveal from '../ui/ScrollReveal'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import ikatPattern from '../../assets/patterns/ikat-pattern.svg'

export default function About() {
  const { t } = useTranslation()
  const paragraphs = [t('about.text1'), t('about.text2')]

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-caravan-dark overflow-hidden">
      {/* Atmospheric radial glow */}
      <div className="absolute top-0 end-0 w-[500px] h-[500px] bg-radial-[at_80%_20%] from-caravan-purple/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading title={t('about.title')} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          {/* Image — takes 6 cols but offset for asymmetry */}
          <ScrollReveal direction="left" className="lg:col-span-6 lg:col-start-1">
            <div className="relative">
              {/* Decorative ikat frame behind image */}
              <div
                className="absolute -inset-4 opacity-[0.04] hidden lg:block"
                style={{ backgroundImage: `url(${ikatPattern})`, backgroundSize: '150px 150px' }}
              />

              <div className="relative overflow-hidden">
                <img
                  src="/images/menu/cake-with-tea.webp"
                  alt={t('about.imageAlt')}
                  loading="lazy"
                  width={1200}
                  height={1500}
                  className="w-full h-[450px] sm:h-[550px] object-cover"
                />
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-caravan-dark/30 to-transparent rtl:bg-gradient-to-l" />
                <div className="absolute inset-0 bg-gradient-to-t from-caravan-dark/50 via-transparent to-caravan-dark/20" />
              </div>

              {/* Floating accent — gold line */}
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
                className="absolute -end-6 top-12 w-px h-20 bg-caravan-gold/30 origin-top hidden lg:block"
              />

              {/* Corner frame */}
              <div className="absolute -bottom-3 -end-3 w-24 h-24 border-b border-e border-caravan-gold/15 hidden lg:block" />
            </div>
          </ScrollReveal>

          {/* Text — overlaps image slightly on desktop */}
          <ScrollReveal direction="right" className="lg:col-span-6 lg:col-start-7 lg:ps-12 xl:ps-20">
            <div className="relative lg:py-8">
              {/* Decorative number */}
              <span className="absolute -top-4 -start-4 text-8xl font-heading text-caravan-gold/[0.04] font-light select-none pointer-events-none hidden lg:block">
                01
              </span>

              <div className="space-y-6">
                {paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-caravan-cream/50 leading-[2] text-sm sm:text-base font-light text-pretty">
                    {i === 0 && (
                      <span className="font-heading text-caravan-gold text-lg sm:text-xl float-start me-2 mt-1 leading-none">
                        {paragraph.charAt(0)}
                      </span>
                    )}
                    {i === 0 ? paragraph.slice(1) : paragraph}
                  </p>
                ))}

                <div className="pt-4">
                  <Button to="/menu" variant="secondary">
                    {t('about.viewMenu')}
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
