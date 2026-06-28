import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CAFE } from '../../data/index'

const QUICK_LINKS = [
  { to: '/',            label: 'Home' },
  { to: '/menu',        label: 'Menu' },
  { to: '/about',       label: 'Our Story' },
  { to: '/reservation', label: 'Reservations' },
  { to: '/contact',     label: 'Contact' },
]

const MENU_LINKS = [
  { label: 'Breakfast', to: '/menu' },
  { label: 'Asian Bowls', to: '/menu' },
  { label: 'Mains & Pizza', to: '/menu' },
  { label: 'Coffee', to: '/menu' },
  { label: 'Desserts', to: '/menu' },
]

const SOCIAL = [
  { label: 'Instagram', href: CAFE.instagram, icon: 'IG' },
  { label: 'Facebook',  href: CAFE.facebook,  icon: 'FB' },
  { label: 'Zomato',    href: CAFE.zomato,    icon: 'ZO' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subbed, setSubbed] = useState(false)

  function handleSub(e) {
    e.preventDefault()
    if (!email.trim()) return
    setSubbed(true)
    setEmail('')
  }

  return (
    <footer className="bg-jungle-950 border-t border-sand-200/8">
      {/* Top band */}
      <div className="wrap py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5" aria-label="Home">
              <span className="text-2xl" aria-hidden>🌴</span>
              <span className="font-serif text-xl text-sand-200 italic">Tropical Cafe</span>
            </Link>
            <p className="text-sm text-sand-200/55 leading-relaxed mb-6 max-w-xs">
              A lush tropical escape in the heart of Brahmagiri, Udupi. Where good food meets great company.
            </p>
            <div className="flex gap-3">
              {SOCIAL.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-sand-200/15 flex items-center justify-center font-mono text-2xs text-sand-200/50 hover:border-papaya hover:text-papaya transition-colors duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-mono text-2xs tracking-widest uppercase text-sand-200/40 mb-5">
              Explore
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-sand-200/65 hover:text-sand-200 transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-mono text-2xs tracking-widest uppercase text-sand-200/40 mb-5">
              Menu
            </h3>
            <ul className="space-y-3">
              {MENU_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm text-sand-200/65 hover:text-sand-200 transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours + Newsletter */}
          <div>
            <h3 className="font-mono text-2xs tracking-widest uppercase text-sand-200/40 mb-5">
              Opening Hours
            </h3>
            <ul className="space-y-2 mb-8">
              <li className="flex justify-between text-sm">
                <span className="text-sand-200/55">Mon – Thu</span>
                <span className="font-mono text-xs text-sand-200/80">8 AM – 10 PM</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-sand-200/55">Fri – Sat</span>
                <span className="font-mono text-xs text-lime">8 AM – 11 PM</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-sand-200/55">Sunday</span>
                <span className="font-mono text-xs text-sand-200/80">9 AM – 10 PM</span>
              </li>
            </ul>

            <h3 className="font-mono text-2xs tracking-widest uppercase text-sand-200/40 mb-3">
              Newsletter
            </h3>
            {subbed ? (
              <p className="text-sm text-lime">Thanks for subscribing! 🌴</p>
            ) : (
              <form onSubmit={handleSub} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  aria-label="Email address"
                  required
                  className="flex-1 bg-jungle-900 border border-sand-200/15 rounded-full px-4 py-2.5 text-sm text-sand-200 placeholder:text-sand-200/30 focus:outline-none focus:border-lime/50 transition-colors duration-300 min-w-0"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-papaya text-ink flex items-center justify-center hover:bg-papaya-dark transition-colors duration-300"
                >
                  →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-sand-200/8">
        <div className="wrap py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-sand-200/35">
            © {new Date().getFullYear()} The Tropical Cafe, Udupi. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-sand-200/35">
            <span>📍 {CAFE.address}</span>
          </div>
          <a
            href="#top"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="text-xs text-sand-200/40 hover:text-sand-200/70 transition-colors duration-300 flex items-center gap-1.5"
            aria-label="Back to top"
          >
            ↑ Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
