import { products } from '../data/products'
import { ProductIcon } from './Icons'
import useReveal from '../hooks/useReveal'

function ProductCard({ product, index }) {
  const ref = useReveal()
  return (
    <a
      ref={ref}
      href={`#${product.id}`}
      style={{ transitionDelay: `${index * 60}ms` }}
      className="reveal group border border-base-border bg-base-surface p-6 flex flex-col gap-5 hover:border-[var(--accent)] transition-colors"
      // eslint-disable-next-line react/forbid-dom-props
    >
      <div style={{ '--accent': product.accent }} className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div
            className="w-9 h-9 flex items-center justify-center border border-base-border group-hover:border-[var(--accent)] transition-colors"
            style={{ color: product.accent }}
          >
            <ProductIcon id={product.icon} />
          </div>
          <span className="font-mono-label text-[10px] uppercase text-base-muted">{product.category}</span>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
          <p className="text-sm text-base-muted leading-relaxed">{product.tagline}</p>
        </div>

        <div className="border border-dashed border-base-border h-28 flex items-center justify-center">
          <span className="font-mono-label text-[10px] uppercase text-base-muted">
            [SCREENSHOT: {product.name}]
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono-label text-[11px] uppercase text-base-muted group-hover:text-[var(--accent)] transition-colors">
          View product
          <span aria-hidden="true">&rarr;</span>
        </div>
      </div>
    </a>
  )
}

export default function ProductGrid() {
  return (
    <section id="products" className="border-b border-base-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="font-mono-label text-xs uppercase text-base-muted mb-3">01 / Products</div>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-14 max-w-xl">
          Four products. One studio.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-base-border sm:gap-6 sm:bg-transparent">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
