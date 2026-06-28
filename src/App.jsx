import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'

const Home        = lazy(() => import('./pages/Home.jsx'))
const About       = lazy(() => import('./pages/About.jsx'))
const Menu        = lazy(() => import('./pages/Menu.jsx'))
const Contact     = lazy(() => import('./pages/Contact.jsx'))
const Reservation = lazy(() => import('./pages/Reservation.jsx'))
const NotFound    = lazy(() => import('./pages/NotFound.jsx'))

/* Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return null
}

/* Loading skeleton */
function PageLoader() {
  return (
    <div className="min-h-screen bg-jungle-950 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          className="text-4xl mb-4 inline-block"
          aria-hidden
        >
          🌴
        </motion.div>
        <p className="font-mono text-xs tracking-widest text-sand-200/30 uppercase">Loading…</p>
      </div>
    </div>
  )
}

/* Page transition wrapper */
const pageVariants = {
  initial:  { opacity: 0, y: 12 },
  animate:  { opacity: 1,  y: 0, transition: { duration: 0.5, ease: [0.2, 0.7, 0.2, 1] } },
  exit:     { opacity: 0,  y: -8, transition: { duration: 0.3 } },
}

function AnimatedPage({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-papaya focus:text-ink focus:px-4 focus:py-2 focus:rounded-full focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
              <Route path="/menu" element={<AnimatedPage><Menu /></AnimatedPage>} />
              <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
              <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
              <Route path="/reservation" element={<AnimatedPage><Reservation /></AnimatedPage>} />
              <Route path="*" element={<AnimatedPage><NotFound /></AnimatedPage>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>

      <Footer />
    </>
  )
}
