import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { gsap } from '../lib/gsap.js'
import './Testimonials.css'

const QUOTES = [
  {
    text: 'The plot papers were spotless and the loan process moved faster than we expected. Horizon\u2019s team was on call the entire way.',
    name: 'Meera & Arun Nair',
    role: 'Plot owners, Horizon Meadows',
  },
  {
    text: 'We handed them our construction from foundation to finish. Weekly photos, honest costing, zero surprises.',
    name: 'Suresh Kumar',
    role: 'Villa owner, Palmwood',
  },
  {
    text: 'What sold us was the layout itself — the trees were already grown in when we moved in, not just promised on paper.',
    name: 'Divya Raghavan',
    role: 'Resident, Horizon Heights',
  },
]

export default function Testimonials() {
  const root = useRef(null)
  const textRef = useRef(null)
  const [i, setI] = useState(0)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testi__head > *', {
        opacity: 0, y: 20, duration: 0.7, stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: 'top 78%' },
      })
      gsap.from('.testi__panel', {
        opacity: 0, y: 24, duration: 0.8,
        scrollTrigger: { trigger: root.current, start: 'top 72%' },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    gsap.fromTo(textRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
  }, [i])

  const go = (dir) => setI((v) => (v + dir + QUOTES.length) % QUOTES.length)

  return (
    <section id="testimonials" className="testi" ref={root}>
      <div className="wrap">
        <div className="testi__head">
          <p className="eyebrow">Client stories</p>
          <h2>What moving with Horizon feels like</h2>
        </div>

        <div className="testi__panel">
          <span className="testi__mark">&ldquo;</span>
          <p className="testi__text" ref={textRef}>{QUOTES[i].text}</p>
          <div className="testi__foot">
            <div>
              <strong>{QUOTES[i].name}</strong>
              <span>{QUOTES[i].role}</span>
            </div>
            <div className="testi__nav">
              <button onClick={() => go(-1)} aria-label="Previous">←</button>
              <button onClick={() => go(1)} aria-label="Next">→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
