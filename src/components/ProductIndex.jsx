import { products } from '../data/products'
import { ProductIcon } from './Icons'

export default function ProductIndex() {
  return (
    <nav aria-label="Products" className="max-w-6xl mx-auto px-6 md:px-10 pb-20 md:pb-28">
      <div className="border-t">
        <ol>
          {products.map((product, i) => (
            <li key={product.id} className="border-b">
              <a
                href={`#${product.id}`}
                className="group grid grid-cols-[2rem_1fr_auto] sm:grid-cols-[3rem_15rem_1fr_auto] items-center gap-x-4 py-5"
              >
                <span className="font-mono text-xs text-base-muted">0{i + 1}</span>
                <span className="flex items-center gap-3 whitespace-nowrap font-bold tracking-tight text-2xl md:text-3xl leading-none">
                  <span
                    className="w-8 h-8 shrink-0 rounded-lg flex items-center justify-center text-white"
                    style={{ backgroundColor: product.accent }}
                  >
                    <ProductIcon id={product.id} className="w-4 h-4" />
                  </span>
                  {product.name}
                </span>
                <span className="hidden sm:block text-base-muted">{product.tagline}</span>
                <span className="flex items-center gap-3 text-sm text-base-muted">
                  <span className="hidden md:inline">{product.platform}</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1 group-hover:text-base-fg"
                  >
                    →
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
