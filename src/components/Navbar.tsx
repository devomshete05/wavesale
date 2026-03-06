import './navbar.css'

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-menu">
          <li><a href="#about">About Us</a></li>
          <li><a href="#products">Our Products</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  )
}
