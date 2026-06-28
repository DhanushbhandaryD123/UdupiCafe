const items = ['English Breakfast', 'Chicken Schnitzel', 'Choco Lava Cake', 'Asian Meal Combos', 'Cold Coffee', 'Paneer Noodles']

export default function Marquee() {
  const row = items.map((t, i) => (
    <span key={i}>{t}<b> ★ </b></span>
  ))
  return (
    <div className="marquee">
      <div className="marquee-track">{row}{row}</div>
    </div>
  )
}
