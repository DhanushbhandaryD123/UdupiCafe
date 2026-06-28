import { useState, useEffect, useCallback } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { to: '/',            label: 'Home' },
  { to: '/menu',        label: 'Menu' },
  { to: '/about',       label: 'About' },
  { to: '/contact',     label: 'Contact' },
]

const drawerVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: { opacity: 1, x: '0%', transition: { type: 'tween', duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit:   { opacity: 0, x: '100%', transition: { type: 'tween', duration: 0.35, ease: [0.55, 0, 1, 0.45] } },
}

const linkVariants = {
  hidden:  { opacity: 0, x: 30 },
  visible: i => ({ opacity: 1, x: 0, transition: { delay: 0.1 + i * 0.07, type: 'spring', stiffness: 200, damping: 25 } }),
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 48)
  }, [])

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header
        role="banner"
        className={[
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-jungle-950/90 backdrop-blur-xl border-b border-sand-200/10 shadow-medium'
            : 'bg-transparent',
        ].join(' ')}
      >
        <div className="wrap">
          <nav className="flex items-center justify-between h-20" aria-label="Main navigation">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group z-10"
              onClick={close}
              aria-label="The Tropical Cafe — Home"
            >
              <span className="text-2xl" aria-hidden>🌴</span>
              <span className="font-serif text-lg leading-tight tracking-tight text-sand-200">
                Tropical<br />
                <span className="text-papaya italic">Cafe</span>
              </span>
            </Link>

            {/* Desktop links */}
            <ul className="hidden lg:flex items-center gap-8" role="list">
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      [
                        'relative font-sans text-sm font-medium tracking-wide transition-colors duration-300 py-1',
                        isActive ? 'text-sand-200' : 'text-sand-200/65 hover:text-sand-200',
                      ].join(' ')
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {label}
                        {isActive && (
                          <motion.span
                            layoutId="nav-underline"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-papaya rounded-full"
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/reservation" className="btn-primary btn-sm">
                Reserve a Table
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
              onClick={() => setOpen(v => !v)}
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={open}
              aria-controls="mobile-drawer"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-6 h-0.5 bg-sand-200 rounded-full origin-center"
              />
              <motion.span
                animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-6 h-0.5 bg-sand-200 rounded-full"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-6 h-0.5 bg-sand-200 rounded-full origin-center"
              />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-ink/60 backdrop-blur-sm"
              onClick={close}
              aria-hidden
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              id="mobile-drawer"
              role="dialog"
              aria-label="Navigation menu"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-jungle-900 border-l border-sand-200/10 flex flex-col px-8 pt-28 pb-12 shadow-xl-warm overflow-y-auto"
            >
              {/* Nav links */}
              <ul className="flex flex-col gap-2 mb-10" role="list">
                {NAV_LINKS.map(({ to, label }, i) => (
                  <motion.li key={to} custom={i} variants={linkVariants} initial="hidden" animate="visible">
                    <NavLink
                      to={to}
                      end={to === '/'}
                      onClick={close}
                      className={({ isActive }) =>
                        [
                          'block font-serif text-4xl font-normal italic py-2 transition-colors duration-300',
                          isActive ? 'text-papaya' : 'text-sand-200/80 hover:text-sand-200',
                        ].join(' ')
                      }
                    >
                      {label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                custom={NAV_LINKS.length}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                className="space-y-3"
              >
                <Link
                  to="/reservation"
                  onClick={close}
                  className="btn-primary w-full justify-center text-base py-4"
                >
                  Reserve a Table
                </Link>
                <Link
                  to="/menu"
                  onClick={close}
                  className="btn-secondary w-full justify-center text-base py-4"
                >
                  View Menu
                </Link>
              </motion.div>

              {/* Social */}
              <motion.div
                custom={NAV_LINKS.length + 1}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                className="mt-auto pt-8 border-t border-sand-200/10 flex gap-4"
              >
                {[
                  { label: 'Instagram', href: 'https://instagram.com', icon: '📸' },
                  { label: 'Facebook',  href: 'https://facebook.com',  icon: '💙' },
                  { label: 'Zomato',    href: 'https://zomato.com',    icon: '🍽️' },
                ].map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center justify-center w-11 h-11 rounded-full border border-sand-200/15 text-lg hover:border-papaya transition-colors duration-300"
                  >
                    {icon}
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
