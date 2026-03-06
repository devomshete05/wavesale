import './product.css'

export function ProductGrid({ products, onSelect, onQuote }: { products: any[]; onSelect: (p: any) => void; onQuote: (p: any) => void }) {
  return (
    <div className="grid" id="products">
      {products.map((p) => (
        <div key={p.id} className="card product-card" onClick={() => onSelect(p)}>
          <img src={p.img} alt={p.name} className="product-img" />
          <div className="product-name">{p.name}</div>
          <div className="product-actions">
            <button className="quote-btn" onClick={(e) => { e.stopPropagation(); onQuote(p) }}>Get Best Quote</button>
          </div>
        </div>
      ))}
    </div>
  )
}
