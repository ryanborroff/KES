/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Geist Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        base: {
          bg: 'var(--color-bg)',
          fg: 'var(--color-fg)',
          muted: 'var(--color-muted)',
          border: 'var(--color-border)',
          surface: 'var(--color-surface)',
        },
        kando: '#3F7D4F',
        kitchen: '#D97B3F',
        boop: '#D65A7A',
        chroma: '#3B6FA0',
        greg: '#8A6FB3',
      },
      borderRadius: {
        sharp: '2px',
      },
    },
  },
  plugins: [],
}
