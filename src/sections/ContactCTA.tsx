import { Button } from '@/components/ui/Button'
import { ArrowUpRight, Phone, Mail } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section className="relative bg-[var(--color-bone)] pt-24 pb-32 md:pt-32 md:pb-40">
      <div className="max-container section-gutter">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-[var(--color-ink)] text-[var(--color-bone)] p-10 md:p-20">
          <div className="absolute inset-0 gradient-infinity opacity-25" />
          <div className="noise-overlay opacity-40" />
          <div className="relative grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow text-[var(--color-bone)]/70 mb-4">Start here</p>
              <h2 className="display-lg mb-6">
                Your next space, <br />
                <span className="italic">composed.</span>
              </h2>
              <p className="text-lg md:text-xl text-[var(--color-bone)]/75 max-w-2xl leading-relaxed">
                Send us the brief. We will walk the site, price the work, and come back with a single signature on the
                whole package: design, fit-out, joinery, MEP.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Button
                size="lg"
                variant="primary"
                className="bg-[var(--color-coral)] hover:bg-[var(--color-coral-deep)] text-[var(--color-bone)]"
                onClick={() => window.open('https://wa.me/971554447864', '_blank')}
              >
                Chat on WhatsApp <ArrowUpRight size={16} />
              </Button>
              <a
                href="tel:+971554447864"
                className="inline-flex items-center gap-3 rounded-full border border-[var(--color-bone)]/30 px-5 h-14 hover:bg-[var(--color-bone)]/10 transition-colors"
              >
                <Phone size={16} />
                <span className="text-sm">+971 55 444 7864</span>
              </a>
              <a
                href="mailto:sales@infinity-fitout.com"
                className="inline-flex items-center gap-3 rounded-full border border-[var(--color-bone)]/30 px-5 h-14 hover:bg-[var(--color-bone)]/10 transition-colors"
              >
                <Mail size={16} />
                <span className="text-sm">sales@infinity-fitout.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
