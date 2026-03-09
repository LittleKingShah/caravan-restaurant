import { useTranslation } from 'react-i18next'
import SectionHeading from '../ui/SectionHeading'
import TestimonialCard from '../ui/TestimonialCard'
import { siteContent } from '../../data/siteContent'
import ikatPattern from '../../assets/patterns/ikat-pattern.svg'

export default function Testimonials() {
  const { t } = useTranslation()

  return (
    <section className="relative py-24 sm:py-32 bg-caravan-dark overflow-hidden">
      {/* Subtle ikat background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: `url(${ikatPattern})`, backgroundSize: '200px 200px' }}
      />
      <div className="absolute inset-0 spotlight-ruby pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          title={t('testimonials.title')}
          subtitle={t('testimonials.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {siteContent.testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
