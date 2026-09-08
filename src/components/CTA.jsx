import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from '../lib/gsap.js'
import './CTA.css'

export default function CTA() {
  const root = useRef(null)
  const [sent, setSent] = useState(false)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta__content > *', {
        opacity: 0, y: 24, duration: 0.8, stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: 'top 75%' },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="cta" className="cta" ref={root}>
      <div className="wrap cta__content">
        <p className="eyebrow">Get in touch</p>
        <h2>Tell us what you’re looking for, we’ll shortlist it.</h2>
        <p className="cta__sub">
          Plots, villas, apartments or a full construction project — share a
          few details and our team calls back within one business day.
        </p>

        <form className="cta__form" onSubmit={submit}>
          <input type="text" placeholder="Your name" required />
          <input type="tel" placeholder="Phone number" required />
          <select defaultValue="">
            <option value="" disabled>I’m interested in…</option>
            <option>Residential Plots</option>
            <option>Villas / Apartments</option>
            <option>Farm Land</option>
            <option>Construction Services</option>
          </select>
          <button type="submit" className="btn solid">
            {sent ? 'Thank you — we’ll call you' : 'Request a Callback'}
          </button>
        </form>

        <div className="cta__contact">
          <div>
            <span>Call</span>
            <strong>+91 98656 59510</strong>
          </div>
          <div>
            <span>Visit</span>
            <strong>Thiruverumbur, Trichy</strong>
          </div>
          <div>
            <span>Email</span>
            <strong>hello@horizonpromoters.in</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
