import { SunIcon, MoonIcon } from './Icons'

export default function ThemeToggle({ theme, setTheme }) {
  const next = theme === 'dark' ? 'light' : 'dark'
  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      className="flex items-center justify-center w-9 h-9 rounded-full border text-base-fg hover:bg-base-surface transition-colors"
      aria-label={`Switch to ${next} theme`}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
