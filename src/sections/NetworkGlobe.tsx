import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import WireframeDottedGlobe from '@/components/WireframeDottedGlobe'

gsap.registerPlugin(ScrollTrigger)

const SUPPLIERS = [
  { name: 'RAK Ceramics', origin: 'Ras Al Khaimah' },
  { name: 'Jotun', origin: 'Norway' },
  { name: 'Dulux', origin: 'United Kingdom' },
  { name: 'Saint-Gobain', origin: 'France' },
  { name: 'Danube', origin: 'Dubai' },
  { name: 'Arabian Aluminium', origin: 'Dubai' },
  { name: 'Emirates Glass', origin: 'Dubai' },
  { name: 'Jebel Ali Marble', origin: 'Dubai' },
  { name: 'Al Ghurair Aluminium', origin: 'Dubai' },
  { name: 'ASTER', origin: 'India' },
]

export default function NetworkGlobe() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    const ctx = gsap.context(() => {
      gsap.from('.net-title-line', {
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      })
      gsap.from('.net-item', {
        scrollTrigger: { trigger: '.net-grid', start: 'top 80%' },
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 0.6,
        ease: 'power2.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative bg-[var(--color-cobalt-mist)] py-28 md:py-36 overflow-hidden">
      <div className="noise-overlay" />
      <div className="max-container section-gutter relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <p className="eyebrow mb-4">Chapter III · Our Network</p>
            <h2 className="display-lg mb-6">
              <span className="net-title-line block">Rooted in Dubai.</span>
              <span className="net-title-line block italic text-[var(--color-cobalt)]">Sourced</span>
              <span className="net-title-line block">from everywhere.</span>
            </h2>
            <p className="net-title-line text-[var(--color-muted-ink)] leading-relaxed max-w-md mb-4">
              From China to the USA, from Italy to Germany, Turkey to the UK. Our relationships with the world&rsquo;s
              finest furniture ateliers and material manufacturers mean we can source exactly what your vision
              demands.
            </p>
            <p className="net-title-line text-[var(--color-muted-ink)] leading-relaxed max-w-md">
              Every specification is delivered to Dubai with Infinity&rsquo;s assurance, handled by the same team that
              designs, installs, and hands over the key. Drag the globe to follow the arcs.
            </p>
            <div className="net-grid mt-10 grid grid-cols-2 gap-x-6 gap-y-3">
              {SUPPLIERS.map((s) => (
                <div key={s.name} className="net-item flex items-baseline justify-between gap-3 border-b hairline py-2.5">
                  <span className="font-medium text-sm text-[var(--color-ink)]">{s.name}</span>
                  <span className="text-[0.68rem] tracking-[0.12em] uppercase text-[var(--color-muted-ink)]">
                    {s.origin}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <WireframeDottedGlobe />
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[var(--color-bone)]/80 backdrop-blur-sm text-[0.68rem] tracking-[0.14em] uppercase border hairline">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-coral)] mr-2 align-middle pulse-pin" />
              Dubai, UAE · HQ
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
