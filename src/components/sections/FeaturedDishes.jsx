import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import SectionHeading from '../ui/SectionHeading'
import DishCard from '../ui/DishCard'
import ScrollReveal from '../ui/ScrollReveal'
import { menuItems } from '../../data/menuData'

const FEATURED = menuItems.filter((item) => item.featured)
const GRID_SPANS = [
  'lg:col-span-7 lg:row-span-2',
  'lg:col-span-5',
  'lg:col-span-5',
  'lg:col-span-12',
]

export default function FeaturedDishes() {
  const { t } = useTranslation()

  return (
    <section className="relative py-24 sm:py-32 bg-caravan-indigo overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-caravan-dark via-caravan-indigo to-caravan-dark pointer-events-none" />
      <div className="absolute inset-0 spotlight pointer-events-none" />

      {/* Decorative vertical lines */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute top-0 bottom-0 left-[20%] w-px bg-caravan-gold/[0.03]" />
        <div className="absolute top-0 bottom-0 right-[20%] w-px bg-caravan-gold/[0.03]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          title={t('featured.title')}
          subtitle={t('featured.subtitle')}
        />

        {/* Asymmetric grid: first item larger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-5">
          {FEATURED.map((dish, index) => {
            const isHero = index === 0

            return (
              <ScrollReveal
                key={dish.id}
                delay={index * 0.1}
                className={GRID_SPANS[index] || 'lg:col-span-6'}
              >
                {isHero ? (
                  <div className="group relative overflow-hidden h-full min-h-[400px] lg:min-h-[520px] bg-caravan-indigo/60 border border-caravan-gold/[0.04] hover:border-caravan-gold/15 transition-[border-color] duration-200">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-caravan-dark via-caravan-dark/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-caravan-dark/40 to-transparent rtl:bg-gradient-to-l" />
                    <div className="absolute bottom-0 start-0 end-0 p-8 sm:p-10">
                      <span className="font-display text-[10px] tracking-[0.25em] text-caravan-gold/60 uppercase">{t('featured.badge')}</span>
                      <h3 className="mt-3 font-heading text-3xl sm:text-4xl font-light text-caravan-cream group-hover:text-caravan-gold transition-colors duration-500 tracking-wide">
                        {dish.name}
                      </h3>
                      <p className="mt-3 text-caravan-cream/40 text-sm leading-[1.8] font-light max-w-md">
                        {t(`dishes.${dish.id}.description`, { defaultValue: dish.description })}
                      </p>
                      <div className="mt-4 flex items-center gap-3">
                        <span className="font-display text-sm tracking-wider text-caravan-gold">${dish.price}</span>
                        <span className="w-8 h-px bg-caravan-gold/30" />
                      </div>
                    </div>
                  </div>
                ) : index === 3 ? (
                  /* Last item — horizontal banner */
                  <div className="group relative overflow-hidden h-[280px] bg-caravan-indigo/60 border border-caravan-gold/[0.04] hover:border-caravan-gold/15 transition-[border-color] duration-200">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-caravan-dark/80 via-caravan-dark/50 to-transparent rtl:bg-gradient-to-l" />
                    <div className="absolute inset-0 flex items-center p-8 sm:p-12">
                      <div>
                        <span className="font-display text-[10px] tracking-[0.25em] text-caravan-gold/60 uppercase">{t('featured.handmade')}</span>
                        <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-light text-caravan-cream group-hover:text-caravan-gold transition-colors duration-500">
                          {dish.name}
                        </h3>
                        <p className="mt-2 text-caravan-cream/40 text-sm leading-[1.7] font-light max-w-sm">
                          {t(`dishes.${dish.id}.description`, { defaultValue: dish.description })}
                        </p>
                        <span className="inline-block mt-3 font-display text-sm tracking-wider text-caravan-gold">${dish.price}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <DishCard dish={dish} index={index} />
                )}
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
