const BRANDS = [
  'RAK Ceramics',
  'Jotun',
  'Dulux',
  'Saint-Gobain',
  'Danube',
  'Arabian Aluminium',
  'Emirates Glass',
  'Jebel Ali Marble',
  'Al Ghurair Aluminium',
  'ASTER',
]

export default function MaterialsTicker() {
  const loop = [...BRANDS, ...BRANDS]
  return (
    <section className="relative bg-[var(--color-ink)] text-[var(--color-bone)] py-6 overflow-hidden border-y border-[var(--color-ink)]">
      <div className="flex overflow-hidden whitespace-nowrap ticker-track">
        {loop.map((b, i) => (
          <span key={i} className="flex items-center px-8 md:px-14 text-[0.78rem] md:text-sm tracking-[0.3em] uppercase">
            <span>{b}</span>
            <span className="mx-8 md:mx-14 inline-block h-1 w-1 rounded-full bg-[var(--color-coral)]" />
          </span>
        ))}
      </div>
    </section>
  )
}
