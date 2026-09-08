import { useEffect, useRef, useState } from 'react'
import { gsap } from '../lib/gsap.js'
import './Navbar.css'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#properties', label: 'Properties' },
  { href: '#process', label: 'Process' },
  { href: '#faq', label: 'FAQ' },
  { href: '#testimonials', label: 'Stories' },
]

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuRef.current) return
    if (open) {
      gsap.fromTo(
        menuRef.current,
        { clipPath: 'inset(0% 0% 100% 0%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.55, ease: 'power3.inOut' }
      )
      gsap.fromTo(
        menuRef.current.querySelectorAll('a'),
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, delay: 0.15 }
      )
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`nav ${solid ? 'nav--solid' : ''}`}>
      <div className="nav__inner wrap">
        <a href="#top" className="nav__brand" onClick={close}>
          <img src="/logo.png" alt="Horizon Promoters" />
          <span>
            Horizon<em>Promoters</em>
          </span>
        </a>
        <nav className="nav__links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#cta" className="btn nav__cta">
          Enquire Now
        </a>
        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </div>

      <div className="nav__mobile" ref={menuRef} style={{ display: open ? 'flex' : 'none' }}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>
            {l.label}
          </a>
        ))}
        <a href="#cta" className="btn solid" onClick={close}>
          Enquire Now
        </a>
      </div>
    </header>
  )
}
