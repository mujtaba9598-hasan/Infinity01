import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/Button'

const NAV = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About', href: '#', active: false },
  { label: 'Services', href: '#', active: false },
  { label: 'Projects', href: '#', active: false },
  { label: 'Associates', href: '#', active: false },
  { label: 'News', href: '#', active: false },
  { label: 'Contact', href: '#', active: false },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none">
      <div className="section-gutter pt-4 max-container">
        <nav
          className={[
            'pointer-events-auto flex items-center justify-between gap-6 rounded-full border transition-all duration-300',
            'px-5 md:px-7 py-3',
            scrolled
              ? 'bg-[var(--color-bone)]/90 backdrop-blur-md border-[var(--color-stone-line)] shadow-[var(--shadow-card)]'
              : 'bg-[var(--color-bone)]/55 backdrop-blur-sm border-[var(--color-stone-line)]/60',
          ].join(' ')}
        >
          <a href="#home" className="flex items-center gap-2.5 shrink-0" aria-label="Infinity Turnkey Interiors, Home">
            <img src={`${import.meta.env.BASE_URL}assets/logo.png`} alt="Infinity" className="h-11 md:h-12 w-auto" />
          </a>

          <ul className="hidden lg:flex items-center gap-7 text-[0.82rem] tracking-wide">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={[
                    'transition-colors duration-200',
                    item.active
                      ? 'text-[var(--color-ink)] font-medium'
                      : 'text-[var(--color-muted-ink)] cursor-default',
                  ].join(' ')}
                  onClick={(e) => {
                    if (!item.active) e.preventDefault()
                  }}
                  aria-current={item.active ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <Button variant="primary" size="md" onClick={() => window.open('https://wa.me/971554447864', '_blank')}>
              Start a Project
            </Button>
          </div>

          <button
            className="lg:hidden p-2 -mr-1 rounded-full hover:bg-[var(--color-bone-100)] transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden pointer-events-auto mt-2 rounded-3xl bg-[var(--color-bone)] border border-[var(--color-stone-line)] shadow-[var(--shadow-elevated)] p-5">
            <ul className="flex flex-col gap-1">
              {NAV.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={[
                      'block px-3 py-2.5 rounded-xl transition-colors',
                      item.active
                        ? 'bg-[var(--color-cobalt)] text-[var(--color-bone)] font-medium'
                        : 'text-[var(--color-muted-ink)] cursor-default',
                    ].join(' ')}
                    onClick={(e) => {
                      if (!item.active) e.preventDefault()
                      else setOpen(false)
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              variant="primary"
              size="md"
              className="w-full mt-3"
              onClick={() => window.open('https://wa.me/971554447864', '_blank')}
            >
              Start a Project
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
