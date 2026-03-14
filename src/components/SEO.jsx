import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://lexfortune.in'
const OG_IMAGE = `${SITE_URL}/lexfortunelogo.jpeg`

const ROUTES = {
  '/': {
    title: 'Lexfortune Advisory Services | Legal & Financial Advisory - Ghaziabad',
    description: 'Former Senior Police investigation officers, Chartered Accountants and Advocates. Courts to Supreme Court, tribunals, cyber fraud & fund recovery. Legal and financial advisory from Ghaziabad.',
    canonical: SITE_URL + '/',
  },
  '/about': {
    title: 'About Us | Lexfortune Advisory Services - Ghaziabad',
    description: 'Former police investigation officers, Chartered Accountants and Advocates. Strategic representation from courts to Supreme Court and tribunals. Legal and financial advisory, Ghaziabad.',
    canonical: SITE_URL + '/about',
  },
  '/services': {
    title: 'Our Services | Legal & Tax Advisory | Lexfortune - Ghaziabad',
    description: 'Legal: bail, criminal, family, civil, litigation—courts to Supreme Court. Financial: GST, ITR, compliances, registrations. Cyber fraud & fund recovery. Ghaziabad & UP.',
    canonical: SITE_URL + '/services',
  },
  '/contact': {
    title: 'Contact Us | Lexfortune Advisory Services - Ghaziabad',
    description: 'Confidential consultation. Ghaziabad: Jaipuria Sunrise Plaza, Ahinsa Khand 1. Call or message for legal, tax, bail, GST, ITR, or fund recovery—we respond promptly.',
    canonical: SITE_URL + '/contact',
  },
}

function SEO() {
  const { pathname } = useLocation()
  const meta = ROUTES[pathname] || ROUTES['/']

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={meta.canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta.canonical} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Lexfortune" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Helmet>
  )
}

export default SEO
