import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CAFE } from '../data/index'

const TIMES = [
  '8:00 AM','8:30 AM','9:00 AM','9:30 AM','10:00 AM','10:30 AM',
  '11:00 AM','11:30 AM','12:00 PM','12:30 PM','1:00 PM','1:30 PM',
  '2:00 PM','2:30 PM','3:00 PM','3:30 PM','4:00 PM','4:30 PM',
  '5:00 PM','5:30 PM','6:00 PM','6:30 PM','7:00 PM','7:30 PM',
  '8:00 PM','8:30 PM','9:00 PM','9:30 PM',
]

const OCCASIONS = ['Casual Visit','Date Night','Birthday','Anniversary','Business Meeting','Family Gathering','Other']

export default function Reservation() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', date: '', time: '', guests: '2', occasion: '', notes: ''
  })
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.title = 'Reserve a Table — The Tropical Cafe, Udupi'
  }, [])

  function update(field) {
    return e => setForm(f => ({ ...f, [field]: e.target.value }))
  }

  const today = new Date().toISOString().split('T')[0]
  const canProceed1 = form.name && form.email && form.phone
  const canProceed2 = form.date && form.time && form.guests

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1500)
  }

  const perks = [
    { icon: '🌴', text: 'Lush tropical ambience' },
    { icon: '☕', text: 'Artisan welcome coffee' },
    { icon: '📸', text: 'Instagrammable setup' },
    { icon: '⚡', text: 'Quick, attentive service' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-jungle-950 overflow-hidden">
        <div className="absolute -right-32 top-0 w-96 h-96 rounded-full bg-papaya/5 blur-3xl pointer-events-none" aria-hidden />
        <div className="wrap relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="eyebrow mb-4"
          >
            Reservations
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-title text-sand-200 mb-4"
          >
            Reserve your <em className="italic text-papaya">table.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sand-200/60 max-w-md text-base"
          >
            Secure your spot in the tropics. We'll have everything ready for you.
          </motion.p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="section bg-jungle-950">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  /* Success state */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="card p-10 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
                      className="text-6xl mb-6"
                      aria-hidden
                    >
                      🌴
                    </motion.div>
                    <h2 className="font-serif text-3xl text-sand-200 mb-3">You're booked!</h2>
                    <p className="text-sand-200/55 mb-2 text-sm">
                      We've reserved a table for <strong className="text-sand-200">{form.guests} guests</strong> on{' '}
                      <strong className="text-sand-200">{form.date}</strong> at{' '}
                      <strong className="text-sand-200">{form.time}</strong>.
                    </p>
                    <p className="text-sand-200/40 text-xs mb-8">
                      A confirmation has been sent to {form.email}. This is a demo — no real booking was made.
                    </p>
                    <div className="flex gap-3 justify-center flex-wrap">
                      <Link to="/" className="btn-primary">Back to Home</Link>
                      <button
                        onClick={() => { setSubmitted(false); setStep(1); setForm({ name:'',email:'',phone:'',date:'',time:'',guests:'2',occasion:'',notes:'' }) }}
                        className="btn-secondary"
                      >
                        New Booking
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="card p-8 md:p-10">
                    {/* Step indicator */}
                    <div className="flex items-center gap-3 mb-8">
                      {[1, 2, 3].map(n => (
                        <div key={n} className="flex items-center gap-3">
                          <div className={[
                            'w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300',
                            step === n ? 'bg-papaya text-ink' :
                            step > n ? 'bg-lime/30 text-lime' :
                            'bg-jungle-900 text-sand-200/30 border border-sand-200/10',
                          ].join(' ')}>
                            {step > n ? '✓' : n}
                          </div>
                          {n < 3 && <div className={`flex-1 h-px w-10 ${step > n ? 'bg-lime/40' : 'bg-sand-200/10'}`} />}
                        </div>
                      ))}
                      <div className="ml-2 font-mono text-xs text-sand-200/40 uppercase tracking-wider">
                        {step === 1 ? 'Your Details' : step === 2 ? 'Date & Time' : 'Confirm'}
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} noValidate>
                      <AnimatePresence mode="wait">
                        {/* Step 1 */}
                        {step === 1 && (
                          <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.35 }}
                            className="space-y-5"
                          >
                            <h3 className="font-serif text-xl text-sand-200 mb-6">Tell us about you</h3>
                            <div>
                              <label htmlFor="res-name" className="label">Full Name *</label>
                              <input id="res-name" type="text" value={form.name} onChange={update('name')} placeholder="Priya Menon" required autoComplete="name" className="input" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                              <div>
                                <label htmlFor="res-email" className="label">Email *</label>
                                <input id="res-email" type="email" value={form.email} onChange={update('email')} placeholder="you@example.com" required autoComplete="email" className="input" />
                              </div>
                              <div>
                                <label htmlFor="res-phone" className="label">Phone *</label>
                                <input id="res-phone" type="tel" value={form.phone} onChange={update('phone')} placeholder="+91 98765 43210" required autoComplete="tel" inputMode="tel" className="input" />
                              </div>
                            </div>
                            <div className="pt-2">
                              <button
                                type="button"
                                onClick={() => setStep(2)}
                                disabled={!canProceed1}
                                className="btn-primary w-full justify-center py-4 disabled:opacity-40 disabled:pointer-events-none"
                              >
                                Continue →
                              </button>
                            </div>
                          </motion.div>
                        )}

                        {/* Step 2 */}
                        {step === 2 && (
                          <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.35 }}
                            className="space-y-5"
                          >
                            <h3 className="font-serif text-xl text-sand-200 mb-6">Pick your date & time</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                              <div>
                                <label htmlFor="res-date" className="label">Date *</label>
                                <input id="res-date" type="date" value={form.date} onChange={update('date')} min={today} required className="input" />
                              </div>
                              <div>
                                <label htmlFor="res-guests" className="label">Guests *</label>
                                <select id="res-guests" value={form.guests} onChange={update('guests')} className="input appearance-none">
                                  {[1,2,3,4,5,6,7,8,9,10].map(n => (
                                    <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
                                  ))}
                                  <option value="10+">10+ guests</option>
                                </select>
                              </div>
                            </div>
                            <div>
                              <label className="label mb-3">Preferred Time *</label>
                              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-48 overflow-y-auto no-scrollbar pr-1">
                                {TIMES.map(t => (
                                  <button
                                    key={t}
                                    type="button"
                                    onClick={() => setForm(f => ({ ...f, time: t }))}
                                    className={[
                                      'py-2 px-2 rounded-xl text-xs font-mono border transition-all duration-200',
                                      form.time === t
                                        ? 'bg-papaya text-ink border-papaya font-semibold'
                                        : 'border-sand-200/12 text-sand-200/55 hover:border-sand-200/30 hover:text-sand-200',
                                    ].join(' ')}
                                  >
                                    {t}
                                  </button>
                                ))}
                              </div>
                            </div>
                            <div>
                              <label htmlFor="res-occasion" className="label">Occasion</label>
                              <select id="res-occasion" value={form.occasion} onChange={update('occasion')} className="input appearance-none">
                                <option value="">Select (optional)</option>
                                {OCCASIONS.map(o => <option key={o} value={o}>{o}</option>)}
                              </select>
                            </div>
                            <div className="flex gap-3 pt-2">
                              <button type="button" onClick={() => setStep(1)} className="btn-secondary px-6 py-4">← Back</button>
                              <button
                                type="button"
                                onClick={() => setStep(3)}
                                disabled={!canProceed2}
                                className="btn-primary flex-1 justify-center py-4 disabled:opacity-40 disabled:pointer-events-none"
                              >
                                Continue →
                              </button>
                            </div>
                          </motion.div>
                        )}

                        {/* Step 3 */}
                        {step === 3 && (
                          <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.35 }}
                            className="space-y-5"
                          >
                            <h3 className="font-serif text-xl text-sand-200 mb-6">Review & confirm</h3>

                            {/* Summary card */}
                            <div className="bg-jungle-900 rounded-2xl p-5 border border-sand-200/10 space-y-3">
                              {[
                                { label: 'Name',   value: form.name },
                                { label: 'Email',  value: form.email },
                                { label: 'Phone',  value: form.phone },
                                { label: 'Date',   value: form.date },
                                { label: 'Time',   value: form.time },
                                { label: 'Guests', value: `${form.guests} guests` },
                                ...(form.occasion ? [{ label: 'Occasion', value: form.occasion }] : []),
                              ].map(({ label, value }) => (
                                <div key={label} className="flex justify-between text-sm gap-4">
                                  <span className="text-sand-200/40 font-mono text-xs tracking-wider uppercase">{label}</span>
                                  <span className="text-sand-200 font-medium">{value}</span>
                                </div>
                              ))}
                            </div>

                            <div>
                              <label htmlFor="res-notes" className="label">Special Requests</label>
                              <textarea
                                id="res-notes"
                                value={form.notes}
                                onChange={update('notes')}
                                placeholder="Dietary needs, birthday cake, seating preference…"
                                rows={3}
                                className="input resize-none"
                              />
                            </div>

                            <div className="flex gap-3 pt-2">
                              <button type="button" onClick={() => setStep(2)} className="btn-secondary px-6 py-4">← Back</button>
                              <button
                                type="submit"
                                disabled={loading}
                                className="btn-primary flex-1 justify-center py-4 disabled:opacity-50"
                              >
                                {loading ? (
                                  <span className="flex items-center gap-2">
                                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                                    </svg>
                                    Confirming…
                                  </span>
                                ) : 'Confirm Reservation 🌴'}
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Cafe photo */}
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-sand-200/10">
                <img
                  src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&q=80"
                  alt="Tropical Cafe interior"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Perks */}
              <div className="card p-6 space-y-4">
                <h3 className="font-serif text-lg text-sand-200 mb-1">What to expect</h3>
                {perks.map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <span className="text-lg flex-shrink-0" aria-hidden>{icon}</span>
                    <span className="text-sm text-sand-200/65">{text}</span>
                  </div>
                ))}
              </div>

              {/* Contact */}
              <div className="card p-6">
                <p className="text-sm text-sand-200/55 mb-3">Need help? Reach us directly:</p>
                <a
                  href={`tel:${CAFE.phone.replace(/\s/g,'')}`}
                  className="btn-secondary w-full justify-center py-3 text-sm"
                >
                  📞 {CAFE.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
