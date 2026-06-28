/* ─── Cafe Config ─── */
export const CAFE = {
  name:       'The Tropical Cafe',
  tagline:    'A taste of the tropics',
  address:    'Near Brahmagiri, Udupi, Karnataka 576103',
  phone:      '+91 98765 43210',
  email:      'hello@tropicalcafe.in',
  mapEmbed:   'https://maps.google.com/maps?q=brahmagiri+udupi&output=embed',
  rating:     4.5,
  reviews:    600,
  instagram:  'https://instagram.com',
  facebook:   'https://facebook.com',
  zomato:     'https://zomato.com',
  swiggy:     'https://swiggy.com',
  founded:    2023,
  hours: [
    { day: 'Monday',    open: '8:00 AM', close: '10:00 PM' },
    { day: 'Tuesday',   open: '8:00 AM', close: '10:00 PM' },
    { day: 'Wednesday', open: '8:00 AM', close: '10:00 PM' },
    { day: 'Thursday',  open: '8:00 AM', close: '10:00 PM' },
    { day: 'Friday',    open: '8:00 AM', close: '11:00 PM' },
    { day: 'Saturday',  open: '8:00 AM', close: '11:00 PM' },
    { day: 'Sunday',    open: '9:00 AM', close: '10:00 PM' },
  ],
}

/* ─── Menu Categories ─── */
export const CATEGORIES = [
  { id: 'all',        label: 'All Items' },
  { id: 'breakfast',  label: 'Breakfast' },
  { id: 'asian',      label: 'Asian' },
  { id: 'mains',      label: 'Mains' },
  { id: 'coolers',    label: 'Coolers' },
  { id: 'desserts',   label: 'Desserts' },
  { id: 'coffee',     label: 'Coffee' },
]

/* ─── Menu Items ─── */
export const MENU_ITEMS = [
  /* BREAKFAST */
  {
    id: 1, category: 'breakfast', name: 'English Breakfast',
    desc: 'Two eggs, sausages, baked beans, toast & grilled tomato',
    price: 249, veg: false, tag: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=80',
    rating: 4.8, popular: true,
  },
  {
    id: 2, category: 'breakfast', name: 'Avocado Toast',
    desc: 'Smashed avocado on sourdough with poached egg & micro herbs',
    price: 199, veg: true, tag: 'Trending',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=600&q=80',
    rating: 4.6, popular: true,
  },
  {
    id: 3, category: 'breakfast', name: 'Pancake Stack',
    desc: 'Buttermilk pancakes, maple syrup, whipped cream & berries',
    price: 179, veg: true, tag: null,
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80',
    rating: 4.5, popular: false,
  },
  {
    id: 4, category: 'breakfast', name: 'Tropical Oats Bowl',
    desc: 'Overnight oats with mango, coconut flakes & passion fruit',
    price: 159, veg: true, tag: 'New',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80',
    rating: 4.4, popular: false,
  },

  /* ASIAN */
  {
    id: 5, category: 'asian', name: 'Chicken Schnitzel Bowl',
    desc: 'Crispy schnitzel over jasmine rice, pickled veg & sesame drizzle',
    price: 279, veg: false, tag: 'Must Try',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
    rating: 4.9, popular: true,
  },
  {
    id: 6, category: 'asian', name: 'Teriyaki Tofu Bowl',
    desc: 'Glazed tofu, edamame, avocado & brown rice with teriyaki',
    price: 229, veg: true, tag: null,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80',
    rating: 4.5, popular: false,
  },
  {
    id: 7, category: 'asian', name: 'Thai Green Curry',
    desc: 'Fragrant coconut curry with jasmine rice & lime',
    price: 259, veg: true, tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80',
    rating: 4.7, popular: true,
  },
  {
    id: 8, category: 'asian', name: 'Paneer Noodles',
    desc: 'Wok-tossed rice noodles, paneer, crisp veg & chilli oil',
    price: 219, veg: true, tag: null,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80',
    rating: 4.4, popular: false,
  },

  /* MAINS */
  {
    id: 9, category: 'mains', name: 'Truffle Mushroom Pizza',
    desc: 'Truffle cream base, wild mushrooms, fontina & fresh thyme',
    price: 349, veg: true, tag: 'Chef\'s Pick',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
    rating: 4.8, popular: true,
  },
  {
    id: 10, category: 'mains', name: 'Grilled Chicken Wrap',
    desc: 'Chargrilled chicken, sriracha slaw, avocado in a warm tortilla',
    price: 219, veg: false, tag: null,
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80',
    rating: 4.5, popular: false,
  },
  {
    id: 11, category: 'mains', name: 'Pesto Pasta',
    desc: 'Al dente penne, basil pesto, cherry tomatoes & parmesan',
    price: 239, veg: true, tag: null,
    image: 'https://images.unsplash.com/photo-1551183053-bf91798d792c?w=600&q=80',
    rating: 4.4, popular: false,
  },

  /* COOLERS */
  {
    id: 12, category: 'coolers', name: 'Cold Coffee',
    desc: 'Signature cold brew, whole milk, vanilla, crushed ice',
    price: 149, veg: true, tag: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',
    rating: 4.9, popular: true,
  },
  {
    id: 13, category: 'coolers', name: 'Mango Lassi',
    desc: 'Thick Alphonso mango blended with chilled yogurt & cardamom',
    price: 129, veg: true, tag: 'Seasonal',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80',
    rating: 4.7, popular: true,
  },
  {
    id: 14, category: 'coolers', name: 'Tropical Iced Tea',
    desc: 'Passionfruit, hibiscus, lemon & fresh mint over ice',
    price: 119, veg: true, tag: 'New',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80',
    rating: 4.5, popular: false,
  },

  /* COFFEE */
  {
    id: 15, category: 'coffee', name: 'Signature Flat White',
    desc: 'Double ristretto, microfoam, latte art — silky perfection',
    price: 139, veg: true, tag: null,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
    rating: 4.8, popular: true,
  },
  {
    id: 16, category: 'coffee', name: 'Dalgona Caramel',
    desc: 'Whipped coffee cream, caramel drizzle over chilled oat milk',
    price: 159, veg: true, tag: 'Trending',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
    rating: 4.7, popular: true,
  },

  /* DESSERTS */
  {
    id: 17, category: 'desserts', name: 'Choco Lava Cake',
    desc: 'Warm dark chocolate fondant, vanilla bean ice cream',
    price: 179, veg: true, tag: 'Sweet Ending',
    image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=600&q=80',
    rating: 4.9, popular: true,
  },
  {
    id: 18, category: 'desserts', name: 'Mango Cheesecake',
    desc: 'Alphonso mango compote over New York style cream cheese',
    price: 169, veg: true, tag: 'Seasonal',
    image: 'https://images.unsplash.com/photo-1578775887804-699de7086ff9?w=600&q=80',
    rating: 4.7, popular: false,
  },
  {
    id: 19, category: 'desserts', name: 'Tiramisu',
    desc: 'Espresso-soaked ladyfingers, mascarpone, cocoa dust',
    price: 189, veg: true, tag: null,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80',
    rating: 4.8, popular: true,
  },
  {
    id: 20, category: 'desserts', name: 'Coconut Panna Cotta',
    desc: 'Silky coconut cream set, mango coulis & caramel coral',
    price: 159, veg: true, tag: 'New',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80',
    rating: 4.5, popular: false,
  },
]

/* ─── Best Sellers (for Home) ─── */
export const BEST_SELLERS = MENU_ITEMS.filter(i => i.popular).slice(0, 6)

/* ─── Testimonials ─── */
export const TESTIMONIALS = [
  {
    id: 1, name: 'Priya Menon', type: 'Local Guide · Google',
    text: 'Honestly one of the best cafes in Udupi. The cold coffee is absolutely divine and the English breakfast keeps me coming back every weekend. The ambiance is so peaceful.',
    stars: 5, avatar: 'P',
  },
  {
    id: 2, name: 'Rohan D\'Souza', type: 'Verified Diner',
    text: 'Perfect spot for a long catch-up with friends. The truffle mushroom pizza was outstanding — thin crust, beautifully topped. Staff were warm and attentive throughout.',
    stars: 5, avatar: 'R',
  },
  {
    id: 3, name: 'Ananya Shetty', type: 'Food Blogger',
    text: 'The choco lava cake is sinfully good. Came for dessert, stayed for coffee and ended up ordering an avocado toast too. This place has serious talent in the kitchen.',
    stars: 5, avatar: 'A',
  },
  {
    id: 4, name: 'Kiran Rao', type: 'Regular',
    text: 'My go-to study spot. Fast WiFi, excellent cold brew, and a relaxed tropical vibe that makes you forget time. The mango lassi in summer is everything.',
    stars: 5, avatar: 'K',
  },
  {
    id: 5, name: 'Shreya Nair', type: 'Date Night',
    text: 'Brought my partner here for an anniversary dinner. The ambiance was intimate and beautiful. The Thai green curry was fragrant and perfectly spiced. Highly recommend!',
    stars: 5, avatar: 'S',
  },
  {
    id: 6, name: 'Aditya Kumar', type: 'Verified Diner',
    text: 'Great value for money! The portions are generous and the quality is consistent. Love the paneer noodles — they have the perfect balance of spice and flavor.',
    stars: 4, avatar: 'A',
  },
]

/* ─── Gallery images ─── */
export const GALLERY = [
  { id: 1, src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80', alt: 'Artisan coffee pour', span: 'col-span-2 row-span-2' },
  { id: 2, src: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&q=80', alt: 'Tropical cafe interior' },
  { id: 3, src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80', alt: 'Cafe seating' },
  { id: 4, src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80', alt: 'Fresh food bowl' },
  { id: 5, src: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&q=80', alt: 'Dessert plating' },
  { id: 6, src: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=80', alt: 'English breakfast spread' },
]

/* ─── Why Choose Us ─── */
export const WHY_US = [
  {
    icon: '🌿',
    title: 'Farm-Fresh Ingredients',
    desc: 'Every item on our menu uses locally sourced, seasonal produce. No frozen shortcuts — ever.',
  },
  {
    icon: '☕',
    title: 'Artisan Coffee',
    desc: 'Single-origin beans, precision-brewed by our trained baristas who treat coffee as craft.',
  },
  {
    icon: '🌴',
    title: 'Tropical Ambience',
    desc: 'Step into a lush, peaceful haven that feels worlds away from the city\'s hustle.',
  },
  {
    icon: '🤝',
    title: 'Priced for Everyone',
    desc: 'Premium quality doesn\'t have to mean premium prices. Great food should be accessible.',
  },
  {
    icon: '⚡',
    title: 'Quick & Consistent',
    desc: 'Fast service without sacrificing quality. Your food arrives hot, fresh, and beautifully presented.',
  },
  {
    icon: '🎨',
    title: 'Instagram-Worthy',
    desc: 'Every dish is plated with care. We believe food should delight the eyes before the palate.',
  },
]

/* ─── Stats ─── */
export const STATS = [
  { value: '4.5', suffix: '★', label: 'Google Rating' },
  { value: '600', suffix: '+', label: 'Happy Reviews' },
  { value: '3',   suffix: '+', label: 'Years in Udupi' },
  { value: '40',  suffix: '+', label: 'Menu Items' },
]

/* ─── About Timeline ─── */
export const TIMELINE = [
  {
    year: '2023',
    title: 'The Beginning',
    desc: 'Tropical Cafe opened its doors in Brahmagiri with a simple mission — to bring café culture to Udupi in a way that felt genuine, warm, and utterly tropical.',
  },
  {
    year: '2023',
    title: 'Community Love',
    desc: 'Within months, we became the spot for gossip, meet-ups, dates, and long study sessions. Our Google rating hit 4.5★ with over 200 reviews.',
  },
  {
    year: '2024',
    title: 'Menu Expansion',
    desc: 'We doubled our menu, introduced the Asian bowl series, and launched our signature cold coffee that now has its own cult following.',
  },
  {
    year: '2025',
    title: 'Growing Stronger',
    desc: 'With 600+ Google reviews, catering partnerships and a loyal morning crew — Tropical Cafe has become a beloved part of Udupi\'s food culture.',
  },
]

/* ─── FAQ ─── */
export const FAQ = [
  {
    q: 'Do you accept reservations?',
    a: 'Yes! You can reserve a table online through our Reservation page or give us a call. Walk-ins are always welcome based on availability.',
  },
  {
    q: 'Is there free parking?',
    a: 'Yes, we have complimentary parking for up to 20 vehicles right outside the cafe.',
  },
  {
    q: 'Do you have vegan options?',
    a: 'Absolutely! We have a wide selection of vegan-friendly dishes, clearly marked on our menu. Ask our staff for personalized recommendations.',
  },
  {
    q: 'Can I host a private event?',
    a: 'We do host private events for groups of 15–40 people. Contact us at hello@tropicalcafe.in to discuss your requirements.',
  },
  {
    q: 'Do you offer delivery?',
    a: 'Yes, we partner with Zomato and Swiggy for delivery within a 5 km radius of the cafe.',
  },
]
