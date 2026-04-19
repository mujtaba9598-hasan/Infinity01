import { MessageCircle } from 'lucide-react'

export default function WhatsAppPill() {
  return (
    <a
      href="https://wa.me/971554447864"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[var(--color-coral)] opacity-35 blur-xl group-hover:opacity-60 transition-opacity" />
      <span className="relative inline-flex items-center gap-2 rounded-full bg-[var(--color-coral)] text-[var(--color-bone)] px-5 py-3 shadow-[var(--shadow-elevated)] font-medium text-sm tracking-wide hover:bg-[var(--color-coral-deep)] transition-colors">
        <MessageCircle size={18} strokeWidth={2.2} />
        <span className="hidden sm:inline">WhatsApp us</span>
      </span>
    </a>
  )
}
