import { useEffect } from 'react'

export default function useReveal(deps = []) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const els = document.querySelectorAll('.rv:not(.in)')
    if (!els.length) return
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      }),
      { threshold: 0.12 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
