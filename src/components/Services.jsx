import { useLayoutEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap.js'
import './Services.css'

const PANELS = [
  {
    tag: '01',
    title: 'Land & Plots',
    desc: 'DTCP/RERA-approved layouts with clear title, ready infrastructure and flexible plot sizes for homes or investment.',
    img: '/images/service-land.svg',
    points: ['Clear, bank-loan-ready title', 'Tarred roads & drainage in place', 'EMI & outright purchase options'],
  },
  {
    tag: '02',
    title: 'Premium Properties',
    desc: 'Villas, gated apartments and independent houses designed around light, ventilation and everyday practicality.',
    img: '/images/service-property.svg',
    points: ['Ready-to-move & under-construction', 'Vaastu-considered layouts', 'On-site legal & loan assistance'],
  },
  {
    tag: '03',
    title: 'Construction',
    desc: 'Turnkey and contract-basis construction — from foundation to finishing — supervised by our in-house engineers.',
    img: '/images/service-construction.svg',
    points: ['Fixed-cost turnkey packages', 'Structural & interior finishing', 'Weekly progress reporting'],
  },
]

export default function Services() {
  const root = useRef(null)
  const track = useRef(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(min-width: 901px)', () => {
      const ctx = gsap.context(() => {
        const panels = gsap.utils.toArray('.service-panel')
        gsap.to(track.current, {
          x: () => -(track.current.scrollWidth - root.current.offsetWidth),
          ease: 'none',
          scrollTrigger: {
            id: 'svc',
            trigger: root.current,
            start: 'top top',
            end: () => `+=${track.current.scrollWidth}`,
            scrub: 0.7,
            pin: true,
            anticipatePin: 1,
          },
        })
        panels.forEach((p) => {
          const reveals = p.querySelectorAll('.service-panel__reveal')
          if (!reveals.length) return
          gsap.from(reveals, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.08,
            scrollTrigger: { trigger: p, start: 'left 75%', containerAnimation: gsap.getById('svc') },
          })
        })
      }, root)
      return () => ctx.revert()
    })
    return () => mm.revert()
  }, [])

  return (
    <section id="services" className="services" ref={root}>
      <div className="services__track" ref={track}>
        <div className="service-panel service-panel--intro">
          <p className="eyebrow">What we do</p>
          <h2>
            Three ways
            <br /> we build a horizon.
          </h2>
          <p className="services__hint">Scroll to explore →</p>
        </div>

        {PANELS.map((p) => (
          <article className="service-panel" key={p.tag} style={{ '--img': `url(${p.img})` }}>
            <div className="service-panel__media" />
            <div className="service-panel__body">
              <span className="service-panel__tag service-panel__reveal">{p.tag}</span>
              <h3 className="service-panel__reveal">{p.title}</h3>
              <p className="service-panel__desc service-panel__reveal">{p.desc}</p>
              <ul className="service-panel__reveal">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
