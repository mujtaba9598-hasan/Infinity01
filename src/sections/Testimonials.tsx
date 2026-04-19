import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const TESTIMONIALS = [
  {
    quote:
      'They fit out our flagship in under ten weeks and every surface still looks the day it opened. That kind of finish does not happen by luck.',
    author: 'Milanda Moses',
    role: 'Retail Development Lead · UAE',
  },
  {
    quote:
      'We brought them in for joinery and ended up handing them the rest of the floor. Their in-house atelier is the real differentiator.',
    author: 'Joshua Smith',
    role: 'Operations Director · Hospitality',
  },
  {
    quote:
      'Infinity is the only contractor I have worked with whose MEP disappears the way it should. Behind the architecture, not fighting it.',
    author: 'Emily Watson',
    role: 'Principal · Interior Design Studio',
  },
]

export default function Testimonials() {
  return (
    <section className="relative bg-[var(--color-bone)] py-28 md:py-36 overflow-hidden">
      <div className="max-container section-gutter">
        <div className="text-center mb-14">
          <p className="eyebrow mb-3">Voices</p>
          <h2 className="display-md max-w-2xl mx-auto">
            What the work <span className="italic text-[var(--color-cobalt)]">earns</span> us.
          </h2>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={40}
          autoplay={{ delay: 5500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          speed={900}
          pagination={{ clickable: true, bulletClass: 'swiper-bullet', bulletActiveClass: 'swiper-bullet-active' }}
          loop
          grabCursor
          className="max-w-4xl mx-auto !overflow-visible"
        >
          {TESTIMONIALS.map((t, i) => (
            <SwiperSlide key={i}>
              <blockquote className="px-4 md:px-8 text-center">
                <p className="pull-quote leading-snug text-[var(--color-graphite)]">
                  <span className="font-display text-5xl text-[var(--color-coral)] leading-none mr-1 align-top">“</span>
                  {t.quote}
                </p>
                <footer className="mt-10 flex items-center justify-center gap-4">
                  <div className="h-10 w-10 rounded-full gradient-infinity" />
                  <div className="text-left">
                    <div className="font-medium text-[var(--color-ink)]">{t.author}</div>
                    <div className="text-xs text-[var(--color-muted-ink)] tracking-wide">{t.role}</div>
                  </div>
                </footer>
              </blockquote>
            </SwiperSlide>
          ))}
        </Swiper>

        <style>{`
          .swiper-bullet {
            display: inline-block;
            width: 28px;
            height: 2px;
            background: var(--color-stone-line);
            margin: 0 4px;
            transition: background 200ms ease, width 200ms ease;
            cursor: pointer;
            border: 0;
            padding: 0;
          }
          .swiper-bullet-active {
            background: var(--color-cobalt);
            width: 48px;
          }
          .swiper-pagination {
            position: relative;
            margin-top: 40px;
            text-align: center;
          }
        `}</style>
      </div>
    </section>
  )
}
