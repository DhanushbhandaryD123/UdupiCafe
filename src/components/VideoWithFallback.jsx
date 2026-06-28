import { useEffect, useRef, useState } from 'react'

/**
 * Renders a muted looping video. If it fails to load within 5s,
 * swaps to a slow Ken Burns zooming image so the layout never breaks.
 */
export default function VideoWithFallback({ src, poster, play = true, className = '' }) {
  const ref = useRef(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const v = ref.current
    if (!v || failed) return
    const t = setTimeout(() => { if (v.readyState < 2) setFailed(true) }, 5000)
    const onErr = () => setFailed(true)
    v.addEventListener('error', onErr, true)
    return () => { clearTimeout(t); v.removeEventListener('error', onErr, true) }
  }, [failed])

  useEffect(() => {
    const v = ref.current
    if (!v || failed) return
    if (play) v.play().catch(() => {})
    else v.pause()
  }, [play, failed])

  if (failed) {
    return <div className={`kenburns ${className}`} style={{ backgroundImage: `url('${poster}')` }} />
  }
  return (
    <video ref={ref} className={className} muted loop playsInline autoPlay={play} preload="metadata" poster={poster}>
      <source src={src} type="video/mp4" />
    </video>
  )
}
