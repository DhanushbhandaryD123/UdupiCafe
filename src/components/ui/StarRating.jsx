export default function StarRating({ value = 5, max = 5, size = 'sm' }) {
  const sizeClass = size === 'lg' ? 'text-xl' : size === 'md' ? 'text-base' : 'text-sm'
  return (
    <span className={`inline-flex gap-0.5 ${sizeClass}`} aria-label={`${value} out of ${max} stars`}>
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className={i < Math.floor(value) ? 'text-amber-400' : 'text-sand-200/20'}>
          ★
        </span>
      ))}
    </span>
  )
}
