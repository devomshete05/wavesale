import './footer.css'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <strong>Wave Enterprises</strong>
            <div>Pune, Maharashtra</div>
            <div>Phone: +91 72761939 , 8805057191</div>
            <div>Email: wavesale95@gmail.com</div>
          </div>
          <div>
            <strong>Products</strong>
            <ul>
              <li>Metal Screws</li>
              <li>Industrial Bolts</li>
              <li>SS Washers</li>
              <li>Self Tapping Screws</li>
            </ul>
          </div>
        </div>
        <div className="copyright">© {new Date().getFullYear()} Wave Enterprises. All rights reserved.</div>
      </div>
    </footer>
  )
}
