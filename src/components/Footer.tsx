import { Mail, Phone, MapPin } from 'lucide-react'

const SOCIALS = [
  {
    label: 'Twitter / X',
    path: 'M18.244 2H21l-6.543 7.47L22 22h-6.938l-4.57-5.857L5.25 22H2.5l6.998-7.995L2 2h7.063l4.13 5.36L18.244 2Zm-1.216 18h1.78L7.04 4H5.16l11.868 16Z',
  },
  {
    label: 'Facebook',
    path: 'M13.5 9H16V6h-2.5A3.5 3.5 0 0 0 10 9.5V12H8v3h2v6h3v-6h2.5l.5-3H13V9.5a.5.5 0 0 1 .5-.5Z',
  },
  {
    label: 'LinkedIn',
    path: 'M6 9v12H3V9h3Zm-1.5-2a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM21 14v7h-3v-6.3c0-1.4-.5-2.2-1.7-2.2-1.4 0-2.1 1-2.1 2.5V21h-3V9h3v1.3a3.6 3.6 0 0 1 3.1-1.6c2.3 0 3.7 1.4 3.7 4.3Z',
  },
  {
    label: 'Pinterest',
    path: 'M12 2a10 10 0 0 0-3.64 19.3c-.08-.9-.17-2.3.04-3.3.18-.86 1.16-5.5 1.16-5.5s-.3-.6-.3-1.48c0-1.38.8-2.42 1.8-2.42.86 0 1.27.64 1.27 1.41 0 .86-.55 2.14-.83 3.33-.24 1 .5 1.82 1.48 1.82 1.78 0 3.14-1.88 3.14-4.58 0-2.4-1.72-4.07-4.18-4.07-2.85 0-4.52 2.13-4.52 4.34 0 .86.33 1.78.74 2.28.08.1.1.18.07.28-.08.33-.26 1.05-.3 1.2-.05.19-.16.24-.37.14-1.36-.64-2.22-2.64-2.22-4.25 0-3.45 2.52-6.62 7.25-6.62 3.8 0 6.76 2.71 6.76 6.33 0 3.77-2.38 6.8-5.68 6.8-1.1 0-2.15-.58-2.5-1.25l-.68 2.6c-.25.95-.92 2.15-1.38 2.88A10 10 0 1 0 12 2Z',
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-[var(--color-ink)] text-[var(--color-bone)]">
      <div className="noise-overlay" />
      <div className="max-container section-gutter pt-20 pb-10 md:pt-28 md:pb-14 relative">
        <div className="flex flex-col items-center text-center mb-16">
          <img
            src={`${import.meta.env.BASE_URL}assets/logo.png`}
            alt="Infinity Turnkey Interiors"
            className="h-16 md:h-20 w-auto mb-8 brightness-0 invert"
          />
          <p className="pull-quote max-w-2xl opacity-90">
            The design and contracting company. Pioneer in one-stop solutions for high-end interior design and fit-out.
          </p>
          <p className="eyebrow mt-6 text-[var(--color-bone)]/70">Dubai · Since 2013</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-14 border-t border-[var(--color-bone)]/12 pt-12">
          <div>
            <p className="eyebrow mb-4 text-[var(--color-bone)]/70">Reach us</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={15} className="mt-1 opacity-70 shrink-0" />
                <div className="space-y-0.5">
                  <a href="tel:+97143361168" className="block hover:text-[var(--color-coral-soft)] transition-colors">
                    +971 4 33 61168
                  </a>
                  <a href="tel:+971554447864" className="block hover:text-[var(--color-coral-soft)] transition-colors">
                    +971 55 444 7864
                  </a>
                  <a href="tel:+97142838570" className="block hover:text-[var(--color-coral-soft)] transition-colors">
                    +971 4 2838570
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="opacity-70 shrink-0" />
                <a href="mailto:sales@infinity-fitout.com" className="hover:text-[var(--color-coral-soft)] transition-colors">
                  sales@infinity-fitout.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={15} className="opacity-70 shrink-0" />
                Al Qusais, Dubai, UAE
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 text-[var(--color-bone)]/70">Navigate</p>
            <ul className="space-y-2 text-sm text-[var(--color-bone)]/80">
              {['Home', 'About', 'Services', 'Projects', 'Associates', 'News', 'Contact'].map((n, i) => (
                <li key={n}>
                  <a
                    href={i === 0 ? '#home' : '#'}
                    className={
                      i === 0
                        ? 'hover:text-[var(--color-coral-soft)] transition-colors'
                        : 'cursor-default opacity-60'
                    }
                    onClick={(e) => {
                      if (i !== 0) e.preventDefault()
                    }}
                  >
                    {n}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 text-[var(--color-bone)]/70">Follow</p>
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="h-10 w-10 rounded-full border border-[var(--color-bone)]/20 flex items-center justify-center hover:bg-[var(--color-bone)] hover:text-[var(--color-ink)] transition-colors"
                  aria-label={s.label}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[var(--color-bone)]/12 flex flex-col md:flex-row items-center justify-between gap-3 text-xs opacity-80">
          <p>© {new Date().getFullYear()} Infinity Turnkey Interiors LLC. All rights reserved.</p>
          <p>
            Developed by{' '}
            <a
              href="mailto:hello@quartermasters.me"
              className="underline decoration-[var(--color-bone)]/30 underline-offset-4 hover:decoration-[var(--color-coral)] hover:text-[var(--color-coral-soft)] transition-colors"
            >
              Quartermasters F.Z.C
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
