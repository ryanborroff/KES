import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import ProductSection from './components/ProductSection'
import About from './components/About'
import Footer from './components/Footer'
import { products } from './data/products'

export default function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen bg-base-bg text-base-fg font-sans">
      <Hero theme={theme} setTheme={setTheme} />
      <ProductGrid />
      {products.map((product, i) => (
        <ProductSection key={product.id} product={product} index={i} />
      ))}
      <About />
      <Footer />
    </div>
  )
}
