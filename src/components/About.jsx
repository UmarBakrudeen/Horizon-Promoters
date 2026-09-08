import { useLayoutEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap.js'
import './About.css'

export default function About() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about__copy > *', {
        opacity: 0,
        y: 26,
        duration: 0.8,
        stagger: 0.12,
        scrollTrigger: { trigger: root.current, start: 'top 70%' },
      })
      gsap.from('.about__figure', {
        clipPath: 'inset(0 0 100% 0)',
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.about__figure', start: 'top 78%' },
      })
      gsap.to('.about__figure img', {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="about" ref={root}>
      <div className="wrap about__grid">
        <div className="about__figure">
          <img
            src="/images/about.svg"
            alt="An aerial-style illustration of a planned residential layout"
          />
          <div className="about__figure-tag">
            <strong>Est. 2008</strong>
            <span>Family-run, site-first</span>
          </div>
        </div>

        <div className="about__copy">
          <p className="eyebrow">Who we are</p>
          <h2>
            We plan the plot before we sell the promise.
          </h2>
          <p className="about__lead">
            Horizon Promoters plans, approves and delivers land layouts, gated
            communities and turnkey builds — each one measured against clean
            title, real infrastructure and space that stays livable for
            decades, not just for the photograph.
          </p>
          <div className="about__points">
            <div>
              <h4>Verified Land</h4>
              <p>Every parcel is DTCP/RERA approved with clear, bank-loan-ready title.</p>
            </div>
            <div>
              <h4>Built to Live In</h4>
              <p>Wider roads, working drainage and tree cover planned before the first plot is sold.</p>
            </div>
            <div>
              <h4>End-to-End</h4>
              <p>From land acquisition to handover, one team carries the project through.</p>
            </div>
          </div>

          <blockquote className="about__note">
            <p>
              "We started Horizon after watching families get burned by
              unclear titles and layouts that were never finished. Every
              project here is one we'd be comfortable buying into ourselves."
            </p>
            <cite>— Founding team, Horizon Promoters</cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
