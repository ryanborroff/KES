// Minimal monochrome inline SVG icon placeholders per product.
export function ProductIcon({ id, className = 'w-5 h-5' }) {
  const common = { className, fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, viewBox: '0 0 24 24' }
  switch (id) {
    case 'kando':
      return (
        <svg {...common}>
          <rect x="3" y="4" width="5" height="16" rx="1" />
          <rect x="9.5" y="4" width="5" height="10" rx="1" />
          <rect x="16" y="4" width="5" height="13" rx="1" />
        </svg>
      )
    case 'kitchen':
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
    case 'chroma':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="12" rx="1" />
          <path d="M9 9l5 3-5 3V9z" fill="currentColor" stroke="none" />
          <path d="M7 20h10" strokeLinecap="round" />
        </svg>
      )
    case 'greg':
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="1" />
          <path d="M8 8h8M8 12h8M8 16h5" strokeLinecap="round" />
          <path d="M6.5 8l.5.5L8 7" strokeLinecap="round" strokeLinejoin="round" />
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

export function GithubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
    </svg>
  )
}

export function XIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.9 2H22l-7.6 8.68L23.3 22h-7l-5.48-7.16L4.53 22H1.4l8.13-9.29L1 2h7.16l4.96 6.55L18.9 2zm-1.23 18.17h1.72L7.4 3.73H5.55l12.12 16.44z" />
    </svg>
  )
}
