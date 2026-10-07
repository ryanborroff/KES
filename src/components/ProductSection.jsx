import { ProductIcon } from './Icons'
import Vignette from './Vignettes'
import Screenshots from './Screenshots'
import useReveal from '../hooks/useReveal'

export default function ProductSection({ product, index, total }) {
  const ref = useReveal()
  const reversed = index % 2 === 1

  return (
    <section
      id={product.id}
      aria-labelledby={`${product.id}-title`}
      className="border-t"
      style={{ '--accent': product.accent }}
    >
      <div
        ref={ref}
        className="reveal max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
      >
        <div className={`lg:col-span-5 ${reversed ? 'lg:order-2' : ''}`}>
          <div className="flex items-center gap-3 mb-8 text-sm text-base-muted">
            <span
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white"
              style={{ backgroundColor: product.accent }}
            >
              <ProductIcon id={product.id} />
            </span>
            <span className="font-mono text-xs">
              0{index + 1} / 0{total}
            </span>
            <span aria-hidden="true">·</span>
            <span>
              {product.kind}, {product.platform}
            </span>
          </div>

          <h2 id={`${product.id}-title`} className="font-bold tracking-tight text-5xl md:text-6xl leading-none mb-5">
            {product.name}
          </h2>
          <p className="text-xl md:text-2xl leading-snug mb-5">{product.tagline}</p>
          <p className="text-base-muted leading-relaxed mb-6">{product.description}</p>
          {product.note && (
            <p className="font-medium leading-relaxed mb-10">{product.note}</p>
          )}

          <dl className="border-t mb-10">
            {product.features.map((f) => (
              <div key={f.title} className="py-4 border-b">
                <dt className="font-semibold">{f.title}</dt>
                <dd className="text-base-muted mt-1">{f.detail}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap items-center gap-4">
            <span
              className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold"
              style={{ borderColor: product.accent, color: product.accent }}
            >
              {product.status}
            </span>
            {product.website && (
              <a
                href={product.website}
                className="text-sm font-semibold underline underline-offset-4"
                target="_blank"
                rel="noreferrer"
                style={{ color: product.accent }}
              >
                {product.websiteLabel ?? 'Visit website'}
              </a>
            )}
          </div>
        </div>

        <div className={`lg:col-span-7 ${reversed ? 'lg:order-1' : ''}`}>
          <div className="accent-panel rounded-3xl px-5 py-12 sm:px-12 sm:py-16">
            {product.screenshots ? <Screenshots shots={product.screenshots} /> : <Vignette product={product} />}
          </div>
        </div>
      </div>
    </section>
  )
}
