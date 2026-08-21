import ThemeToggle from './ThemeToggle'

export default function Hero({ theme, setTheme }) {
  return (
    <header className="relative border-b-2 border-base-border">
      <nav className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between py-6">
        <span className="text-sm font-bold tracking-tight">JOMO</span>
        <div className="hidden sm:flex items-center gap-8 text-sm font-semibold text-base-muted">
          <a href="#products" className="hover:text-base-fg transition-colors">Products</a>
          <a href="#about" className="hover:text-base-fg transition-colors">About</a>
          <a href="#contact" className="hover:text-base-fg transition-colors">Contact</a>
        </div>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </nav>

      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-28 md:pt-28 md:pb-36">
        <div className="text-sm font-semibold text-base-muted mb-6">Independent software studio</div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
          JOMO
        </h1>
        <p className="text-xl md:text-2xl text-base-muted max-w-xl leading-relaxed">
          Independent software, built with care. Four small products, no growth team, no dark patterns.
        </p>
      </div>
    </header>
  )
}
