import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from '../lib/gsap.js'
import './FAQ.css'

const FAQS = [
  {
    q: 'How do I know the land title is genuinely clear?',
    a: 'Before any plot is listed, our empanelled advocate runs a 30-year encumbrance check and title search, and we share copies of the parent document, patta and EC with you before booking — not after.',
  },
  {
    q: 'Can I get a home loan against a Horizon property?',
    a: 'Yes. Because our layouts are DTCP/RERA approved and titles are pre-verified, all our partner banks (SBI, HDFC, ICICI, LIC Housing Finance and others) process loans against our projects without additional legal delays.',
  },
  {
    q: 'What happens after I book — what documents do I get?',
    a: 'You receive a signed sale agreement, payment schedule, and copies of all approval documents at booking. At registration, you get the registered sale deed, encumbrance certificate and a patta transfer receipt.',
  },
  {
    q: 'Is a site visit required before booking?',
    a: 'We recommend it, and arrange it free of cost — a team member walks the plot or property with you, points out boundaries, and answers questions on the spot. Virtual walkthroughs are available if you can\u2019t visit in person.',
  },
  {
    q: 'What if I want to resell or the project is delayed?',
    a: 'Resale support is included at no extra charge once your sale deed is registered. If a construction milestone is delayed beyond the agreed schedule, our agreement includes a compensation clause — details are shared upfront, not buried in fine print.',
  },
  {
    q: 'Do you only sell, or do you also build?',
    a: 'Both. Land and resale properties are brokered directly by our team; construction (new builds and interiors) is handled in-house by our own engineers, so there\u2019s one point of accountability from land to keys.',
  },
]

export default function FAQ() {
  const root = useRef(null)
  const [open, setOpen] = useState(0)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-item', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.08,
        scrollTrigger: { trigger: root.current, start: 'top 78%' },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section id="faq" className="faq" ref={root}>
      <div className="wrap faq__grid">
        <div className="faq__intro">
          <p className="eyebrow">Common questions</p>
          <h2>Before you call, here's what most buyers ask</h2>
          <p className="faq__note">
            Still have a question? <a href="#cta">Ask us directly</a> — real
            answers, no scripted call centre.
          </p>
        </div>

        <div className="faq__list">
          {FAQS.map((item, i) => (
            <FaqRow key={item.q} item={item} isOpen={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqRow({ item, isOpen, onClick }) {
  const panel = useRef(null)

  useLayoutEffect(() => {
    if (!panel.current) return
    gsap.to(panel.current, {
      height: isOpen ? 'auto' : 0,
      opacity: isOpen ? 1 : 0,
      duration: 0.45,
      ease: 'power2.inOut',
    })
  }, [isOpen])

  return (
    <div className={`faq-item ${isOpen ? 'is-open' : ''}`}>
      <button className="faq-item__q" onClick={onClick} aria-expanded={isOpen}>
        <span>{item.q}</span>
        <span className="faq-item__icon" />
      </button>
      <div className="faq-item__a" ref={panel}>
        <p>{item.a}</p>
      </div>
    </div>
  )
}
