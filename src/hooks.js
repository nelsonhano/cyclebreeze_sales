import { useEffect, useRef, useState } from 'react'

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))

export function useNow(interval = 1000) {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), interval)
    return () => clearInterval(id)
  }, [interval])
  return now
}

// Writes a 0..1 scroll progress to `--p` on the element without re-rendering.
// `measure(rect, vh)` returns the raw progress for that element.
export function useScrollProgress(measure) {
  const ref = useRef(null)
  const measureRef = useRef(measure)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let frame = 0
    const update = () => {
      frame = 0
      const p = clamp(measureRef.current(el.getBoundingClientRect(), window.innerHeight))
      el.style.setProperty('--p', p.toFixed(4))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  return ref
}

// Adds `.is-in` to every [data-reveal] element as it enters the viewport.
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        }),
      { rootMargin: '0px 0px -12% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

// Counts from 0 to `to` once the element is on screen.
export function useCountUp(to, duration = 1400) {
  const ref = useRef(null)
  const [reduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [value, setValue] = useState(reduced ? to : 0)
  useEffect(() => {
    const el = ref.current
    if (!el || reduced) return
    let frame = 0
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (t) => {
        const k = clamp((t - start) / duration)
        setValue(Math.round(to * (1 - Math.pow(1 - k, 3))))
        if (k < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [to, duration, reduced])
  return [ref, value]
}
