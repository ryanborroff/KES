import { GithubIcon, XIcon } from './Icons'

export default function Footer() {
  return (
    <footer id="contact">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-12">
          <div>
            <div className="text-sm font-semibold text-base-muted mb-3">Contact</div>
            <a
              href="mailto:hello@jomo.io"
              className="text-2xl md:text-3xl font-bold tracking-tight hover:text-base-muted transition-colors"
            >
              hello@jomo.io
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ryanborroff"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center border-2 border-base-border hover:border-base-fg transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href="https://x.com/jomo"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center border-2 border-base-border hover:border-base-fg transition-colors"
              aria-label="X / Twitter"
            >
              <XIcon />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-3 pt-6 border-t-2 border-base-border text-sm font-medium text-base-muted">
          <span>&copy; {new Date().getFullYear()} JOMO. All rights reserved.</span>
          <span>Kando &middot; Kitchen Wizz &middot; Boop &middot; Chroma</span>
        </div>
      </div>
    </footer>
  )
}
