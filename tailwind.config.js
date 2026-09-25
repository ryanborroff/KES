/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        base: {
          bg: 'var(--color-bg)',
          fg: 'var(--color-fg)',
          muted: 'var(--color-muted)',
          line: 'var(--color-line)',
          surface: 'var(--color-surface)',
        },
      },
    },
  },
  plugins: [],
}
