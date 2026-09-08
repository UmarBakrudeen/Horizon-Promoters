import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/gsap.js'
import './Footer.css'

export default function Footer() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.footer__rule',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: root.current, start: 'top 90%' },
        }
      )
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <footer className="footer" ref={root}>
      <div className="footer__rule" />
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <img src="/logo.png" alt="Horizon Promoters" />
          <p>Green spaces. Better places.</p>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#properties">Properties</a>
          <a href="#process">Process</a>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <a href="#services">Land & Plots</a>
          <a href="#services">Premium Properties</a>
          <a href="#services">Construction</a>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <a href="tel:+919876543210">+91 98765 43210</a>
          <a href="mailto:hello@horizonpromoters.in">hello@horizonpromoters.in</a>
          <span>Horizon Towers, Ring Road, Madurai</span>
        </div>
      </div>
      <div className="wrap footer__bottom">
        <span>© {new Date().getFullYear()} Horizon Promoters. All rights reserved.</span>
        <span>RERA Reg. No. TN/HP/00000/2026</span>
      </div>
    </footer>
  )
}
