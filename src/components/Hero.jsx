import ThemeToggle from './ThemeToggle'
import useActiveSection from '../hooks/useActiveSection'

const NAV_LINKS = [
  { id: 'products', label: 'Products' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function Hero({ theme, setTheme }) {
  const active = useActiveSection(['products', 'about', 'contact'])

  return (
    <header className="relative border-b-2 border-base-border">
      <nav className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between py-6">
        <span className="text-sm font-bold tracking-tight">JOMO</span>
        <div className="hidden sm:flex items-center gap-8 text-sm font-semibold">
          {NAV_LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`border-b-2 pb-1 transition-colors ${
                active === id ? 'border-base-fg text-base-fg' : 'border-transparent text-base-muted hover:text-base-fg'
              }`}
            >
              {label}
            </a>
          ))}
        </div>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </nav>

      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-28 md:pt-28 md:pb-36">
        <div className="text-sm font-semibold text-base-muted mb-6">Independent software studio</div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
          JOMO
        </h1>
        <p className="text-xl md:text-2xl text-base-muted max-w-xl leading-relaxed">
          Independent software, built with care for people who'd rather enjoy real life.
          Five little products. No dark intent.
        </p>
      </div>
    </header>
  )
}
