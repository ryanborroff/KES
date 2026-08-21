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
        kando: '#4ADE80',
        kitchen: '#F59E0B',
        boop: '#F472B6',
        chroma: '#60A5FA',
      },
      borderRadius: {
        sharp: '2px',
      },
    },
  },
  plugins: [],
}
