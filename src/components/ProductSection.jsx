import { ProductIcon } from './Icons'
import useReveal from '../hooks/useReveal'

export default function ProductSection({ product, index }) {
  const ref = useReveal()
  const reversed = index % 2 === 1

  return (
    <section id={product.id} className="border-b border-base-border" style={{ '--accent': product.accent }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div
          ref={ref}
          className={`reveal grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center ${
            reversed ? 'md:[&>*:first-child]:order-2' : ''
          }`}
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 flex items-center justify-center border border-base-border"
                style={{ color: product.accent, borderColor: product.accent }}
              >
                <ProductIcon id={product.icon} />
              </div>
              <span className="font-mono-label text-[11px] uppercase text-base-muted">{product.category}</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">{product.name}</h3>
            <p className="text-base text-base-muted leading-relaxed mb-10 max-w-md">{product.tagline}</p>

            <div className="flex flex-col gap-6 mb-10">
              {product.features.map((f) => (
                <div key={f.title} className="border-l-2 pl-4" style={{ borderColor: product.accent }}>
                  <div className="font-mono-label text-xs uppercase mb-1" style={{ color: product.accent }}>
                    {f.title}
                  </div>
                  <p className="text-sm text-base-muted leading-relaxed">{f.detail}</p>
                </div>
              ))}
            </div>

            <button
              className="font-mono-label text-xs uppercase px-5 py-3 border transition-colors"
              style={{ borderColor: product.accent, color: product.accent }}
            >
              {product.cta.label} &rarr;
            </button>
          </div>

          <div className="border border-dashed border-base-border aspect-[4/3] flex items-center justify-center bg-base-surface">
            <span className="font-mono-label text-xs uppercase text-base-muted">
              [SCREENSHOT: {product.name}]
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
