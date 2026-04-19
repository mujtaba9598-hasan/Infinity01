import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CEOQuote() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    const ctx = gsap.context(() => {
      gsap.from('.ceo-portrait', {
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'power3.out',
      })
      gsap.from('.ceo-quote > *', {
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
        opacity: 0,
        y: 30,
        duration: 0.9,
        stagger: 0.12,
        delay: 0.2,
        ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative bg-[var(--color-champagne-soft)] py-28 md:py-36 overflow-hidden">
      <div className="noise-overlay" />
      <div className="max-container section-gutter grid lg:grid-cols-12 gap-10 lg:gap-16 items-center relative">
        <div className="lg:col-span-5">
          <div className="ceo-portrait relative rounded-[2rem] overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0 border border-[var(--color-stone-line)] shadow-[var(--shadow-elevated)]">
            <img
              src="/assets/owner.png"
              alt="Ovais Hashmi, CEO of Infinity Turnkey Interiors"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-5 left-5 bg-[var(--color-bone)] rounded-full px-4 py-2 text-[0.72rem] border hairline shadow-[var(--shadow-card)]">
              <span className="font-medium">Ovais Hashmi</span>
              <span className="text-[var(--color-muted-ink)] ml-1.5">· CEO</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 ceo-quote">
          <p className="eyebrow mb-5">Letter from the founder</p>
          <blockquote className="pull-quote text-[var(--color-graphite)] max-w-2xl">
            <span className="font-display text-5xl text-[var(--color-cobalt)] leading-none mr-1 align-top">“</span>
            Every space we sign our name to is a signature piece. Crafted with pride, finished with the restraint a
            premium address deserves. Every project is our pride, and luxury, for us, is the discipline of leaving
            nothing to chance. That has been our measure since 2013, and it is the only one we accept when we hand
            over a key.
          </blockquote>
          <p className="mt-8 text-[var(--color-muted-ink)] max-w-xl leading-relaxed">
            Ovais Hashmi leads a studio of architects, engineers, joiners and project managers delivering shell to
            finish interiors from the Al Qusais atelier. Every brief is treated as a private commission, with the
            care a luxury client expects and the accountability a turnkey contract demands.
          </p>
          <div className="mt-10 flex items-center gap-5">
            <div className="h-px flex-1 bg-[var(--color-stone-line)]" />
            <span className="eyebrow">Al Qusais · Dubai · 2013 to present</span>
          </div>
        </div>
      </div>
    </section>
  )
}
