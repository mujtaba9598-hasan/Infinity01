import { useEffect, useRef, type FC } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

type Tone = 'cobalt' | 'champagne' | 'coral'

type Service = {
  num: string
  title: string
  body: string
  tone: Tone
  Art: FC
}

const COBALT = 'oklch(0.58 0.22 260)'
const CORAL = 'oklch(0.66 0.23 27)'
const INK = 'oklch(0.15 0 0)'

function PlanArt() {
  return (
    <svg viewBox="0 0 240 140" fill="none" className="w-full h-full">
      <defs>
        <pattern id="grid-plan" width="12" height="12" patternUnits="userSpaceOnUse">
          <path d="M 12 0 L 0 0 0 12" stroke={COBALT} strokeOpacity="0.14" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="240" height="140" fill="url(#grid-plan)" />
      <rect x="36" y="28" width="170" height="86" stroke={COBALT} strokeOpacity="0.75" strokeWidth="1.6" fill="none" />
      <line x1="120" y1="28" x2="120" y2="72" stroke={COBALT} strokeOpacity="0.55" strokeWidth="1" />
      <line x1="120" y1="72" x2="206" y2="72" stroke={COBALT} strokeOpacity="0.55" strokeWidth="1" />
      <path d="M 96 72 A 12 12 0 0 1 108 84" stroke={CORAL} strokeWidth="1.4" fill="none" />
      <circle cx="36" cy="28" r="2.5" fill={CORAL} />
      <circle cx="206" cy="114" r="2.5" fill={CORAL} />
      <text x="50" y="46" fontFamily="Inter" fontSize="6" letterSpacing="1.5" fill={INK} opacity="0.4">LIVING</text>
      <text x="142" y="46" fontFamily="Inter" fontSize="6" letterSpacing="1.5" fill={INK} opacity="0.4">DINING</text>
      <text x="142" y="96" fontFamily="Inter" fontSize="6" letterSpacing="1.5" fill={INK} opacity="0.4">KITCHEN</text>
    </svg>
  )
}

function MepArt() {
  return (
    <svg viewBox="0 0 240 140" fill="none" className="w-full h-full">
      <line x1="18" y1="70" x2="222" y2="70" stroke={COBALT} strokeOpacity="0.55" strokeWidth="2" />
      <line x1="60" y1="70" x2="60" y2="28" stroke={COBALT} strokeOpacity="0.55" strokeWidth="2" />
      <line x1="120" y1="70" x2="120" y2="112" stroke={COBALT} strokeOpacity="0.55" strokeWidth="2" />
      <line x1="180" y1="70" x2="180" y2="28" stroke={COBALT} strokeOpacity="0.55" strokeWidth="2" />
      <circle cx="60" cy="28" r="7" fill={CORAL} />
      <circle cx="180" cy="28" r="7" fill={CORAL} />
      <circle cx="120" cy="112" r="7" fill={CORAL} />
      <circle cx="60" cy="70" r="3.5" fill={COBALT} />
      <circle cx="120" cy="70" r="3.5" fill={COBALT} />
      <circle cx="180" cy="70" r="3.5" fill={COBALT} />
      <circle cx="18" cy="70" r="4" fill={COBALT} opacity="0.4" />
      <circle cx="222" cy="70" r="4" fill={COBALT} opacity="0.4" />
      <circle cx="60" cy="28" r="12" fill="none" stroke={CORAL} strokeOpacity="0.3" strokeWidth="1" className="pulse-pin" />
    </svg>
  )
}

function LeafArt() {
  return (
    <svg viewBox="0 0 240 140" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="leaf-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={COBALT} stopOpacity="0.25" />
          <stop offset="50%" stopColor="oklch(0.87 0.04 85)" stopOpacity="0.4" />
          <stop offset="100%" stopColor={CORAL} stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <path
        d="M 30 112 Q 80 20 150 70 Q 210 110 220 38"
        stroke={COBALT}
        strokeOpacity="0.6"
        strokeWidth="1.6"
        fill="none"
      />
      <path
        d="M 30 112 Q 100 50 170 92 Q 215 108 220 38 Q 182 70 150 70 Q 118 60 80 92 Q 52 110 30 112 Z"
        fill="url(#leaf-g)"
      />
      <path d="M 80 92 L 122 66" stroke={COBALT} strokeOpacity="0.35" strokeWidth="0.8" />
      <path d="M 100 82 L 138 60" stroke={COBALT} strokeOpacity="0.35" strokeWidth="0.8" />
      <path d="M 120 76 L 155 60" stroke={COBALT} strokeOpacity="0.35" strokeWidth="0.8" />
      <circle cx="150" cy="70" r="3.5" fill={CORAL} />
    </svg>
  )
}

function GlassArt() {
  return (
    <svg viewBox="0 0 240 140" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={COBALT} stopOpacity="0.25" />
          <stop offset="100%" stopColor={COBALT} stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={CORAL} stopOpacity="0.18" />
          <stop offset="100%" stopColor={CORAL} stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect x="36" y="22" width="46" height="96" fill="url(#g1)" stroke={COBALT} strokeOpacity="0.45" strokeWidth="1" />
      <rect x="96" y="32" width="46" height="86" fill="url(#g2)" stroke={COBALT} strokeOpacity="0.45" strokeWidth="1" />
      <rect x="156" y="22" width="46" height="96" fill="url(#g1)" stroke={COBALT} strokeOpacity="0.45" strokeWidth="1" />
      <line x1="50" y1="32" x2="50" y2="68" stroke="white" strokeOpacity="0.7" strokeWidth="1" />
      <line x1="110" y1="42" x2="110" y2="76" stroke="white" strokeOpacity="0.7" strokeWidth="1" />
      <line x1="170" y1="32" x2="170" y2="68" stroke="white" strokeOpacity="0.7" strokeWidth="1" />
      <rect x="36" y="22" width="166" height="1" fill={COBALT} opacity="0.5" />
      <rect x="36" y="117" width="166" height="1" fill={COBALT} opacity="0.5" />
    </svg>
  )
}

function WoodArt() {
  return (
    <svg viewBox="0 0 240 140" fill="none" className="w-full h-full">
      {Array.from({ length: 7 }).map((_, i) => (
        <ellipse
          key={i}
          cx="120"
          cy="70"
          rx={20 + i * 16}
          ry={10 + i * 5}
          stroke={COBALT}
          strokeOpacity={0.08 + i * 0.04}
          strokeWidth="1"
          fill="none"
        />
      ))}
      <circle cx="120" cy="70" r="4" fill={CORAL} />
      <circle cx="120" cy="70" r="10" fill="none" stroke={CORAL} strokeOpacity="0.35" strokeWidth="1" />
      <path d="M 40 70 L 30 70" stroke={COBALT} strokeOpacity="0.4" strokeWidth="1" />
      <path d="M 200 70 L 210 70" stroke={COBALT} strokeOpacity="0.4" strokeWidth="1" />
    </svg>
  )
}

function SpaceArt() {
  return (
    <svg viewBox="0 0 240 140" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="floor-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.87 0.04 85)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="oklch(0.87 0.04 85)" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <path d="M 40 104 L 120 64 L 200 104 L 120 144 Z" fill="url(#floor-g)" stroke={COBALT} strokeOpacity="0.5" strokeWidth="1" />
      <path d="M 40 104 L 40 32 L 120 -8 L 120 64 Z" fill={COBALT} fillOpacity="0.06" stroke={COBALT} strokeOpacity="0.4" strokeWidth="1" />
      <path d="M 120 64 L 120 -8 L 200 32 L 200 104 Z" fill={COBALT} fillOpacity="0.1" stroke={COBALT} strokeOpacity="0.4" strokeWidth="1" />
      <path d="M 88 88 L 118 78 L 148 88 L 118 98 Z" fill={CORAL} fillOpacity="0.35" stroke={CORAL} strokeOpacity="0.8" strokeWidth="1" />
      <path d="M 70 56 L 92 46 L 92 28 L 70 38 Z" fill={COBALT} fillOpacity="0.15" stroke={COBALT} strokeOpacity="0.5" strokeWidth="0.8" />
      <circle cx="160" cy="60" r="3" fill={CORAL} />
    </svg>
  )
}

const SERVICES: Service[] = [
  {
    num: '01',
    title: 'Interior Architecture and PM',
    body: 'Concept through construction, with a single project manager accountable end to end.',
    tone: 'cobalt',
    Art: PlanArt,
  },
  {
    num: '02',
    title: 'MEP Fit-out',
    body: 'Precision MEP integration that disappears into the architecture.',
    tone: 'champagne',
    Art: MepArt,
  },
  {
    num: '03',
    title: 'Sustainable Design',
    body: 'Low-impact specification, responsibly sourced materials, lifecycle thinking.',
    tone: 'cobalt',
    Art: LeafArt,
  },
  {
    num: '04',
    title: 'Aluminium and Glass',
    body: 'Custom curtain walls, glazing, and facade work engineered for Gulf conditions.',
    tone: 'champagne',
    Art: GlassArt,
  },
  {
    num: '05',
    title: 'Wooden Joinery',
    body: 'In-house atelier. Bespoke millwork, cabinetry, hand-finished surfaces.',
    tone: 'cobalt',
    Art: WoodArt,
  },
  {
    num: '06',
    title: 'Interior Design and Fit-out',
    body: 'Complete shell to finish delivery for flagship, F&B, corporate, and private work.',
    tone: 'coral',
    Art: SpaceArt,
  },
]

export default function Services() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    const ctx = gsap.context(() => {
      gsap.from('.svc-card', {
        scrollTrigger: { trigger: rootRef.current, start: 'top 75%' },
        opacity: 0,
        y: 50,
        stagger: 0.08,
        duration: 0.9,
        ease: 'power3.out',
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  const toneClass = (tone: Tone) => {
    if (tone === 'coral') return 'bg-[var(--color-coral-soft)]'
    if (tone === 'champagne') return 'bg-[var(--color-champagne-soft)]'
    return 'bg-[var(--color-cobalt-mist)]'
  }

  return (
    <section ref={rootRef} className="relative bg-[var(--color-bone-100)] py-28 md:py-36 border-y hairline">
      <div className="max-container section-gutter">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12 md:mb-16">
          <div>
            <p className="eyebrow mb-3">Chapter II · What we do</p>
            <h2 className="display-lg max-w-3xl">
              Six disciplines. <br />
              <span className="italic text-[var(--color-cobalt)]">One signature.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[var(--color-muted-ink)]">
            We run each discipline in-house, which is how every detail lands in the same language.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => {
            const Art = s.Art
            return (
              <article
                key={s.num}
                className={`svc-card group flex flex-col rounded-3xl border border-[var(--color-stone-line)] transition-all duration-300 ${toneClass(s.tone)} hover:shadow-[var(--shadow-card)] hover:-translate-y-1 cursor-pointer overflow-hidden`}
              >
                <div className="w-full h-[180px] md:h-[200px] border-b border-[var(--color-stone-line)]/60 overflow-hidden">
                  <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.04]">
                    <Art />
                  </div>
                </div>

                <div className="flex-1 flex flex-col p-7 md:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <span className="eyebrow">{s.num}</span>
                    <span className="h-9 w-9 rounded-full bg-[var(--color-bone)] border border-[var(--color-stone-line)] flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--color-ink)] group-hover:text-[var(--color-bone)] group-hover:rotate-[-12deg]">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                  <h3 className="font-display text-2xl leading-tight mb-3">{s.title}</h3>
                  <p className="text-sm text-[var(--color-muted-ink)] leading-relaxed">{s.body}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
