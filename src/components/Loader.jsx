import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/gsap.js'
import './Loader.css'

export default function Loader({ onDone }) {
  const root = useRef(null)
  const bar = useRef(null)
  const logo = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => {
          onDone?.()
          gsap.set(root.current, { display: 'none' })
        },
      })

      tl.set(root.current, { display: 'grid' })
        .from(logo.current, { opacity: 0, y: 14, duration: 0.9 })
        .fromTo(
          bar.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 1.1, ease: 'power2.inOut' },
          '-=0.3'
        )
        .to(logo.current, { opacity: 0, y: -10, duration: 0.5 }, '+=0.15')
        .to(root.current, { yPercent: -100, duration: 1, ease: 'power4.inOut' }, '-=0.1')
    }, root)
    return () => ctx.revert()
  }, [onDone])

  return (
    <div className="loader" ref={root}>
      <div className="loader__mark" ref={logo}>
        <img src="/logo.png" alt="Horizon Promoters" />
      </div>
      <div className="loader__track">
        <div className="loader__bar" ref={bar} />
      </div>
    </div>
  )
}
