import { memo } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { EASE_OUT_EXPO } from '../../utils/motion'

export default memo(function DishCard({ dish, index = 0 }) {
  const { t } = useTranslation()

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: EASE_OUT_EXPO }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-caravan-indigo/60 overflow-hidden border border-caravan-gold/[0.04] hover:border-caravan-gold/15 transition-[border-color] duration-200"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={dish.image}
          alt={dish.name}
          loading="lazy"
          width={1200}
          height={900}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-caravan-dark via-caravan-dark/20 to-transparent opacity-60" />
        {/* Hover shimmer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-caravan-gold/0 via-caravan-gold/5 to-caravan-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Price badge */}
        <div className="absolute top-4 end-4 bg-caravan-dark/70 backdrop-blur-sm border border-caravan-gold/20 px-3 py-1">
          <span className="font-display text-xs tracking-wider text-caravan-gold">${dish.price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-5 sm:p-6">
        {/* Gold accent line */}
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-caravan-gold/20 to-transparent" />

        <h3 className="font-heading text-xl font-normal text-caravan-cream group-hover:text-caravan-gold transition-colors duration-200 tracking-wide">
          {dish.name}
        </h3>
        <p className="mt-2.5 text-caravan-cream/35 text-sm leading-[1.7] font-light line-clamp-2 text-pretty">
          {t(`dishes.${dish.id}.description`, { defaultValue: dish.description })}
        </p>

        {/* Category tag */}
        <div className="mt-4 flex items-center gap-2">
          <span className="w-3 h-px bg-caravan-gold/30" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-caravan-gold/40 font-medium">
            {t(`categories.${dish.category}`, { defaultValue: dish.category })}
          </span>
        </div>
      </div>
    </motion.div>
  )
})
