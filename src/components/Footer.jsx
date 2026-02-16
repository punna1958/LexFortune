import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/lexfortunelogo.jpeg" alt="Lexfortune" className="footer-logo" />
            <p>Legal & Financial Advisory Services</p>
            <p className="footer-location">SC-094, Jaipuria Sunrise Plaza, Ahinsa Khand 1, Ghaziabad, UP</p>
          </div>
          <div className="footer-links">
            <h2 className="footer-heading">Quick Links</h2>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {currentYear} Lexfortune Advisory Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
