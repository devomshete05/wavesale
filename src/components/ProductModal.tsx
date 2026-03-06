import './modal.css'

export function ProductModal({ product, onClose }: { product: any; onClose: () => void }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-body">
          <img src={product.img} alt={product.name} className="modal-img" />
          <div className="modal-info">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>Used in:</strong> {product.industries}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
