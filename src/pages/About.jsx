import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionHeader from '../components/ui/SectionHeader'
import StarRating from '../components/ui/StarRating'
import { STATS, TIMELINE, WHY_US, CAFE } from '../data/index'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 30 },
  whileInView:{ opacity: 1, y: 0 },
  viewport:   { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] },
})

export default function About() {
  useEffect(() => {
    document.title = 'Our Story — The Tropical Cafe, Udupi'
  }, [])

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative pt-36 pb-20 bg-jungle-950 overflow-hidden" aria-labelledby="about-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -right-32 top-0 w-[500px] h-[500px] rounded-full bg-lime/5 blur-3xl" />
          <div className="absolute -left-16 bottom-0 w-80 h-80 rounded-full bg-papaya/5 blur-3xl" />
        </div>
        <div className="wrap relative z-10 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="eyebrow mb-4"
          >
            Our Story
          </motion.span>
          <motion.h1
            id="about-heading"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-title text-sand-200 mb-6"
          >
            A little patch of the<br />
            <em className="italic text-papaya">tropics in Udupi.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sand-200/65 max-w-xl text-lg leading-relaxed"
          >
            Born from a love of great food, genuine hospitality, and the belief that Udupi deserved a cafe that felt like more than just a meal stop.
          </motion.p>
        </div>
      </section>

      {/* ─── Photo strip ─── */}
      <section className="bg-jungle-950 pb-24 overflow-hidden">
        <div className="wrap">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 rounded-3xl md:rounded-4xl overflow-hidden border border-sand-200/8"
          >
            {[
              'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&q=80',
              'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80',
              'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
              'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=600&q=80',
            ].map((src, i) => (
              <div key={i} className="aspect-[3/4] overflow-hidden">
                <img
                  src={src}
                  alt={`Tropical cafe scene ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Story ─── */}
      <section className="section bg-jungle-900/40">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeUp(0)}>
              <span className="eyebrow mb-4">The Founding</span>
              <h2 className="font-serif text-title text-sand-200 mb-6">
                Built for <em className="italic text-papaya">gossip,</em><br />
                meet-ups & dates.
              </h2>
              <div className="space-y-4 text-sand-200/65 text-base leading-relaxed">
                <p>
                  The Tropical Cafe started as a simple idea: Udupi has incredible food culture, but it lacked a space that felt curated, comfortable, and genuinely inviting.
                </p>
                <p>
                  We opened our doors in 2023 in Brahmagiri with a hand-crafted menu of continental breakfasts, Asian bowls, and indulgent desserts — all priced for real people, not just food critics.
                </p>
                <p>
                  Today, we're the spot where students come to study, couples linger over coffee, and families arrive for Sunday breakfasts. And that's exactly what we set out to create.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <StarRating value={4.5} size="md" />
                  <span className="text-sm text-sand-200/50">4.5★ on Google</span>
                </div>
                <span className="w-px h-4 bg-sand-200/20" />
                <span className="text-sm text-sand-200/50">Est. 2023</span>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.15)} className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-sand-200/10">
                <img
                  src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&q=80"
                  alt="Inside the Tropical Cafe"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl px-5 py-4 hidden md:block">
                <p className="font-serif text-3xl text-sand-200">600<span className="text-papaya">+</span></p>
                <p className="font-mono text-xs text-sand-200/45 uppercase tracking-widest mt-0.5">Happy reviews</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="section bg-jungle-950">
        <div className="wrap">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div key={stat.label} {...fadeUp(i * 0.1)} className="text-center">
                <div className="font-serif text-5xl text-sand-200 mb-2">
                  {stat.value}<span className="text-papaya">{stat.suffix}</span>
                </div>
                <p className="font-mono text-xs tracking-widest text-sand-200/45 uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Timeline ─── */}
      <section className="section bg-jungle-900/40" aria-labelledby="timeline-heading">
        <div className="wrap">
          <motion.div {...fadeUp(0)} className="mb-14 md:mb-20">
            <SectionHeader
              eyebrow="Our Journey"
              heading={<>How we got <em className="italic text-papaya">here</em></>}
            />
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-sand-200/10 -translate-x-1/2 hidden md:block" aria-hidden />

            <div className="space-y-12 md:space-y-0">
              {TIMELINE.map((item, i) => {
                const isEven = i % 2 === 0
                return (
                  <motion.div
                    key={i}
                    {...fadeUp(i * 0.1)}
                    className={`relative flex md:grid md:grid-cols-2 gap-8 md:gap-16 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}
                  >
                    {/* Content */}
                    <div className={`${isEven ? 'md:text-right md:pr-12' : 'md:pl-12 md:col-start-2'}`}>
                      <span className="font-mono text-xs tracking-widest text-papaya uppercase mb-2 block">{item.year}</span>
                      <h3 className="font-serif text-2xl text-sand-200 mb-3">{item.title}</h3>
                      <p className="text-sand-200/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>

                    {/* Dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-papaya ring-4 ring-jungle-900" />
                    </div>

                    {/* Empty cell for alternating */}
                    {isEven && <div className="hidden md:block" />}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="section bg-jungle-950" aria-labelledby="values-heading">
        <div className="wrap">
          <motion.div {...fadeUp(0)} className="mb-14 md:mb-20 text-center">
            <SectionHeader
              eyebrow="What We Stand For"
              heading={<>Our <em className="italic text-papaya">values</em></>}
              center
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {WHY_US.slice(0, 3).map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(i * 0.1)}
                className="card p-8 hover:border-lime/25 transition-all duration-500 text-center"
              >
                <div className="text-4xl mb-5" aria-hidden>{item.icon}</div>
                <h3 className="font-serif text-xl text-sand-200 mb-3">{item.title}</h3>
                <p className="text-sm text-sand-200/55 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Hours & Info ─── */}
      <section className="section bg-sand-100" aria-labelledby="hours-heading">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent" />
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <motion.div {...fadeUp(0)}>
              <span className="eyebrow-light mb-4 flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-lime-dark">
                <span className="block w-8 h-px bg-lime-dark flex-shrink-0" />
                Visit Us
              </span>
              <h2 id="hours-heading" className="font-serif text-title text-ink mb-6">
                Come find <em className="italic text-papaya-dark">us</em>
              </h2>
              <div className="space-y-5">
                {[
                  { icon: '📍', label: 'Address', value: CAFE.address },
                  { icon: '📞', label: 'Phone',   value: CAFE.phone, href: `tel:${CAFE.phone.replace(/\s/g,'')}` },
                  { icon: '✉️', label: 'Email',   value: CAFE.email, href: `mailto:${CAFE.email}` },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-ink/8 flex items-center justify-center flex-shrink-0 text-base">
                      {icon}
                    </div>
                    <div>
                      <p className="font-mono text-2xs tracking-widest text-ink/40 uppercase mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-ink hover:text-papaya-dark transition-colors duration-300 text-sm">
                          {value}
                        </a>
                      ) : (
                        <p className="text-ink text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.15)}>
              <h3 className="font-serif text-2xl text-ink mb-6">Opening Hours</h3>
              <div className="space-y-0 divide-y divide-ink/8">
                {CAFE.hours.map(({ day, open, close }) => {
                  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })
                  const isToday = day === today
                  return (
                    <div
                      key={day}
                      className={`flex items-center justify-between py-3 ${isToday ? 'text-papaya-dark font-semibold' : 'text-ink/70'}`}
                    >
                      <span className="text-sm">
                        {isToday && <span className="mr-2 text-xs">●</span>}
                        {day}
                      </span>
                      <span className="font-mono text-xs">{open} – {close}</span>
                    </div>
                  )
                })}
              </div>

              <div className="mt-8">
                <Link to="/reservation" className="btn-dark w-full justify-center py-4">
                  Reserve Your Table
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section bg-jungle-950">
        <div className="wrap">
          <motion.div
            {...fadeUp(0)}
            className="relative bg-papaya rounded-4xl md:rounded-5xl px-8 md:px-16 py-16 md:py-20 overflow-hidden text-center"
          >
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-papaya-dark/30" aria-hidden />
            <div className="relative z-10">
              <h2 className="font-serif text-4xl md:text-5xl text-ink mb-4">
                Come say <em className="italic">hi</em> —
              </h2>
              <p className="text-ink/65 max-w-sm mx-auto mb-8">
                The tropics are open till 10. We'd love to see you.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Link to="/reservation" className="btn-dark py-4 px-10">Book a Table</Link>
                <Link to="/contact" className="btn text-base py-4 px-8 bg-ink/10 text-ink border border-ink/20 hover:bg-ink/20 rounded-full">
                  Get Directions
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
