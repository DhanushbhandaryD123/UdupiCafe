import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/menu', label: 'Menu' },
  { to: '/contact', label: 'Visit Us' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className={`nav ${scrolled || open ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="logo" onClick={() => setOpen(false)}>
            <span className="dot" />The Tropical Cafe
          </Link>
          <div className="nav-links">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'active' : '')}>
                {l.label}
              </NavLink>
            ))}
            <Link to="/menu" className="nav-cta">Order Online</Link>
          </div>
          <button
            className={`burger ${open ? 'open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
        <Link to="/menu" className="btn-primary" onClick={() => setOpen(false)}>Order Online</Link>
      </div>
    </>
  )
}
