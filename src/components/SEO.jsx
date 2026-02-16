import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://lexfortune.in'
const OG_IMAGE = `${SITE_URL}/lexfortunelogo.jpeg`

const ROUTES = {
  '/': {
    title: 'Lexfortune Advisory Services | Legal & Financial Advisory - Ghaziabad',
    description: 'Legal advisor Ghaziabad: Criminal lawyer, bail help, family lawyer, GST filing, ITR consultant, tax consultant. Led by senior UP Police officers, CAs & Advocates.',
    canonical: SITE_URL + '/',
  },
  '/about': {
    title: 'About Us | Lexfortune Advisory Services - Ghaziabad',
    description: 'Your trusted legal and financial partners in Ghaziabad. Senior UP Police investigation officers, CAs and Advocates. Criminal lawyer, bail help, GST & ITR expertise.',
    canonical: SITE_URL + '/about',
  },
  '/services': {
    title: 'Our Services | Legal & Tax Advisory | Lexfortune - Ghaziabad',
    description: 'Legal: Criminal lawyer, bail, family lawyer, civil & litigation. Financial: GST filing, ITR consultant, tax consultant, compliances. Ghaziabad & UP.',
    canonical: SITE_URL + '/services',
  },
  '/contact': {
    title: 'Contact Us | Lexfortune Advisory Services - Ghaziabad',
    description: 'Contact Lexfortune for legal and financial consultation. Ghaziabad office: Jaipuria Sunrise Plaza, Ahinsa Khand 1. Call or visit for bail, GST, ITR, family law.',
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
