import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

export function useCounter(end: number, duration: number = 2000) {
  // Start at the final value so the prerendered HTML (crawlers, no-JS, AI readers)
  // shows real numbers instead of 0; the count-up replays once the stat is in view.
  const [count, setCount] = useState(end)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const hasStarted = useRef(false)

  useEffect(() => {
    if (!inView || hasStarted.current) return
    hasStarted.current = true

    setCount(0)
    const startTime = performance.now()
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }
    requestAnimationFrame(animate)
  }, [inView, end, duration])

  return { count, ref }
}
