import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import CTA from '../components/sections/CTA'
import Features from '../components/sections/Features'
import Hero from '../components/sections/Hero'

export default function Home() {
  return (
    <div className="min-h-dvh bg-white text-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
