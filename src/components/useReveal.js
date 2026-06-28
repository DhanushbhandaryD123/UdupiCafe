import { useEffect } from 'react'

/** Adds .in to every .rv element when it scrolls into view. */
export default function useReveal(deps = []) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      }),
      { threshold: 0.15 },
    )
    document.querySelectorAll('.rv').forEach((el) => io.observe(el))
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
