import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Philosophy() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    const ctx = gsap.context(() => {
      gsap.from('.phi-line', {
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
      })
      gsap.from('.phi-body', {
        scrollTrigger: { trigger: ref.current, start: 'top 60%' },
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative bg-[var(--color-bone)] py-28 md:py-40">
      <div className="max-container section-gutter grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <p className="eyebrow mb-4">Chapter I · Our Philosophy</p>
          <h2 className="display-lg">
            <span className="phi-line block">We don't furnish</span>
            <span className="phi-line block italic text-[var(--color-cobalt)]">rooms.</span>
            <span className="phi-line block">We compose</span>
            <span className="phi-line block italic">environments.</span>
          </h2>
        </div>

        <div className="lg:col-span-7 lg:pt-8">
          <div className="phi-body max-w-prose text-lg leading-relaxed text-[var(--color-graphite)] space-y-6 drop-cap">
            <p>
              Since 2013, Infinity Turnkey Interiors has delivered end-to-end fit-out across Dubai and the wider
              Emirates. Retail flagships, boutique hospitality, corporate floors, private villas, and theme park
              environments. All built with a single principle: the finished space should feel inevitable.
            </p>
            <p>
              We work shell-to-finish, integrating architectural intent, MEP discipline, and bespoke joinery under one
              signature. No handoffs. No compromises. No borrowed taste.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-3 gap-6">
            {[
              { title: 'Personal touch', text: 'Every project carries a signature, not a template.' },
              { title: 'Innovative design', text: 'We solve the unseen before shaping the seen.' },
              { title: 'Creative ideas', text: 'Pure craft, refined references, original forms.' },
            ].map((v) => (
              <div
                key={v.title}
                className="p-6 rounded-2xl bg-[var(--color-bone-100)] border border-[var(--color-stone-line)] transition-colors hover:bg-[var(--color-cobalt-mist)]"
              >
                <div className="h-8 w-8 rounded-full gradient-infinity mb-4 opacity-90" />
                <h3 className="font-display text-xl mb-1.5">{v.title}</h3>
                <p className="text-sm text-[var(--color-muted-ink)] leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
