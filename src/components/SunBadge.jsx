export default function SunBadge({ className = 'sun-badge' }) {
  return (
    <svg className={className} viewBox="0 0 160 160" aria-hidden="true">
      <defs>
        <path id="circ" d="M80,80 m-58,0 a58,58 0 1,1 116,0 a58,58 0 1,1 -116,0" />
      </defs>
      <circle cx="80" cy="80" r="78" fill="#FF7A48" />
      <circle cx="80" cy="80" r="34" fill="#0A211A" />
      <text fill="#0A211A" fontFamily="'Spline Sans Mono',monospace" fontSize="12.5" letterSpacing="3">
        <textPath href="#circ">THE TROPICAL CAFE · UDUPI · GOSSIP · MEET-UPS · DATES ·</textPath>
      </text>
      <text x="80" y="87" textAnchor="middle" fill="#F4E9D4" fontSize="20">🌴</text>
    </svg>
  )
}
