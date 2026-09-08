import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/gsap.js'
import './Credentials.css'

const BADGES = [
  {
    title: 'RERA Registered',
    detail: 'TN/HP/2008/000452',
    desc: 'Every project we sell is registered with the state Real Estate Regulatory Authority before booking opens.',
  },
  {
    title: 'DTCP Approved Layouts',
    detail: 'All plotted developments',
    desc: 'Layouts are approved by the Directorate of Town & Country Planning — roads, drainage and open space as per norm.',
  },
  {
    title: 'Clear & Marketable Title',
    detail: 'Legal-vetted, every parcel',
    desc: 'An independent advocate verifies the title chain and encumbrance certificate before any plot is listed.',
  },
  {
    title: '18 Years, One Promoter',
    detail: 'Since 2008',
    desc: 'No project has been handed to a third party mid-way — the team that signs your agreement sees it to handover.',
  },
]

const BANKS = [
  'State Bank of India', 'HDFC Ltd.', 'ICICI Bank', 'LIC Housing Finance',
  'Canara Bank', 'Indian Bank', 'Axis Bank', 'Bank of Baroda',
]

export default function Credentials() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cred-card', {
        opacity: 0,
        y: 26,
        duration: 0.7,
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: 'top 78%' },
      })
      gsap.to('.cred__marquee-track', {
        xPercent: -50,
        ease: 'none',
        repeat: -1,
        duration: 22,
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="cred" ref={root}>
      <div className="wrap">
        <p className="eyebrow">Why you can trust the paperwork</p>
        <h2 className="cred__head">Verified before it ever reaches you</h2>
        <p className="cred__sub">
          Real estate goes wrong on details most buyers can't check themselves.
          Here's exactly what we verify, register and guarantee on every
          single project before it's offered for sale.
        </p>

        <div className="cred__grid">
          {BADGES.map((b) => (
            <div className="cred-card" key={b.title}>
              <span className="cred-card__detail">{b.detail}</span>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cred__marquee">
        <p className="cred__marquee-label wrap">Home loans facilitated with</p>
        <div className="cred__marquee-track">
          {[...BANKS, ...BANKS].map((b, i) => (
            <span key={b + i}>{b}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
