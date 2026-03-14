import { Link } from 'react-router-dom'
import Logo from './Logo'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo tagline={true} />
            <p>Legal and financial advisory from Ghaziabad—courts, tribunals and fund recovery.</p>
            <p className="footer-location">SC-094, Jaipuria Sunrise Plaza, Ahinsa Khand 1, Ghaziabad, UP</p>
          </div>
          <div className="footer-links">
            <h2 className="footer-heading">Quick Links</h2>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="footer-contact">
            <h2 className="footer-heading">Contact</h2>
            <a href="tel:+919456661555">+91 9456661555</a>
            <a href="tel:+919719168574">+91 9719168574</a>
            <a href="tel:+917669572735">+91 7669572735</a>
            <a href="mailto:contact@lexfortune.in">contact@lexfortune.in</a>
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
