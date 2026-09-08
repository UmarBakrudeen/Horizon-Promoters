import { useLayoutEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap.js'
import './Stats.css'

const ITEMS = [
  { value: 320, suffix: '+', label: 'Acres Developed' },
  { value: 18, suffix: '', label: 'Years in Real Estate' },
  { value: 1200, suffix: '+', label: 'Families Homed' },
  { value: 96, suffix: '%', label: 'Client Referral Rate' },
]

export default function Stats() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const nums = gsap.utils.toArray('.stat__num')
      nums.forEach((el) => {
        const target = Number(el.dataset.value)
        const counter = { val: 0 }
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          once: true,
          onEnter: () =>
            gsap.to(counter, {
              val: target,
              duration: 1.6,
              ease: 'power2.out',
              onUpdate: () => (el.textContent = Math.round(counter.val).toLocaleString()),
            }),
        })
      })
      gsap.from('.stat', {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: 'top 80%' },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="stats" ref={root}>
      <div className="wrap stats__row">
        {ITEMS.map((it) => (
          <div className="stat" key={it.label}>
            <p className="stat__value">
              <span className="stat__num" data-value={it.value}>0</span>
              {it.suffix}
            </p>
            <p className="stat__label">{it.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
