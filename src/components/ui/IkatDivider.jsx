import { motion } from 'framer-motion'

export default function IkatDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-4 my-6 ${className}`}>
      <motion.span
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="h-px w-12 bg-gradient-to-r from-transparent via-caravan-gold/50 to-caravan-gold/20 origin-right"
      />
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-caravan-gold flex-shrink-0">
        <motion.path
          d="M16 2L28 16L16 30L4 16Z"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <motion.path
          d="M16 8L22 16L16 24L10 16Z"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        />
        <circle cx="16" cy="16" r="1.5" fill="currentColor" opacity="0.4" />
      </svg>
      <motion.span
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="h-px w-12 bg-gradient-to-l from-transparent via-caravan-gold/50 to-caravan-gold/20 origin-left"
      />
    </div>
  )
}
