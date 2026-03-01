import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import CTA from '../components/sections/CTA'
import Features from '../components/sections/Features'
import Hero from '../components/sections/Hero'
import Showcase from '../components/sections/Showcase'
import Marquee from '../components/sections/Marquee'
import ParallaxSections from '../components/sections/ParallaxSections'
import Portfolio from '../components/sections/Portfolio'
import InfoSegment from '../components/sections/InfoSegment'


export default function Home() {
  return (
    <div className="min-h-dvh bg-white text-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Marquee />
        <Features />
        <ParallaxSections />
        <Portfolio />
        <InfoSegment />
        <Marquee />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
