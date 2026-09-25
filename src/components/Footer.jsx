import { GithubIcon, XIcon } from './Icons'
import { products } from '../data/products'

const SOCIALS = [
  { href: 'https://github.com/ryanborroff', label: 'GitHub', Icon: GithubIcon },
  { href: 'https://x.com/jomo', label: 'X / Twitter', Icon: XIcon },
]

export default function Footer() {
  return (
    <footer id="contact" className="border-t">
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-10">
        <p className="text-sm font-medium text-base-muted mb-4">Contact</p>
        <h2 className="font-bold tracking-tight text-5xl md:text-7xl leading-none mb-6">Say hello.</h2>
        <p className="text-lg text-base-muted max-w-lg mb-10">
          Questions, bug reports, or a feature you think earns its place. Every email gets read by the person who
          wrote the code.
        </p>
        <div className="flex flex-wrap items-center gap-4 mb-20 md:mb-28">
          <a
            href="mailto:hello@jomo.io"
            className="inline-flex items-center gap-2 rounded-full bg-base-fg text-base-bg px-6 py-3.5 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            hello@jomo.io <span aria-hidden="true">→</span>
          </a>
          {SOCIALS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="w-12 h-12 rounded-full border flex items-center justify-center text-base-muted hover:text-base-fg hover:border-base-fg transition-colors"
            >
              <Icon />
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-3 pt-6 border-t text-sm text-base-muted">
          <span>&copy; {new Date().getFullYear()} JOMO</span>
          <span>{products.map((p) => p.name).join(' · ')}</span>
        </div>
      </div>
    </footer>
  )
}
