import { Link } from 'react-router-dom'

/**
 * Lexfortune logo — wordmark + icon aligned with site typography and palette.
 * Renders as a link to home; use on dark (header/footer) or light backgrounds.
 */
export default function Logo({ className = '', tagline = true, onClick }) {
  return (
    <Link to="/" className={`logo-brand ${className}`.trim()} aria-label="Lexfortune Advisory Services – Home" onClick={onClick}>
      <span className="logo-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4v16M12 6h4M12 6H8M12 18h3l-1.5-3-1.5 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="6" r="2" fill="currentColor"/>
          <circle cx="8" cy="8" r="1.25" fill="currentColor"/>
          <circle cx="16" cy="8" r="1.25" fill="currentColor"/>
        </svg>
      </span>
      <span className="logo-text">
        <span className="logo-wordmark">Lexfortune</span>
        {tagline && <span className="logo-tagline">Advisory Services</span>}
      </span>
    </Link>
  )
}
