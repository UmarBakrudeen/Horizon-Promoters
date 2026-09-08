import { useLayoutEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap.js'
import './Process.css'

const STEPS = [
  { n: '01', title: 'Consultation', desc: 'We understand your budget, purpose and preferred locations.' },
  { n: '02', title: 'Site Visit', desc: 'A guided visit to shortlisted plots or properties, on your schedule.' },
  { n: '03', title: 'Documentation', desc: 'Title verification, loan support and agreement drafting, handled for you.' },
  { n: '04', title: 'Handover', desc: 'Registration, keys and after-sales support — your Horizon address is ready.' },
]

export default function Process() {
  const root = useRef(null)
  const pathRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const path = pathRef.current
      const len = path.getTotalLength()
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len })
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top 70%',
          end: 'bottom 60%',
          scrub: 0.6,
        },
      })
      gsap.utils.toArray('.process-step').forEach((step) => {
        gsap.from(step, {
          opacity: 0,
          x: -24,
          duration: 0.7,
          scrollTrigger: { trigger: step, start: 'top 82%' },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section id="process" className="process" ref={root}>
      <div className="wrap">
        <div className="process__head">
          <p className="eyebrow">How it works</p>
          <h2>Four steps from interest to keys in hand</h2>
        </div>

        <div className="process__body">
          <svg className="process__line" viewBox="0 0 2 800" preserveAspectRatio="none" aria-hidden="true">
            <line x1="1" y1="0" x2="1" y2="800" stroke="var(--green-line)" strokeWidth="2" />
            <path ref={pathRef} d="M1,0 L1,800" stroke="var(--gold-500)" strokeWidth="2" fill="none" />
          </svg>

          <div className="process__steps">
            {STEPS.map((s) => (
              <div className="process-step" key={s.n}>
                <span className="process-step__n">{s.n}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
