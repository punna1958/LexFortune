import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ROUTES = {
  '/': {
    title: 'Lexfortune Advisory Services | Legal & Financial Advisory - Ghaziabad',
    description: 'Lexfortune Advisory Services - Legal and Financial advisory firm in Ghaziabad. Civil, Criminal, Family law, Tax, GST, ITR and more.',
  },
  '/about': {
    title: 'About Us | Lexfortune Advisory Services - Ghaziabad',
    description: 'Your trusted partners in legal and financial matters. Led by senior UP Police investigation officers, CAs and Advocates in Ghaziabad.',
  },
  '/services': {
    title: 'Our Services | Legal & Tax Advisory | Lexfortune - Ghaziabad',
    description: 'Legal services: Civil, Family, Criminal, Litigation. Financial: Tax, GST, ITR, compliances, registrations. Expert advisory in Ghaziabad.',
  },
  '/contact': {
    title: 'Contact Us | Lexfortune Advisory Services - Ghaziabad',
    description: 'Get in touch for legal and financial consultation. Visit us at Jaipuria Sunrise Plaza, Ahinsa Khand 1, Ghaziabad or call us.',
  },
}

function SEO() {
  const { pathname } = useLocation()
  const meta = ROUTES[pathname] || ROUTES['/']

  useEffect(() => {
    document.title = meta.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', meta.description)
  }, [pathname])

  return null
}

export default SEO
