import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Button } from '@/components/ui/Button'
import { ArrowDownRight, Phone } from 'lucide-react'

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    const ctx = gsap.context(() => {
      gsap.from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.8, delay: 2.6, ease: 'power3.out' })
      gsap.from('.hero-line', {
        opacity: 0,
        y: 60,
        duration: 1.1,
        stagger: 0.12,
        delay: 2.75,
        ease: 'power4.out',
      })
      gsap.from('.hero-sub', { opacity: 0, y: 20, duration: 0.9, delay: 3.35, ease: 'power3.out' })
      gsap.from('.hero-ctas', { opacity: 0, y: 20, duration: 0.8, delay: 3.55, ease: 'power3.out' })
      gsap.from('.hero-meta', { opacity: 0, duration: 1.2, delay: 3.8, ease: 'power2.out' })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={rootRef}
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-[var(--color-bone)] pt-28 md:pt-32"
    >
      <div className="noise-overlay z-0" />

      <div className="max-container section-gutter grid lg:grid-cols-12 gap-10 lg:gap-6 relative z-10 pb-16 md:pb-24">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <p className="hero-eyebrow eyebrow mb-6 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-[var(--color-cobalt)]" />
            Dubai · Turnkey Interior Design &amp; Fit-out · Est. 2013
          </p>
          <h1 className="display-xl">
            <span className="hero-line block">From empty rooms</span>
            <span className="hero-line block italic font-normal">
              to <span className="text-gradient-infinity">extraordinary</span> spaces.
            </span>
          </h1>
          <p className="hero-sub mt-8 text-lg md:text-xl max-w-xl text-[var(--color-muted-ink)] leading-relaxed">
            A design &amp; contracting studio delivering shell-to-finish interiors for retail, hospitality, commercial,
            residential &amp; special projects across the Emirates.
          </p>
          <div className="hero-ctas mt-10 flex flex-wrap items-center gap-3">
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open('https://wa.me/971554447864', '_blank')}
            >
              Start a project <ArrowDownRight size={16} />
            </Button>
            <Button variant="outline" size="lg" onClick={() => (window.location.href = 'tel:+971554447864')}>
              <Phone size={14} /> +971 55 444 7864
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[min(78vh,680px)] shadow-[var(--shadow-elevated)] border border-[var(--color-stone-line)]">
            <video
              src="/assets/hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/40 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[var(--color-bone)]">
              <div>
                <p className="eyebrow text-[var(--color-bone)]/80">Fit-out in motion</p>
                <p className="font-display text-xl md:text-2xl leading-tight mt-1">Residential · Dubai</p>
              </div>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-bone)]/50 text-[0.65rem] tracking-[0.2em] uppercase">
                Live
              </span>
            </div>
          </div>
          <div className="absolute -left-6 -bottom-6 hidden lg:flex items-center gap-3 px-4 py-3 bg-[var(--color-bone)] border border-[var(--color-stone-line)] rounded-2xl shadow-[var(--shadow-card)]">
            <div className="h-10 w-10 rounded-full gradient-infinity" />
            <div>
              <div className="text-[0.78rem] font-medium">200+ clients</div>
              <div className="text-[0.7rem] text-[var(--color-muted-ink)]">across the UAE since 2013</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-meta max-container section-gutter relative z-10 pb-10">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 pt-8 border-t hairline border-t-[var(--color-stone-line)]">
          {[
            ['Retail', '01'],
            ['Hospitality', '02'],
            ['Commercial', '03'],
            ['Residential', '04'],
            ['Theme Parks', '05'],
            ['Special', '06'],
          ].map(([label, num]) => (
            <div key={label} className="flex flex-col">
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--color-muted-ink)]">{num}</span>
              <span className="font-display text-lg md:text-xl">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
