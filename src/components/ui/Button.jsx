import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SPRING_BUTTON } from '../../utils/motion'
import { DEFAULT_LANG } from '../../i18n'

const MotionLink = motion.create(Link)

export default function Button({ children, to, variant = 'primary', className = '', ...props }) {
  const { lang } = useParams()
  const currentLang = lang || DEFAULT_LANG

  const base = 'inline-block relative overflow-hidden text-xs font-body font-medium uppercase tracking-[0.2em] cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-caravan-gold'
  const variants = {
    primary: 'px-8 py-3.5 bg-caravan-ruby text-caravan-cream hover:bg-caravan-ruby-deep',
    secondary: 'px-8 py-3.5 border border-caravan-gold/60 text-caravan-gold hover:text-caravan-dark',
  }

  // Prefix path with current language
  const localizedTo = to ? (() => {
    if (to.startsWith('/#')) return `/${currentLang}${to}`
    if (to.startsWith('/')) return `/${currentLang}${to}`
    return `/${currentLang}/${to}`
  })() : undefined

  const inner = variant === 'secondary' ? (
    <>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-caravan-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" aria-hidden="true" />
    </>
  ) : (
    <>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-caravan-ruby-deep to-caravan-ruby opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
    </>
  )

  const classes = `${base} ${variants[variant]} ${className}`

  if (localizedTo) {
    return (
      <MotionLink
        to={localizedTo}
        className={classes}
        whileTap={{ scale: 0.97 }}
        transition={SPRING_BUTTON}
        {...props}
      >
        {inner}
      </MotionLink>
    )
  }
  return (
    <motion.button
      className={classes}
      whileTap={{ scale: 0.97 }}
      transition={SPRING_BUTTON}
      {...props}
    >
      {inner}
    </motion.button>
  )
}
