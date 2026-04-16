import { useState } from 'react'
import './enquiry.css'

export function EnquiryModal({ product, onClose }: { product: any; onClose: () => void }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: any) {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('http://localhost:3000/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product: product?.name,
          customerName: name,
          customerEmail: email,
          customerPhone: phone,
          message,
        }),
      })
      
      if (response.ok) {
        alert('Enquiry submitted! We will contact you soon.')
        onClose()
      } else {
        alert('Failed to submit enquiry. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error submitting enquiry.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-body">
          <h3>Request Quote</h3>
          <div className="product-summary">Product: <strong>{product?.name}</strong></div>
          <form onSubmit={handleSubmit} className="enquiry-form">
            <label>Name<input value={name} onChange={(e) => setName(e.target.value)} required /></label>
            <label>Email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></label>
            <label>Phone<input value={phone} onChange={(e) => setPhone(e.target.value)} /></label>
            <label>Message<textarea value={message} onChange={(e) => setMessage(e.target.value)} /></label>
            <div className="form-actions">
              <button type="submit" className="btn primary" disabled={loading}>
                {loading ? 'Sending...' : 'Send Enquiry'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}