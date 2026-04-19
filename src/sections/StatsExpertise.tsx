import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STATS: { value: number; suffix?: string; label: string }[] = [
  { value: 200, suffix: '+', label: 'Clients served since 2013' },
  { value: 12, label: 'Years operating in Dubai' },
  { value: 6, label: 'In-house disciplines' },
  { value: 48, suffix: ' hrs', label: 'Average initial response' },
]

const EXPERTISE: { label: string; pct: number }[] = [
  { label: 'Interior Design', pct: 95 },
  { label: 'Architecture', pct: 85 },
  { label: 'Lighting Work', pct: 78 },
  { label: 'MEP Integration', pct: 88 },
]

export default function StatsExpertise() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      STATS.forEach((s, i) => {
        const el = document.querySelector<HTMLElement>(`.stat-val-${i}`)
        if (!el) return
        if (reduced) {
          el.textContent = `${s.value}${s.suffix ?? ''}`
          return
        }
        const obj = { v: 0 }
        gsap.to(obj, {
          v: s.value,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: ref.current, start: 'top 75%' },
          onUpdate: () => {
            el.textContent = `${Math.round(obj.v)}${s.suffix ?? ''}`
          },
        })
      })

      if (!reduced) {
        gsap.from('.exp-bar', {
          scrollTrigger: { trigger: ref.current, start: 'top 70%' },
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 1.4,
          stagger: 0.12,
          ease: 'power3.out',
        })
      }
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative bg-[var(--color-bone)] py-24 md:py-32">
      <div className="max-container section-gutter grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-3">By the numbers</p>
          <h2 className="display-md mb-10 max-w-md">
            A decade of work in Dubai, delivered the same careful way.
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {STATS.map((s, i) => (
              <div key={s.label}>
                <div className={`stat-val-${i} font-display text-5xl md:text-6xl text-[var(--color-ink)] leading-none`}>
                  0
                </div>
                <div className="text-sm text-[var(--color-muted-ink)] mt-2 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-12">
          <p className="eyebrow mb-3">Expertise</p>
          <h3 className="display-md mb-10">
            Strength compounds <span className="italic text-[var(--color-cobalt)]">in-house.</span>
          </h3>
          <div className="space-y-7">
            {EXPERTISE.map((e) => (
              <div key={e.label}>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-medium text-[var(--color-ink)]">{e.label}</span>
                  <span className="eyebrow">{e.pct}%</span>
                </div>
                <div className="h-[6px] rounded-full bg-[var(--color-stone-line)] overflow-hidden">
                  <div
                    className="exp-bar h-full rounded-full gradient-infinity"
                    style={{ width: `${e.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
