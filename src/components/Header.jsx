import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact Us' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="header">
      <div className="container header-inner">
        <Logo className="header-logo" tagline={true} onClick={() => setMenuOpen(false)} />

        <button
          type="button"
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav id="main-nav" className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
