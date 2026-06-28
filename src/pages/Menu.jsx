import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../components/ui/SectionHeader'
import StarRating from '../components/ui/StarRating'
import { MENU_ITEMS, CATEGORIES } from '../data/index'

/* ─── Card ─── */
function MenuCard({ item, index }) {
  const [liked, setLiked] = useState(false)

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: [0.2, 0.7, 0.2, 1] }}
      className="card card-hover group relative flex flex-col"
      aria-label={item.name}
    >
      {/* Tag */}
      {item.tag && (
        <span className="absolute top-3 left-3 z-10 badge-papaya font-mono text-2xs tracking-wider">
          {item.tag}
        </span>
      )}

      {/* Favourite */}
      <button
        className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform duration-300"
        onClick={() => setLiked(v => !v)}
        aria-label={liked ? `Remove ${item.name} from favourites` : `Add ${item.name} to favourites`}
        aria-pressed={liked}
      >
        <span className={`text-sm transition-colors duration-300 ${liked ? 'text-papaya' : 'text-sand-200/50'}`}>
          {liked ? '♥' : '♡'}
        </span>
      </button>

      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-spring"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-3 mb-1.5">
          <h3 className="font-serif text-lg text-sand-200 leading-snug">{item.name}</h3>
          {/* Veg/Non-veg indicator */}
          <span
            className={`mt-1 w-3 h-3 flex-shrink-0 rounded-sm border-2 relative ${item.veg ? 'border-green-500' : 'border-red-500'}`}
            title={item.veg ? 'Vegetarian' : 'Non-vegetarian'}
            aria-label={item.veg ? 'Vegetarian' : 'Non-vegetarian'}
          >
            <span className={`absolute inset-1 rounded-full ${item.veg ? 'bg-green-500' : 'bg-red-500'}`} />
          </span>
        </div>
        <p className="text-xs text-sand-200/50 leading-relaxed mb-4 flex-1 line-clamp-2">{item.desc}</p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1.5">
            <StarRating value={item.rating} size="sm" />
            <span className="font-mono text-2xs text-sand-200/35">({item.rating})</span>
          </div>
          <span className="font-mono text-base font-semibold text-lime">₹{item.price}</span>
        </div>
      </div>
    </motion.article>
  )
}

/* ─── Page ─── */
export default function Menu() {
  const [active, setActive] = useState('all')
  const [search, setSearch] = useState('')
  const [sort, setSort]     = useState('default')

  useEffect(() => {
    document.title = 'Menu — The Tropical Cafe, Udupi'
  }, [])

  const filtered = useMemo(() => {
    let items = MENU_ITEMS

    if (active !== 'all') {
      items = items.filter(i => i.category === active)
    }

    if (search.trim()) {
      const q = search.toLowerCase()
      items = items.filter(i =>
        i.name.toLowerCase().includes(q) ||
        i.desc.toLowerCase().includes(q) ||
        i.category.toLowerCase().includes(q)
      )
    }

    if (sort === 'price-asc')  items = [...items].sort((a,b) => a.price - b.price)
    if (sort === 'price-desc') items = [...items].sort((a,b) => b.price - a.price)
    if (sort === 'rating')     items = [...items].sort((a,b) => b.rating - a.rating)

    return items
  }, [active, search, sort])

  return (
    <>
      {/* Page header */}
      <section
        className="relative pt-36 pb-20 bg-jungle-950 overflow-hidden"
        aria-labelledby="menu-page-heading"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-papaya/5 blur-3xl" />
          <div className="absolute left-0 bottom-0 w-64 h-64 rounded-full bg-lime/5 blur-3xl" />
        </div>
        <div className="wrap relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-4"
          >
            Our Menu
          </motion.span>
          <motion.h1
            id="menu-page-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-title text-sand-200 mb-4"
          >
            Crafted with <em className="italic text-papaya">care.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sand-200/60 max-w-md text-base leading-relaxed"
          >
            From sunrise breakfasts to late-night desserts — every item on our menu is made fresh, served with love.
          </motion.p>
        </div>
      </section>

      {/* Controls */}
      <div className="bg-jungle-950 border-b border-sand-200/8 sticky top-20 z-30">
        <div className="wrap py-4 flex flex-col sm:flex-row sm:items-center gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-xs">
            <label htmlFor="menu-search" className="sr-only">Search menu</label>
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sand-200/35 text-sm select-none" aria-hidden>🔍</span>
            <input
              id="menu-search"
              type="search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search dishes…"
              className="w-full bg-jungle-900 border border-sand-200/12 rounded-full pl-10 pr-4 py-2.5 text-sm text-sand-200 placeholder:text-sand-200/30 focus:outline-none focus:border-lime/50 transition-colors duration-300"
            />
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 ml-auto">
            <label htmlFor="menu-sort" className="font-mono text-2xs tracking-wider text-sand-200/40 uppercase">Sort</label>
            <select
              id="menu-sort"
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="bg-jungle-900 border border-sand-200/12 rounded-full px-4 py-2.5 text-sm text-sand-200 focus:outline-none focus:border-lime/50 transition-colors duration-300 appearance-none pr-8 cursor-pointer"
            >
              <option value="default">Featured</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Category pills */}
        <div className="wrap pb-4 overflow-x-auto no-scrollbar">
          <div className="flex gap-2 w-max sm:w-auto">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`pill-filter-dark whitespace-nowrap ${active === cat.id ? 'active' : ''}`}
                aria-pressed={active === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="section bg-jungle-950" aria-live="polite" aria-label="Menu items">
        <div className="wrap">
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-4xl mb-4" aria-hidden>🔍</p>
              <h2 className="font-serif text-2xl text-sand-200 mb-2">No items found</h2>
              <p className="text-sand-200/50 mb-6">Try a different search or category.</p>
              <button
                onClick={() => { setSearch(''); setActive('all') }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </motion.div>
          ) : (
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              <AnimatePresence mode="popLayout">
                {filtered.map((item, i) => (
                  <MenuCard key={item.id} item={item} index={i} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm bg-jungle-950 border-t border-sand-200/8">
        <div className="wrap text-center">
          <p className="text-sand-200/55 mb-6 text-base">
            Can't decide? Come in and let our team guide you.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/reservation" className="btn-primary">Reserve a Table</Link>
            <Link to="/contact" className="btn-secondary">Get Directions</Link>
          </div>
        </div>
      </section>
    </>
  )
}
