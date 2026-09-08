import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/gsap.js'
import './WhyUs.css'

const REASONS = [
  { title: 'Clear title, always', desc: 'Every plot and property is legally vetted before it ever reaches a brochure.' },
  { title: 'Green by design', desc: 'Tree-lined avenues, rainwater harvesting and open parks in every layout we plan.' },
  { title: 'In-house construction', desc: 'No third-party handoffs — our own engineers see every build through to handover.' },
  { title: 'Transparent pricing', desc: 'One quoted price, no hidden development or "black" charges at registration.' },
]

export default function WhyUs() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.why-card', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: 'top 75%' },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="whyus" ref={root}>
      <div className="wrap whyus__grid">
        <div className="whyus__intro">
          <p className="eyebrow">Why Horizon</p>
          <h2>The difference shows up after registration too.</h2>
        </div>
        <div className="whyus__list">
          {REASONS.map((r) => (
            <div className="why-card" key={r.title}>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
