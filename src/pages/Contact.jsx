import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CAFE, FAQ } from '../data/index'

const MAP_EMBED =
  'https://www.google.com/maps?q=The+Tropical+Cafe,+Court+Back+Rd,+Brahmagiri,+Udupi,+Karnataka+576101&output=embed'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 30 },
  whileInView:{ opacity: 1, y: 0 },
  viewport:   { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] },
})

/* ─── FAQ Accordion ─── */
function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      {...fadeUp(index * 0.07)}
      className="border-b border-sand-200/10"
    >
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
      >
        <span className="font-serif text-lg text-sand-200 group-hover:text-papaya transition-colors duration-300">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-sand-200/40 text-xl flex-shrink-0 font-light"
          aria-hidden
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sand-200/60 text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ─── Contact Form ─── */
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  function update(field) {
    return e => setForm(f => ({ ...f, [field]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1200)
  }

  return (
    <div className="card p-8 md:p-10">
      <h3 className="font-serif text-2xl text-sand-200 mb-2">Send us a message</h3>
      <p className="text-sand-200/50 text-sm mb-8">We'll get back to you within 24 hours.</p>

      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-10"
          >
            <div className="text-5xl mb-4" aria-hidden>🌴</div>
            <h4 className="font-serif text-2xl text-sand-200 mb-2">Message received!</h4>
            <p className="text-sand-200/55 text-sm max-w-xs mx-auto">
              Thanks for reaching out. We'll respond to {form.email || 'your email'} shortly.
            </p>
            <button
              onClick={() => { setSent(false); setForm({ name:'', email:'', phone:'', subject:'', message:'' }) }}
              className="mt-6 btn-secondary btn-sm"
            >
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="space-y-5"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="ct-name" className="label">Your Name *</label>
                <input
                  id="ct-name"
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Priya Menon"
                  required
                  autoComplete="name"
                  className="input"
                />
              </div>
              <div>
                <label htmlFor="ct-phone" className="label">Phone</label>
                <input
                  id="ct-phone"
                  type="tel"
                  value={form.phone}
                  onChange={update('phone')}
                  placeholder="+91 98765 43210"
                  autoComplete="tel"
                  inputMode="tel"
                  className="input"
                />
              </div>
            </div>

            <div>
              <label htmlFor="ct-email" className="label">Email Address *</label>
              <input
                id="ct-email"
                type="email"
                value={form.email}
                onChange={update('email')}
                placeholder="you@example.com"
                required
                autoComplete="email"
                className="input"
              />
            </div>

            <div>
              <label htmlFor="ct-subject" className="label">Subject</label>
              <select
                id="ct-subject"
                value={form.subject}
                onChange={update('subject')}
                className="input appearance-none"
              >
                <option value="">Select a topic…</option>
                <option value="reservation">Reservation Query</option>
                <option value="event">Private Event</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="ct-message" className="label">Message *</label>
              <textarea
                id="ct-message"
                value={form.message}
                onChange={update('message')}
                placeholder="Tell us how we can help…"
                required
                rows={4}
                className="input resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading || !form.name || !form.email || !form.message}
              className="btn-primary w-full justify-center py-4 text-base disabled:opacity-50 disabled:pointer-events-none"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                  Sending…
                </span>
              ) : 'Send Message →'}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─── Page ─── */
export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us — The Tropical Cafe, Udupi'
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-jungle-950 overflow-hidden" aria-labelledby="contact-heading">
        <div className="absolute -right-32 top-0 w-96 h-96 rounded-full bg-lime/5 blur-3xl pointer-events-none" aria-hidden />
        <div className="wrap relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="eyebrow mb-4"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            id="contact-heading"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-title text-sand-200 mb-4"
          >
            We'd love to <em className="italic text-papaya">hear</em> from you.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sand-200/60 max-w-md text-base leading-relaxed"
          >
            Reservations, feedback, private events — reach out and we'll respond promptly.
          </motion.p>
        </div>
      </section>

      {/* Info + Form */}
      <section className="section bg-jungle-950">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Info sidebar */}
            <motion.div {...fadeUp(0)} className="lg:col-span-2 space-y-8">
              {[
                { icon: '📍', title: 'Address', content: CAFE.address, href: `https://maps.google.com/?q=${encodeURIComponent(CAFE.address)}` },
                { icon: '📞', title: 'Phone',   content: CAFE.phone,   href: `tel:${CAFE.phone.replace(/\s/g,'')}` },
                { icon: '✉️', title: 'Email',   content: CAFE.email,   href: `mailto:${CAFE.email}` },
                { icon: '🕗', title: 'Hours',   content: 'Mon–Thu: 8AM–10PM\nFri–Sat: 8AM–11PM\nSun: 9AM–10PM' },
              ].map(({ icon, title, content, href }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-jungle-900 border border-sand-200/10 flex items-center justify-center flex-shrink-0 text-lg">
                    {icon}
                  </div>
                  <div>
                    <p className="label mb-1">{title}</p>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        className="text-sand-200/75 hover:text-papaya transition-colors duration-300 text-sm leading-relaxed"
                      >
                        {content}
                      </a>
                    ) : (
                      <p className="text-sand-200/75 text-sm leading-relaxed whitespace-pre-line">{content}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Social links */}
              <div>
                <p className="label mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { label: 'Instagram', href: CAFE.instagram, text: 'Instagram' },
                    { label: 'Facebook',  href: CAFE.facebook,  text: 'Facebook' },
                    { label: 'Zomato',    href: CAFE.zomato,    text: 'Zomato' },
                  ].map(({ label, href, text }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="px-4 py-2 rounded-full border border-sand-200/15 text-xs text-sand-200/60 hover:border-papaya hover:text-papaya transition-colors duration-300"
                    >
                      {text}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div {...fadeUp(0.15)} className="lg:col-span-3">
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-sm bg-jungle-950" aria-label="Location map">
        <div className="wrap">
          <motion.div
            {...fadeUp(0)}
            className="rounded-3xl md:rounded-4xl overflow-hidden border border-sand-200/10"
            style={{ height: '420px' }}
          >
            <iframe
              src={MAP_EMBED}
              title="Tropical Cafe location map"
              loading="lazy"
              allowFullScreen
              className="w-full h-full border-0"
              style={{ filter: 'invert(88%) hue-rotate(160deg) saturate(0.55)' }}
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-jungle-900/40" aria-labelledby="faq-heading">
        <div className="wrap max-w-3xl mx-auto">
          <motion.div {...fadeUp(0)} className="mb-12">
            <SectionHeaderInline eyebrow="FAQ" heading={<>Frequently asked <em className="italic text-papaya">questions</em></>} />
          </motion.div>
          <div>
            {FAQ.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm bg-jungle-950 border-t border-sand-200/8">
        <div className="wrap text-center">
          <p className="text-sand-200/55 mb-6">Ready to visit? We'd love to see you.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/reservation" className="btn-primary">Reserve a Table</Link>
            <a href={`tel:${CAFE.phone.replace(/\s/g,'')}`} className="btn-secondary">Call Us Now</a>
          </div>
        </div>
      </section>
    </>
  )
}

/* Inline header to avoid prop-drilling SectionHeader light mode issue */
function SectionHeaderInline({ eyebrow, heading }) {
  return (
    <div className="sec-head">
      {eyebrow && (
        <span className="eyebrow mb-4">{eyebrow}</span>
      )}
      <h2 className="text-title font-serif text-sand-200">{heading}</h2>
    </div>
  )
}
