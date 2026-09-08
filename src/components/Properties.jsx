import { useLayoutEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap.js'
import './Properties.css'

const LISTINGS = [
  {
    name: 'Horizon Meadows',
    type: 'Residential Plots',
    location: 'Ring Road, East Extension',
    price: '₹18.5L onwards',
    img: '/images/prop-plots.svg',
  },
  {
    name: 'The Palmwood Villas',
    type: 'Gated Villas',
    location: 'Palm Grove Layout',
    price: '₹92L onwards',
    img: '/images/prop-villa.svg',
  },
  {
    name: 'Horizon Heights',
    type: 'Apartments',
    location: 'City Central',
    price: '₹54L onwards',
    img: '/images/prop-apartments.svg',
  },
  {
    name: 'Emerald Farms',
    type: 'Farm Land',
    location: 'Riverside Belt',
    price: '₹9.2L / acre',
    img: '/images/prop-farm.svg',
  },
]

export default function Properties() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.properties__head > *', {
        opacity: 0, y: 20, duration: 0.7, stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: 'top 78%' },
      })
      gsap.utils.toArray('.property-card').forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 88%' },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section id="properties" className="properties" ref={root}>
      <div className="wrap">
        <div className="properties__head">
          <p className="eyebrow">Featured listings</p>
          <h2>Current developments open for booking</h2>
        </div>

        <div className="properties__grid">
          {LISTINGS.map((l) => (
            <article className="property-card" key={l.name}>
              <div className="property-card__media">
                <img src={l.img} alt={l.name} />
                <span className="property-card__type">{l.type}</span>
              </div>
              <div className="property-card__body">
                <h3>{l.name}</h3>
                <p className="property-card__loc">{l.location}</p>
                <div className="property-card__foot">
                  <span>{l.price}</span>
                  <a href="#cta">Enquire →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
