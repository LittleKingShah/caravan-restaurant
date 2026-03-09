import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../ui/Button'
import { siteContent } from '../../data/siteContent'
import useDirection from '../../hooks/useDirection'
import ikatPattern from '../../assets/patterns/ikat-pattern.svg'

const TITLE_CHARS = siteContent.name.split('')

export default function Hero() {
  const ref = useRef(null)
  const { t } = useTranslation()
  const { isRTL } = useDirection()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section ref={ref} className="relative h-dvh min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background image with parallax + scale */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY, scale }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/menu/lamb-on-naan.webp')" }}
        />
        {/* Multi-layered overlays for depth */}
        <div className="absolute inset-0 bg-caravan-dark/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-caravan-dark/40 via-transparent to-caravan-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-caravan-dark/50 via-transparent to-caravan-dark/30 rtl:bg-gradient-to-l" />

        {/* Ikat pattern with shimmer */}
        <div
          className="absolute inset-0 ikat-shimmer"
          style={{
            backgroundImage: `url(${ikatPattern})`,
            backgroundSize: '200px 200px',
          }}
        />

        {/* Radial spotlight */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 800px 600px at 50% 45%, rgba(212, 168, 67, 0.06) 0%, transparent 70%)'
        }} />
      </motion.div>

      {/* Decorative corner frames */}
      <div className="absolute top-32 start-8 sm:start-16 w-16 h-16 border-s border-t border-caravan-gold/15 z-10" />
      <div className="absolute bottom-32 end-8 sm:end-16 w-16 h-16 border-e border-b border-caravan-gold/15 z-10" />

      {/* Vertical side text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute start-6 top-1/2 -translate-y-1/2 z-10 hidden lg:block"
      >
        <span className="font-body text-[10px] tracking-[0.3em] text-caravan-cream/20 uppercase"
          style={{ writingMode: isRTL ? 'vertical-rl' : 'vertical-lr' }}>
          {t('hero.sideText')}
        </span>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ y: contentY, opacity }}
      >
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="h-px w-16 bg-caravan-gold/40 mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-xs tracking-[0.4em] text-caravan-gold/80 uppercase mb-6"
        >
          {t('hero.tagline')}
        </motion.p>

        {/* Title with per-character stagger */}
        <h1 dir="ltr" className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-caravan-cream text-glow-gold mb-8 tracking-wide text-balance">
          {TITLE_CHARS.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.7 + i * 0.08,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="text-caravan-cream/40 text-sm sm:text-base lg:text-lg max-w-xl mx-auto mb-12 leading-[1.9] font-light text-pretty"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button to="/menu" variant="primary">{t('hero.exploreMenu')}</Button>
          <Button to="/#about" variant="secondary">{t('hero.ourStory')}</Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.3em] text-caravan-cream/20 uppercase font-body">{t('hero.scroll')}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-caravan-gold/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
