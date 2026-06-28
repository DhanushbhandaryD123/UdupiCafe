import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import useReveal from '../hooks/useReveal'
import SectionHeader from '../components/ui/SectionHeader'
import StarRating from '../components/ui/StarRating'
import { BEST_SELLERS, TESTIMONIALS, GALLERY, WHY_US, STATS } from '../data/index'

/* ─── Motion helpers ─── */
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 40 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.2, 0.7, 0.2, 1] },
})

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
}
const staggerChild = {
  initial:  { opacity: 0, y: 30 },
  animate:  { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } },
}

/* ─── Hero ─── */
function Hero() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative min-h-screen flex items-end overflow-hidden bg-jungle-950"
      aria-label="Hero"
    >
      {/* Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1800&q=80"
          alt=""
          aria-hidden
          className="w-full h-full object-cover kenburns"
          loading="eager"
        />
        <div className="absolute inset-0 overlay-hero" />
      </motion.div>

      {/* Floating badge */}
      <motion.div
        className="absolute right-[6vw] top-[18vh] z-10 hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        aria-hidden
      >
        <svg viewBox="0 0 160 160" width="140" height="140">
          <defs>
            <path id="circle-text" d="M 80,80 m -58,0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0" />
          </defs>
          <circle cx="80" cy="80" r="72" fill="#FF7A48" opacity=".12" />
          <circle cx="80" cy="80" r="62" fill="none" stroke="#FF7A48" strokeWidth="1" opacity=".5" />
          <circle cx="80" cy="80" r="52" fill="#0F2E24" />
          <text fontFamily="Spline Sans Mono, monospace" fontSize="11" letterSpacing="3.5" fill="#F4E9D4" opacity=".9">
            <textPath href="#circle-text">THE TROPICAL CAFE · UDUPI · GOSSIP · DATES ·</textPath>
          </text>
          <text x="80" y="88" textAnchor="middle" fontSize="24">🌴</text>
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 wrap w-full pb-20 md:pb-28">
        <motion.span {...fadeUp(0.2)} className="eyebrow mb-5">
          Brahmagiri, Udupi
        </motion.span>

        <motion.h1
          {...fadeUp(0.35)}
          className="text-hero font-serif text-sand-200 leading-[0.95] mb-8 max-w-5xl"
        >
          Where every sip<br />
          tastes like the{' '}
          <em className="text-papaya italic">tropics.</em>
        </motion.h1>

        <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 max-w-5xl">
          <p className="text-base md:text-lg text-sand-200/75 max-w-md leading-relaxed">
            Continental breakfasts, Asian bowls, artisan coffees & indulgent desserts — in a lush tropical haven you'll never want to leave.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link to="/menu" className="btn-primary">Explore Menu</Link>
            <Link to="/reservation" className="btn-secondary">Reserve a Table</Link>
          </div>
        </motion.div>

        {/* Trust bar */}
        <motion.div {...fadeUp(0.65)} className="mt-12 flex items-center gap-6 flex-wrap">
          <div className="flex items-center gap-2">
            <StarRating value={4.5} size="md" />
            <span className="font-mono text-sm text-sand-200/60">4.5 · 600+ reviews</span>
          </div>
          <span className="w-px h-4 bg-sand-200/20 hidden sm:block" />
          <span className="text-sm text-sand-200/55">Open today · 8 AM – 10 PM</span>
          <span className="w-px h-4 bg-sand-200/20 hidden sm:block" />
          <span className="text-sm text-sand-200/55">📍 Brahmagiri, Udupi</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2" aria-hidden>
        <span className="font-mono text-2xs tracking-widest text-sand-200/40 uppercase">Scroll</span>
        <div className="relative w-px h-10 bg-sand-200/20 overflow-hidden rounded-full">
          <motion.div
            className="absolute top-0 w-full bg-sand-200/60 rounded-full"
            animate={{ height: ['30%', '30%'], top: ['0%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </section>
  )
}

/* ─── Marquee Strip ─── */
function MarqueeStrip() {
  const items = [
    'English Breakfast','Cold Coffee','Choco Lava Cake',
    'Asian Bowls','Truffle Pizza','Mango Cheesecake',
    'Tiramisu','Flat White','Avocado Toast',
  ]
  const doubled = [...items, ...items]

  return (
    <div className="py-4 bg-papaya overflow-hidden" aria-hidden>
      <div className="flex whitespace-nowrap marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="font-serif italic text-lg text-ink px-6">{item}</span>
            <span className="font-mono text-xs text-ink/60">★</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ─── Menu Card ─── */
function MenuCard({ item }) {
  const [liked, setLiked] = useState(false)

  return (
    <motion.article
      variants={staggerChild}
      className="card card-hover group relative"
      aria-label={item.name}
    >
      {item.tag && (
        <span className="absolute top-3 left-3 z-10 badge-papaya font-mono text-2xs tracking-wider">
          {item.tag}
        </span>
      )}
      <button
        className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full glass flex items-center justify-center transition-all duration-300 hover:scale-110"
        onClick={() => setLiked(v => !v)}
        aria-label={liked ? `Remove ${item.name} from favourites` : `Add ${item.name} to favourites`}
        aria-pressed={liked}
      >
        <span className={`text-base transition-all duration-300 ${liked ? 'text-papaya scale-125' : 'text-sand-200/50'}`}>
          {liked ? '♥' : '♡'}
        </span>
      </button>
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-spring group-hover:scale-110"
        />
      </div>
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-serif text-xl text-sand-200 leading-snug">{item.name}</h3>
          <div className={`w-3 h-3 mt-1.5 flex-shrink-0 rounded-sm border-2 ${item.veg ? 'border-green-500' : 'border-red-500'}`}>
            <div className={`w-1.5 h-1.5 m-auto mt-0.5 rounded-full ${item.veg ? 'bg-green-500' : 'bg-red-500'}`} />
          </div>
        </div>
        <p className="text-sm text-sand-200/55 leading-relaxed mb-4 line-clamp-2">{item.desc}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <StarRating value={item.rating} />
            <span className="font-mono text-xs text-sand-200/40">({item.rating})</span>
          </div>
          <span className="font-mono text-lg font-semibold text-lime">₹{item.price}</span>
        </div>
      </div>
    </motion.article>
  )
}

/* ─── Best Sellers ─── */
function BestSellers() {
  useReveal()

  return (
    <section className="section bg-jungle-950" aria-labelledby="bestsellers-heading">
      <div className="wrap">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 rv">
          <SectionHeader
            eyebrow="Crowd Favourites"
            heading={<>Best <em className="italic text-papaya">Sellers</em></>}
            sub="The dishes our regulars keep coming back for. Every single time."
          />
          <Link to="/menu" className="btn-secondary flex-shrink-0 hidden sm:flex self-end mb-2">
            Full Menu →
          </Link>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
        >
          {BEST_SELLERS.map(item => <MenuCard key={item.id} item={item} />)}
        </motion.div>

        <div className="mt-10 text-center sm:hidden">
          <Link to="/menu" className="btn-primary">View Full Menu</Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Why Choose Us ─── */
function WhyUs() {
  return (
    <section className="section bg-jungle-900/40 relative overflow-hidden" aria-labelledby="why-heading">
      <div className="absolute -right-32 top-0 w-96 h-96 rounded-full bg-papaya/5 blur-3xl pointer-events-none" aria-hidden />
      <div className="wrap relative z-10">
        <div className="text-center mb-14 md:mb-20">
          <SectionHeader
            eyebrow="Why Us"
            heading={<>Why <em className="italic text-papaya">Tropical Cafe?</em></>}
            center
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="card p-6 md:p-8 hover:border-lime/25 transition-all duration-500"
            >
              <div className="text-3xl mb-4" aria-hidden>{item.icon}</div>
              <h3 className="font-serif text-xl text-sand-200 mb-3">{item.title}</h3>
              <p className="text-sm text-sand-200/55 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Gallery ─── */
function Gallery() {
  return (
    <section className="section-sm bg-jungle-950 overflow-hidden" aria-labelledby="gallery-heading">
      <div className="wrap mb-10">
        <SectionHeader
          eyebrow="Gallery"
          heading={<>Inside the <em className="italic text-papaya">Tropics</em></>}
        />
      </div>
      <div className="wrap">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[220px]">
          {GALLERY.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className={[
                'rounded-2xl md:rounded-3xl overflow-hidden border border-sand-200/8',
                i === 0 ? 'col-span-2 row-span-2' : '',
              ].join(' ')}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Testimonials ─── */
function Testimonials() {
  const featured = TESTIMONIALS.slice(0, 3)

  return (
    <section className="section bg-sand-100" aria-labelledby="reviews-heading">
      <div className="wrap">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Reviews"
            heading={<>What our guests <em className="italic text-papaya-dark">say</em></>}
            light
          />
          <div className="flex items-center gap-3 bg-white border border-ink/10 rounded-2xl px-5 py-3 shadow-soft flex-shrink-0 self-end mb-1">
            <span className="text-2xl font-serif text-ink">4.5</span>
            <div>
              <StarRating value={4.5} size="sm" />
              <p className="text-xs text-ink/50 mt-0.5">600+ Google Reviews</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((review, i) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-white border border-ink/8 rounded-3xl p-7 relative shadow-soft"
            >
              <span className="absolute top-4 left-6 font-serif text-5xl text-papaya/20 leading-none select-none" aria-hidden>"</span>
              <div className="pt-4">
                <StarRating value={review.stars} />
                <p className="mt-4 text-sm text-ink/70 leading-relaxed italic">{review.text}</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-papaya/15 flex items-center justify-center font-sans font-semibold text-sm text-papaya">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{review.name}</p>
                    <p className="text-xs text-ink/45">{review.type}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Stats ─── */
function Stats() {
  return (
    <section className="section bg-jungle-900/40">
      <div className="wrap">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-serif text-5xl md:text-6xl text-sand-200 mb-2">
                {stat.value}<span className="text-papaya">{stat.suffix}</span>
              </div>
              <p className="font-mono text-xs tracking-widest text-sand-200/45 uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ─── */
function CTABand() {
  return (
    <section className="section bg-jungle-950">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="relative bg-papaya rounded-4xl md:rounded-5xl px-8 md:px-16 py-16 md:py-20 overflow-hidden"
        >
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-papaya-dark/30 pointer-events-none" aria-hidden />
          <div className="absolute -left-8 -bottom-12 w-48 h-48 rounded-full bg-ink/10 pointer-events-none" aria-hidden />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight mb-3">
                Craving the<br />
                <em className="italic">tropics already?</em>
              </h2>
              <p className="text-ink/65 max-w-sm">
                Come in, sit back, and let us take care of the rest. The table is ready.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link to="/reservation" className="btn-dark text-base py-4 px-10">Book a Table</Link>
              <Link to="/contact" className="btn text-base py-4 px-8 bg-ink/10 text-ink border border-ink/20 hover:bg-ink/20 rounded-full">
                Get Directions
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Newsletter ─── */
function Newsletter() {
  const [email, setEmail] = useState('')
  const [subbed, setSubbed] = useState(false)

  function handleSub(e) {
    e.preventDefault()
    if (!email.trim()) return
    setSubbed(true)
    setEmail('')
  }

  return (
    <section className="section-sm bg-jungle-950 border-t border-sand-200/8">
      <div className="wrap-sm text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow justify-center mb-4">Newsletter</span>
          <h2 className="font-serif text-3xl md:text-4xl text-sand-200 mb-3">Stay in the loop</h2>
          <p className="text-sand-200/55 mb-8 max-w-md mx-auto">
            New dishes, seasonal specials, and exclusive offers — delivered to your inbox.
          </p>
          <AnimatePresence mode="wait">
            {subbed ? (
              <motion.p key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-lime font-medium text-lg">
                🌴 You're in! Welcome to the Tropical family.
              </motion.p>
            ) : (
              <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSub} className="flex gap-3 max-w-md mx-auto">
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="input flex-1"
                />
                <button type="submit" className="btn-primary flex-shrink-0 px-6">Subscribe</button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Page ─── */
export default function Home() {
  useEffect(() => {
    document.title = 'The Tropical Cafe — Udupi | Continental, Asian & Desserts'
  }, [])

  return (
    <>
      <Hero />
      <MarqueeStrip />
      <BestSellers />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <Stats />
      <CTABand />
      <Newsletter />
    </>
  )
}
