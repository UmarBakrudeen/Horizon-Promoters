import { useCallback, useState } from 'react'
import Loader from './components/Loader.jsx'
// import Cursor from './components/Cursor.jsx'
// import ScrollProgress from './components/ScrollProgress.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import About from './components/About.jsx'
import Credentials from './components/Credentials.jsx'
import Services from './components/Services.jsx'
import Properties from './components/Properties.jsx'
import Process from './components/Process.jsx'
import WhyUs from './components/WhyUs.jsx'
import FAQ from './components/FAQ.jsx'
import Testimonials from './components/Testimonials.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [ready, setReady] = useState(false)
  const handleDone = useCallback(() => setReady(true), [])

  return (
    <>
      {/* <Cursor /> */}
      {/* <ScrollProgress /> */}
      <Loader onDone={handleDone} />
      <Navbar />
      <main aria-hidden={!ready}>
        <Hero ready={ready} />
        <Stats />
        <About />
        <Credentials />
        <Services />
        <Properties />
        <Process />
        <WhyUs />
        <FAQ />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}