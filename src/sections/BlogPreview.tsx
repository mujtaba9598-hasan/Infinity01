import { ArrowUpRight } from 'lucide-react'

const POSTS = [
  {
    date: 'May 2, 2024',
    category: 'Studio Notes',
    title: 'What turnkey actually means, and why it matters for your timeline.',
    read: '6 min read',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    date: 'March 26, 2024',
    category: 'Sustainability',
    title: 'Seven decisions that make a Gulf interior measurably eco-friendly.',
    read: '8 min read',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    date: 'February 14, 2024',
    category: 'Craft',
    title: 'The quiet discipline behind in-house joinery.',
    read: '5 min read',
    image:
      'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=80',
  },
]

export default function BlogPreview() {
  return (
    <section className="relative bg-[var(--color-bone-100)] py-24 md:py-32 border-y hairline">
      <div className="max-container section-gutter">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p className="eyebrow mb-3">Journal</p>
            <h2 className="display-md">Notes from the atelier.</h2>
          </div>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2 text-sm text-[var(--color-muted-ink)] cursor-default"
          >
            Full journal <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {POSTS.map((p, i) => (
            <article
              key={i}
              className="group relative rounded-3xl overflow-hidden border border-[var(--color-stone-line)] bg-[var(--color-bone)] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-[var(--color-cobalt-mist)] to-[var(--color-champagne-soft)] relative">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[var(--color-bone)]/90 backdrop-blur-sm text-[0.68rem] tracking-[0.14em] uppercase font-medium">
                  {p.category}
                </div>
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 text-[0.7rem] text-[var(--color-muted-ink)] mb-3">
                  <span>{p.date}</span>
                  <span className="h-1 w-1 rounded-full bg-[var(--color-stone-line)]" />
                  <span>{p.read}</span>
                </div>
                <h3 className="font-display text-xl leading-snug mb-5 group-hover:text-[var(--color-cobalt)] transition-colors">
                  {p.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-[var(--color-muted-ink)]">
                  <span className="inline-flex items-center gap-1.5 font-medium text-[var(--color-ink)]">
                    Read article
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-[var(--color-ink)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
