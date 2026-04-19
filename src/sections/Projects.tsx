import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

type Project = {
  sector: string
  title: string
  loc: string
  year: string
  span: string
  hue: string
  size: 'sm' | 'md' | 'lg'
  image: string
}

const PROJECTS: Project[] = [
  {
    sector: 'Retail',
    title: 'Flagship boutique',
    loc: 'Mall of the Emirates',
    year: '2024',
    span: 'md:col-span-7',
    hue: 'oklch(0.88 0.08 27)',
    size: 'lg',
    image: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=1600&q=80',
  },
  {
    sector: 'Hospitality',
    title: 'Signature lounge',
    loc: 'Downtown Dubai',
    year: '2024',
    span: 'md:col-span-5',
    hue: 'oklch(0.85 0.08 258)',
    size: 'md',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=80',
  },
  {
    sector: 'Commercial',
    title: 'HQ corporate floor',
    loc: 'DIFC',
    year: '2023',
    span: 'md:col-span-5',
    hue: 'oklch(0.93 0.025 85)',
    size: 'md',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    sector: 'Residential',
    title: 'Private villa',
    loc: 'Emirates Hills',
    year: '2023',
    span: 'md:col-span-7',
    hue: 'oklch(0.87 0.04 85)',
    size: 'lg',
    image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1600&q=80',
  },
  {
    sector: 'Theme Parks',
    title: 'Immersive attraction',
    loc: 'IMG Worlds',
    year: '2022',
    span: 'md:col-span-4',
    hue: 'oklch(0.85 0.08 258)',
    size: 'sm',
    image: 'https://images.unsplash.com/photo-1563906267088-b029e7101114?auto=format&fit=crop&w=1200&q=80',
  },
  {
    sector: 'Special',
    title: 'Bespoke atelier',
    loc: 'Al Quoz',
    year: '2022',
    span: 'md:col-span-4',
    hue: 'oklch(0.22 0.02 50)',
    size: 'sm',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80',
  },
  {
    sector: 'Retail',
    title: 'Concept store',
    loc: 'City Walk',
    year: '2022',
    span: 'md:col-span-4',
    hue: 'oklch(0.25 0.01 260)',
    size: 'sm',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1400&q=80',
  },
]

export default function Projects() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    const ctx = gsap.context(() => {
      gsap.from('.proj-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        opacity: 0,
        y: 60,
        stagger: 0.07,
        duration: 0.9,
        ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative bg-[var(--color-bone)] py-28 md:py-36">
      <div className="max-container section-gutter">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12 md:mb-16">
          <div>
            <p className="eyebrow mb-3">Chapter IV · Selected work</p>
            <h2 className="display-lg max-w-2xl">
              Work we're <span className="italic text-[var(--color-cobalt)]">proud</span> to sign.
            </h2>
          </div>
          <p className="max-w-sm text-[var(--color-muted-ink)]">
            A slice of recent projects across the UAE. Full book on the Projects page.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-5 auto-rows-[minmax(260px,auto)]">
          {PROJECTS.map((p, i) => (
            <article
              key={i}
              className={`proj-card ${p.span} group relative rounded-3xl overflow-hidden border border-[var(--color-stone-line)] cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]`}
              style={{
                background: p.hue,
                minHeight: p.size === 'lg' ? 440 : p.size === 'md' ? 360 : 300,
              }}
            >
              <img
                src={p.image}
                alt={`${p.title}, ${p.sector} project by Infinity Turnkey Interiors in ${p.loc}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/80 via-[var(--color-ink)]/20 to-transparent transition-opacity duration-300 group-hover:from-[var(--color-ink)]/70" />
              <div className="absolute inset-0 p-7 md:p-8 flex flex-col justify-between text-[var(--color-bone)]">
                <div className="flex items-start justify-between">
                  <span className="eyebrow text-[var(--color-bone)]/80">
                    {p.sector} · {p.year}
                  </span>
                  <span className="h-9 w-9 rounded-full bg-[var(--color-bone)]/15 backdrop-blur-sm border border-[var(--color-bone)]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight size={14} />
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl leading-tight mb-1 transition-transform duration-500 group-hover:translate-y-0 translate-y-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[var(--color-bone)]/80">{p.loc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
