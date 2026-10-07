import { products } from '../data/products'

export default function Footer() {
  return (
    <footer id="contact" className="border-t">
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-20 md:pt-24 pb-10">
        <p className="text-sm font-medium text-base-muted mb-4">Contact</p>
        <h2 className="font-bold tracking-tight text-5xl md:text-7xl leading-none mb-6">Say hello.</h2>
        <p className="text-lg text-base-muted max-w-lg mb-10">
          Questions, bug reports, or a feature you think earns its place. Every email gets read by the person who
          wrote the code.
        </p>
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <a
            href="mailto:hello@kindenoughstudio.com"
            className="inline-flex items-center gap-2 rounded-full bg-base-fg text-base-bg px-6 py-3.5 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            hello@kindenoughstudio.com <span aria-hidden="true">→</span>
          </a>
        </div>
        <p className="text-sm text-base-muted mb-20 md:mb-24">
          Need help with an app?{' '}
          <a
            href="mailto:support@kindenoughstudio.com"
            className="font-medium text-base-fg underline underline-offset-4 hover:text-base-muted transition-colors"
          >
            support@kindenoughstudio.com
          </a>
        </p>

        <div className="flex flex-col sm:flex-row justify-between gap-3 pt-6 border-t text-sm text-base-muted">
          <span>&copy; {new Date().getFullYear()} Kind Enough Studio</span>
          <span className="flex flex-wrap gap-x-3 gap-y-1">
            <span>{products.map((p) => p.name).join(' · ')}</span>
            <a
              href="https://github.com/ryanborroff"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-base-fg transition-colors"
            >
              GitHub
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
