import ScrollReveal from './ScrollReveal'

export default function TestimonialCard({ testimonial, index }) {
  return (
    <ScrollReveal delay={index * 0.15}>
      <div className="relative bg-caravan-indigo/30 border border-caravan-gold/[0.06] p-8 sm:p-10 group hover:border-caravan-gold/15 transition-[border-color] duration-200">
        {/* Large decorative quote */}
        <span className="absolute -top-2 left-6 text-7xl font-heading text-caravan-gold/[0.07] leading-none select-none pointer-events-none">
          &ldquo;
        </span>

        {/* Stars */}
        <div className="flex gap-1 mb-6">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <svg key={i} className="w-3.5 h-3.5 text-caravan-gold/60" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <p className="relative text-caravan-cream/50 text-sm sm:text-base leading-[1.9] font-light italic font-heading">
          {testimonial.text}
        </p>

        {/* Author */}
        <div className="mt-8 flex items-center gap-3">
          <span className="w-8 h-px bg-caravan-gold/30" />
          <span className="font-display text-xs tracking-[0.2em] text-caravan-gold/60 uppercase">
            {testimonial.name}
          </span>
        </div>
      </div>
    </ScrollReveal>
  )
}
