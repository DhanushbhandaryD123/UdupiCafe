import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  useEffect(() => {
    document.title = '404 — Page Not Found | The Tropical Cafe'
  }, [])

  return (
    <main className="min-h-screen bg-jungle-950 flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 20 }}
          className="text-8xl mb-6"
          aria-hidden
        >
          🌴
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-xs tracking-widest text-papaya uppercase mb-4"
        >
          404 — Lost in the tropics
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-serif text-4xl md:text-5xl text-sand-200 mb-4"
        >
          This page doesn't exist.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-sand-200/55 mb-10 text-base leading-relaxed"
        >
          Looks like you wandered off the trail. Let's get you back to somewhere good.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex gap-3 justify-center flex-wrap"
        >
          <Link to="/" className="btn-primary">Back to Home</Link>
          <Link to="/menu" className="btn-secondary">View Menu</Link>
        </motion.div>
      </div>
    </main>
  )
}
