import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductIndex from './components/ProductIndex'
import ProductSection from './components/ProductSection'
import About from './components/About'
import Footer from './components/Footer'
import { products } from './data/products'

function initialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // storage unavailable; fall through to system preference
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function App() {
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // ignore
    }
  }, [theme])

  return (
    <div className="min-h-screen bg-base-bg text-base-fg font-sans">
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <div id="products">
          <ProductIndex />
          {products.map((product, i) => (
            <ProductSection key={product.id} product={product} index={i} total={products.length} />
          ))}
        </div>
        <About />
      </main>
      <Footer />
    </div>
  )
}
