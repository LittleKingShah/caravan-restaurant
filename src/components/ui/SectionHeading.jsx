import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import IkatDivider from './IkatDivider'

export default function SectionHeading({ title, subtitle, light = false }) {
  const { ref, isInView } = useScrollReveal()

  return (
    <motion.div
      ref={ref}
      className="text-center mb-16 sm:mb-20"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      {/* Overline ornament */}
      <motion.span
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        className="block h-px w-10 bg-caravan-gold/40 mx-auto mb-6"
      />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`text-4xl sm:text-5xl lg:text-6xl font-heading font-light tracking-wide text-glow-gold text-balance ${
          light ? 'text-caravan-cream' : 'text-caravan-gold'
        }`}
      >
        {title}
      </motion.h2>

      <IkatDivider />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-2 text-caravan-cream/40 max-w-xl mx-auto text-sm sm:text-base leading-[1.8] font-light text-pretty"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
