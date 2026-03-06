import { useState } from 'react'
import './App.css'
import { Header } from './components/Header.tsx'
import { Hero } from './components/Hero.tsx'
import { CategoryList } from './components/CategoryList.tsx'
import { ProductGrid } from './components/ProductGrid.tsx'
import { ProductModal } from './components/ProductModal.tsx'
import { EnquiryModal } from './components/EnquiryModal.tsx'
import { Footer } from './components/Footer.tsx'
import { categories } from './data/products'

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categories[0].id)
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null)
  const [enquiryProduct, setEnquiryProduct] = useState<any | null>(null)

  const currentCategory = categories.find((c) => c.id === selectedCategory) ?? categories[0]

  return (
    <div className="app-root">
      <Header />
      <Hero />

      <main className="container">
        <CategoryList
          categories={categories}
          selectedId={selectedCategory}
          onSelect={(id: string) => setSelectedCategory(id)}
        />

        <h2 className="section-title" id="products">{currentCategory.name} — Products</h2>

        <ProductGrid
          products={currentCategory.items}
          onSelect={(p: any) => setSelectedProduct(p)}
          onQuote={(p: any) => setEnquiryProduct(p)}
        />
      </main>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}

      {enquiryProduct && (
        <EnquiryModal product={enquiryProduct} onClose={() => setEnquiryProduct(null)} />
      )}

      <section id="about" className="about-section container">
        <h2>About Wave Enterprises</h2>
        <p>Wave Enterprises is a leading manufacturer and supplier of high-quality fasteners including Metal Screws, Industrial Bolts, SS Washers, Self Tapping Screws, and more. We specialize in serving the automotive and industrial sectors with products designed for durability and precision.</p>
      </section>

      <section id="contact" className="contact-section container">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <div><strong>Address:</strong> Pune, Maharashtra</div>
          <div><strong>Phone:</strong> +91 72761939 , 8805057191</div>
          <div><strong>Email:</strong>wavesale95@gmail.com</div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
