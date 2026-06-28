# 🌴 The Tropical Cafe — Udupi

Premium cafe website built with **React + Vite + React Router**.
Design system: jungle green / sand / papaya / lime · Fraunces + Albert Sans + Spline Sans Mono.

## Pages
| Route | Page |
|---|---|
| `/` | Home — full-screen video hero, scroll-driven "The Making" story, signature dishes, gallery, menu preview, reviews |
| `/about` | About Us — Google-style business profile card (rating, hours, action buttons), story, values, stats |
| `/menu` | Full menu with category filter pills (All / Breakfast / Asian / Pizza & Mains / Coolers / Desserts) |
| `/contact` | Visit Us — info, live embedded Google Map, reserve-a-table form |

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Features
- Fully responsive (desktop / tablet / mobile, hamburger menu < 900px)
- Scroll-reveal animations + sticky scroll cooking story + hero parallax
- Video hero with automatic Ken Burns image fallback if a video fails to load
- `prefers-reduced-motion` respected
- Mobile share button uses the native Web Share API

## Before going live
- Replace stock Unsplash images / Mixkit videos in `src/pages/*.jsx` with the cafe's own photos & reels
- Confirm real menu items + prices (current ones are indicative)
- Add the cafe's real phone number in `About.jsx` (`tel:` link)
- Wire the reservation form to WhatsApp / email

— Crafted by METRIKA
