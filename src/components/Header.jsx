import ThemeToggle from './ThemeToggle'
import useActiveSection from '../hooks/useActiveSection'

const NAV_LINKS = [
  { id: 'products', label: 'Products' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]
const NAV_IDS = NAV_LINKS.map((l) => l.id)

export default function Header({ theme, setTheme }) {
  const active = useActiveSection(NAV_IDS)

  return (
    <header className="sticky top-0 z-20 border-b bg-base-bg/85 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <a href="#top" className="text-lg font-bold tracking-tight">
          Kind Enough Studio
        </a>
        <div className="flex items-center gap-6 sm:gap-8">
          <div className="hidden sm:flex items-center gap-8 text-sm font-medium">
            {NAV_LINKS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                className={`transition-colors ${active === id ? 'text-base-fg' : 'text-base-muted hover:text-base-fg'}`}
              >
                {label}
              </a>
            ))}
          </div>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </nav>
    </header>
  )
}
