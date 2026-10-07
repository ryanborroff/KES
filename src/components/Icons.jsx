// Minimal monochrome inline SVG icon placeholders per product.
export function ProductIcon({ id, className = 'w-5 h-5' }) {
  const common = { className, fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, viewBox: '0 0 24 24' }
  switch (id) {
    case 'kitchen-wizz':
      return (
        <svg {...common}>
          <path d="M6 3v7a3 3 0 0 0 3 3v8" strokeLinecap="round" />
          <path d="M6 3v5M9 3v5" strokeLinecap="round" />
          <path d="M17 3c-1.5 0-2.5 1.5-2.5 4s1 4 2.5 4v10" strokeLinecap="round" />
        </svg>
      )
    case 'boop':
      return (
        <svg {...common}>
          <path d="M4 15l1.5-5.5A2 2 0 0 1 7.4 8h9.2a2 2 0 0 1 1.9 1.5L20 15" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="3" y="15" width="18" height="4" rx="1" />
          <circle cx="7.5" cy="19" r="1.4" />
          <circle cx="16.5" cy="19" r="1.4" />
        </svg>
      )
    case 'eatlog':
      return (
        <svg {...common}>
          <rect x="9" y="3" width="6" height="11" rx="3" />
          <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M9 21h6" strokeLinecap="round" />
        </svg>
      )
    case 'chroma':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="12" rx="1" />
          <path d="M9 9l5 3-5 3V9z" fill="currentColor" stroke="none" />
          <path d="M7 20h10" strokeLinecap="round" />
        </svg>
      )
    default:
      return null
  }
}

export function SunIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
      <path strokeLinecap="round" d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>
  )
}

export function MoonIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
    </svg>
  )
}

export function MenuIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}
