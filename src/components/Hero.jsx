import { useLayoutEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap.js'
import './Hero.css'

export default function Hero({ ready }) {
  const root = useRef(null)
  const skyline = useRef(null)
  const played = useRef(false)

  useLayoutEffect(() => {
    if (!ready || played.current) return
    played.current = true
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.from('.hero__eyebrow', { opacity: 0, y: 16, duration: 0.7 })
        .from('.hero__line', { yPercent: 110, duration: 1.1, stagger: 0.12 }, '-=0.35')
        .from('.hero__sub', { opacity: 0, y: 14, duration: 0.8 }, '-=0.5')
        .from('.hero__actions > *', { opacity: 0, y: 14, duration: 0.7, stagger: 0.1 }, '-=0.55')
        .from('.hero__frame', { opacity: 0, scale: 1.06, duration: 1.3, ease: 'power3.out' }, '-=1')
        .from('.hero__stat', { opacity: 0, y: 12, duration: 0.6, stagger: 0.1 }, '-=0.6')
        .from('.hero__scrolldown', { opacity: 0, duration: 0.6 }, '-=0.2')
    }, root)
    return () => ctx.revert()
  }, [ready])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(skyline.current, {
        yPercent: 16,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: 0.6 },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section id="top" className="hero" ref={root}>
      <div className="hero__glow" />
      <div className="hero__skyline" ref={skyline}>
        <svg viewBox="0 0 1400 500" preserveAspectRatio="xMidYMax slice">
          <g fill="none" stroke="url(#g1)" strokeWidth="1.2" opacity="0.55">
            <rect x="120" y="230" width="90" height="270" />
            <rect x="230" y="150" width="110" height="350" />
            <rect x="360" y="60" width="130" height="440" />
            <rect x="980" y="180" width="100" height="320" />
            <rect x="1100" y="110" width="120" height="390" />
            <rect x="1240" y="220" width="90" height="280" />
          </g>
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#d4af37" />
              <stop offset="1" stopColor="#0a2116" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="wrap hero__inner">
        <p className="hero__eyebrow eyebrow">Horizon Promoters</p>

        <h1 className="hero__headline">
          <span className="hero__line-wrap"><span className="hero__line">Land you can trust.</span></span>
          <span className="hero__line-wrap"><span className="hero__line">Homes you'll love.</span></span>
          <span className="hero__line-wrap"><span className="hero__line hero__line--gold">Places worth building.</span></span>
        </h1>

        <p className="hero__sub">
          A promoter of plotted developments, premium residences and turnkey construction —
          built around open land, honest paperwork and greener neighbourhoods.
        </p>

        <div className="hero__actions">
          <a href="#properties" className="btn solid">View Properties</a>
          <a href="#cta" className="btn">Book a Site Visit</a>
        </div>

        <div className="hero__frame">
          <div className="hero__stats">
            <div className="hero__stat"><strong>18+</strong><span>Years Building</span></div>
            <div className="hero__stat"><strong>1,200+</strong><span>Families Homed</span></div>
            <div className="hero__stat"><strong>40</strong><span>Live Projects</span></div>
          </div>
        </div>
      </div>

      <div className="hero__scrolldown">
        <span /> Scroll
      </div>
    </section>
  )
}
