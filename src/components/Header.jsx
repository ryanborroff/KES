import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { MenuIcon, CloseIcon } from './Icons'
import useActiveSection from '../hooks/useActiveSection'

const NAV_LINKS = [
  { id: 'products', label: 'Products' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]
// 'top' (the hero) is tracked so nothing is highlighted while it's in view.
const TRACKED_IDS = ['top', ...NAV_LINKS.map((l) => l.id)]

export default function Header({ theme, setTheme }) {
  const active = useActiveSection(TRACKED_IDS)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-20 border-b backdrop-blur-md" style={{ backgroundColor: 'color-mix(in srgb, var(--color-bg) 92%, transparent)' }}>
      <nav className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <a href="#top" className="text-lg font-bold tracking-tight">
          Kind Enough Studio
        </a>
        <div className="flex items-center gap-3 sm:gap-8">
          <div className="hidden sm:flex items-center gap-8 text-sm font-medium">
            {NAV_LINKS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                className={`py-3 transition-colors ${active === id ? 'text-base-fg' : 'text-base-muted hover:text-base-fg'}`}
              >
                {label}
              </a>
            ))}
          </div>
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden flex items-center justify-center w-10 h-10 rounded-full border text-base-fg hover:bg-base-surface transition-colors"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div id="mobile-menu" className="sm:hidden border-t">
          <ul className="px-6 py-2">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-2xl font-bold tracking-tight"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
