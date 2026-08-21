import { ProductIcon } from './Icons'
import useReveal from '../hooks/useReveal'

export default function ProductSection({ product, index }) {
  const ref = useReveal()
  const reversed = index % 2 === 1

  return (
    <section id={product.id} className="border-b-2 border-base-border" style={{ '--accent': product.accent }}>
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
                className="w-10 h-10 flex items-center justify-center border-2 border-base-border"
                style={{ color: product.accent, borderColor: product.accent }}
              >
                <ProductIcon id={product.icon} />
              </div>
              <span className="text-sm font-medium text-base-muted">{product.category}</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{product.name}</h3>
            <p className="text-lg text-base-muted leading-relaxed mb-10 max-w-md">{product.tagline}</p>

            <div className="flex flex-col gap-6 mb-10">
              {product.features.map((f) => (
                <div key={f.title} className="border-l-4 pl-4" style={{ borderColor: product.accent }}>
                  <div className="text-sm font-semibold mb-1" style={{ color: product.accent }}>
                    {f.title}
                  </div>
                  <p className="text-base text-base-muted leading-relaxed">{f.detail}</p>
                </div>
              ))}
            </div>

            <button
              className="text-sm font-semibold px-5 py-3 border-2 transition-colors"
              style={{ borderColor: product.accent, color: product.accent }}
            >
              {product.cta.label} &rarr;
            </button>
          </div>

          <div className="border-2 border-dashed border-base-border aspect-[4/3] flex items-center justify-center bg-base-surface">
            <span className="text-sm font-medium text-base-muted">
              [SCREENSHOT: {product.name}]
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
