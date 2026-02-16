import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container">
          <h1 id="hero-heading">Lexfortune Advisory Services</h1>
          <p className="hero-tagline">Legal & Financial expertise you can trust</p>
          <p className="hero-desc">
            Led by senior investigation officers of Uttar Pradesh Police, along with experienced CAs and Advocates. 
            We provide comprehensive legal and financial advisory from our base in Ghaziabad.
          </p>
          <div className="hero-cta">
            <Link to="/services" className="btn btn-primary">Our Services</Link>
            <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>

      <section className="section section-gray" aria-labelledby="what-we-offer">
        <div className="container">
          <h2 id="what-we-offer" className="section-title">What We Offer</h2>
          <div className="services-preview" role="list">
            <article className="service-card" role="listitem">
              <div className="service-icon" aria-hidden="true">⚖️</div>
              <h3>Legal Services</h3>
              <p>Civil, Family, Criminal, Litigation and more. Expert legal representation and advisory.</p>
              <Link to="/services#legal" className="link-arrow">Learn more →</Link>
            </article>
            <article className="service-card" role="listitem">
              <div className="service-icon" aria-hidden="true">📋</div>
              <h3>Financial Advisory</h3>
              <p>Tax, GST, ITR, Compliances, Registrations. End-to-end financial solutions.</p>
              <Link to="/services#financial" className="link-arrow">Learn more →</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="why-choose-us">
        <div className="container">
          <h2 id="why-choose-us" className="section-title">Why Choose Us</h2>
          <div className="features-grid" role="list">
            <article className="feature" role="listitem">
              <h3>Experienced Team</h3>
              <p>Senior officers from UP Police, qualified CAs and Advocates with years of field experience.</p>
            </article>
            <article className="feature" role="listitem">
              <h3>Holistic Approach</h3>
              <p>Both legal and financial expertise under one roof. No need to juggle multiple advisors.</p>
            </article>
            <article className="feature" role="listitem">
              <h3>Client Focused</h3>
              <p>Personalized solutions tailored to your specific needs and circumstances.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-cta" aria-labelledby="cta-heading">
        <div className="container">
          <h2 id="cta-heading">Ready to get started?</h2>
          <p>Reach out for a consultation. We're here to help.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </>
  )
}

export default Home
