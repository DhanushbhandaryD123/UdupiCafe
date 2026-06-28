export default function SectionHeader({ eyebrow, heading, sub, light = false, center = false }) {
  return (
    <div className={`sec-head ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className={`eyebrow mb-4 ${center ? 'justify-center' : ''} ${light ? '!text-lime-dark before:!bg-lime-dark' : ''}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-title font-serif ${light ? 'text-ink' : 'text-sand-200'}`}>
        {heading}
      </h2>
      {sub && (
        <p className={`mt-4 text-base max-w-xl leading-relaxed ${light ? 'text-ink/60' : 'text-sand-200/60'} ${center ? 'mx-auto' : ''}`}>
          {sub}
        </p>
      )}
    </div>
  )
}
