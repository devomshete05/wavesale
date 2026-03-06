import './header.css'
import { Navbar } from './Navbar.tsx'

export function Header() {
  return (
    <>
      <header className="site-header">
        <div className="brand">
          <h1 className="brand-name">Wave Enterprises</h1>
          <div className="brand-sub">Pune, Maharashtra</div>
        </div>

        <div className="contact">
          <div>Phone: <a href="tel:+919876543210">+91 72761939 , 8805057191</a></div>
          <div>Email: <a href="mailto:info@waveenterprises.example">wavesale95@gmail.com</a></div>
        </div>
      </header>
      <Navbar />
    </>
  )
}
