// Real app screenshots for a product. Portrait shots sit in a row (the
// middle one raised when there are three); landscape shots go underneath.
function Shot({ shot, className = '' }) {
  const portrait = shot.height > shot.width
  return (
    <img
      src={shot.src}
      alt={shot.alt}
      width={shot.width}
      height={shot.height}
      loading="lazy"
      decoding="async"
      className={`block w-full h-auto border bg-base-surface shadow-[0_20px_40px_-24px_rgba(0,0,0,0.45)] ${
        portrait ? 'rounded-[1.25rem] sm:rounded-[1.75rem]' : 'rounded-xl sm:rounded-2xl'
      } ${className}`}
    />
  )
}

export default function Screenshots({ shots }) {
  const portraits = shots.filter((s) => s.height > s.width)
  const landscapes = shots.filter((s) => s.height <= s.width)
  const trio = portraits.length === 3

  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      {portraits.length > 0 && (
        <div className={`flex justify-center gap-3 sm:gap-4 ${trio ? 'items-center' : ''}`}>
          {portraits.map((shot, i) => (
            <div
              key={shot.src}
              className={portraits.length === 1 ? 'w-full max-w-[16rem]' : trio && i !== 1 ? 'w-[30%]' : 'w-[34%]'}
            >
              <Shot shot={shot} className={trio && i !== 1 ? 'opacity-95' : ''} />
            </div>
          ))}
        </div>
      )}
      {landscapes.map((shot) => (
        <Shot key={shot.src} shot={shot} />
      ))}
    </div>
  )
}
