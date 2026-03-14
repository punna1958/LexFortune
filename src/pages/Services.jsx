import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Services() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [hash])
  const legalServices = [
    { name: 'Civil Law', desc: 'Property disputes, contracts, civil litigation and related matters.' },
    { name: 'Family Law', desc: 'Divorce, custody, maintenance, adoption and family disputes.' },
    { name: 'Criminal Law', desc: 'Criminal defense, bail, FIR related matters and criminal litigation.' },
    { name: 'Litigation', desc: 'Court representation, legal drafting, case strategy and proceedings.' },
  ]

  const financialServices = [
    { name: 'Tax Advisory', desc: 'Income tax planning, returns and tax optimization strategies.' },
    { name: 'GST', desc: 'GST registration, returns, compliance and advisory.' },
    { name: 'ITR Filing', desc: 'Income tax return preparation and filing for individuals and businesses.' },
    { name: 'Compliances', desc: 'Regulatory compliances, filings and statutory requirements.' },
    { name: 'Registrations', desc: 'Company registration, MSME, trademark and other registrations.' },
  ]

  return (
    <>
      <section className="page-hero" aria-labelledby="services-heading">
        <div className="container">
          <h1 id="services-heading">Our Services</h1>
          <p>From bail and litigation to GST and fund recovery—under one roof</p>
        </div>
      </section>

      <section className="section" id="legal" aria-labelledby="legal-services">
        <div className="container">
          <h2 id="legal-services" className="section-title">Legal Services</h2>
          <p className="section-intro">
            Our legal team includes advocates and former senior investigation officers of Police,
            bringing practical investigative insight to your legal matters—including representation up to the Supreme Court and before tribunals. <Link to="/about">Learn about our team</Link>.
          </p>
          <ul className="services-list" aria-label="Legal services list">
            {legalServices.map((service) => (
              <li key={service.name} className="service-item">
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-gray" id="financial" aria-labelledby="financial-advisory">
        <div className="container">
          <h2 id="financial-advisory" className="section-title">Financial Advisory</h2>
          <p className="section-intro">
            Tax, compliance and registration services handled by qualified Chartered Accountants. Compliances and registrations taken care of so you stay on the right side of the law.
          </p>
          <ul className="services-list" aria-label="Financial services list">
            {financialServices.map((service) => (
              <li key={service.name} className="service-item">
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <p>Confidential discussion. Tell us your situation—we'll outline how we can help. <Link to="/contact">Get in touch</Link>.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </>
  )
}

export default Services
