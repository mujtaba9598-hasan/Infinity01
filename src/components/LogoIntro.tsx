import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function LogoIntro({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const already = sessionStorage.getItem('infinity-intro-seen') === '1'
    if (reduced || already) {
      setHidden(true)
      onComplete()
      return
    }

    const ctx = gsap.context(() => {
      const tiles = gsap.utils.toArray<HTMLElement>('.intro-tile')
      const dots = gsap.utils.toArray<HTMLElement>('.intro-dot')
      const word = document.querySelector('.intro-word')

      gsap.set('.intro-backdrop', { opacity: 1 })
      gsap.set(tiles, {
        x: () => gsap.utils.random(-window.innerWidth, window.innerWidth),
        y: () => gsap.utils.random(-window.innerHeight, window.innerHeight),
        rotation: () => gsap.utils.random(-180, 180),
        opacity: 0,
      })
      gsap.set(dots, { scale: 0, opacity: 0 })
      gsap.set(word, { opacity: 0 })

      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem('infinity-intro-seen', '1')
          setHidden(true)
          onComplete()
        },
      })

      tl.to(tiles, {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        duration: 1.1,
        stagger: { each: 0.03, from: 'random' },
        ease: 'power3.out',
      })
        .to(word, { opacity: 1, duration: 0.5 }, '-=0.25')
        .to(
          dots,
          { scale: 1, opacity: 1, duration: 0.35, stagger: 0.12, ease: 'back.out(2)' },
          '-=0.2',
        )
        .to({}, { duration: 0.45 })
        .to('.intro-wrap', { opacity: 0, duration: 0.6, ease: 'power2.inOut' })
    }, containerRef)

    return () => ctx.revert()
  }, [onComplete])

  if (hidden) return null

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center"
      aria-hidden="true"
    >
      <div className="intro-wrap relative w-full h-full flex items-center justify-center">
        <div className="intro-backdrop absolute inset-0 bg-[var(--color-bone)]" />
        <svg
          className="intro-word relative w-[min(72vw,680px)] h-auto"
          viewBox="0 0 880 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Infinity Turnkey Interiors"
        >
          {/* Simplified INFINITY wordmark, 8 letters as mosaic tile clusters */}
          {Array.from({ length: 56 }).map((_, i) => {
            const col = i % 14
            const row = Math.floor(i / 14)
            return (
              <rect
                key={i}
                className="intro-tile"
                x={20 + col * 58}
                y={28 + row * 28}
                width={48}
                height={22}
                rx={3}
                fill="oklch(0.58 0.22 260)"
              />
            )
          })}
          <circle className="intro-dot" cx={235} cy={22} r={7} fill="oklch(0.66 0.23 27)" />
          <circle className="intro-dot" cx={523} cy={22} r={7} fill="oklch(0.66 0.23 27)" />
        </svg>
      </div>
    </div>
  )
}
