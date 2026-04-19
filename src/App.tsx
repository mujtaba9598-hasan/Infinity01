import { useState } from 'react'
import LogoIntro from '@/components/LogoIntro'
import Navbar from '@/components/Navbar'
import WhatsAppPill from '@/components/WhatsAppPill'
import Footer from '@/components/Footer'
import Hero from '@/sections/Hero'
import Philosophy from '@/sections/Philosophy'
import Services from '@/sections/Services'
import StatsExpertise from '@/sections/StatsExpertise'
import NetworkGlobe from '@/sections/NetworkGlobe'
import Projects from '@/sections/Projects'
import MaterialsTicker from '@/sections/MaterialsTicker'
import CEOQuote from '@/sections/CEOQuote'
import Testimonials from '@/sections/Testimonials'
import BlogPreview from '@/sections/BlogPreview'
import ContactCTA from '@/sections/ContactCTA'
import { useLenis } from '@/hooks/useLenis'

export default function App() {
  const [, setReady] = useState(false)
  useLenis()

  return (
    <div className="relative">
      <LogoIntro onComplete={() => setReady(true)} />
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <StatsExpertise />
        <NetworkGlobe />
        <Projects />
        <MaterialsTicker />
        <CEOQuote />
        <Testimonials />
        <BlogPreview />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppPill />
    </div>
  )
}
