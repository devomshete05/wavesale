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
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>Ready to discuss your fastener requirements? Contact us today for personalized service and competitive pricing.</p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Phone:</strong> <a href="tel:+919876543210">+91 72761939 , 8805057191</a>
              </div>
              <div className="contact-item">
                <strong>Email:</strong> <a href="mailto:info@waveenterprises.example">wavesale95@gmail.com</a>
              </div>
              <div className="contact-item">
                <strong>Location:</strong> Pune, Maharashtra
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form className="quick-contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows={4}></textarea>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
