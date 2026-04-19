import './navbar.css'

export function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-menu">
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Us</a></li>
          <li><a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>Our Products</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact Us</a></li>
        </ul>
      </div>
    </nav>
  )
}
