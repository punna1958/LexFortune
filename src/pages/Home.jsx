import { Link } from 'react-router-dom'

const heroBenefits = [
  'Former Senior Police investigation officers, CAs & Advocates',
  'Representation from local courts to Supreme Court & Various tribunals',
  'Cyber Fraud Investigation and Fund Recovery through Legal Procedures',
  'Integrated Legal and Financial Advisory under One Roof – Indirapuram, Ghaziabad',
]

const credibilityStats = [
  { value: '40+', label: 'Years combined experience' },
  { value: 'Courts & tribunals', label: 'Pan-India representation' },
  { value: 'Integrated', label: 'Legal + financial advisory' },
]

const processSteps = [
  { num: '01', title: 'Case review', desc: 'We assess your situation and documents to understand scope and options.' },
  { num: '02', title: 'Legal strategy', desc: 'A clear plan—courts, authorities, or recovery channels—tailored to your case.' },
  { num: '03', title: 'Investigation & filing', desc: 'Where needed, we coordinate with authorities and file the right proceedings.' },
  { num: '04', title: 'Recovery & resolution', desc: 'We pursue recovery and resolution through statutory and legal channels.' },
]

function Home() {
  return (
    <>
      <section className="hero hero-redesign" aria-labelledby="hero-heading">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 id="hero-heading" className="hero-title">Legal & Financial Advisory Backed by Investigation Expertise</h1>
            <p className="hero-supporting">Led by former senior police investigation officers and supported by Chartered Accountants and Advocates, we represent clients across courts, tribunals, and authorities. Our team assists in criminal, civil, and family matters, including cyber fraud cases and legal fund recovery.</p>
            <ul className="hero-benefits" aria-label="Key benefits">
              {heroBenefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              <Link to="/contact" className="btn btn-hero-secondary">Free Consultation</Link>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M160 40v200M80 120h160M100 80h120M100 160h120" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" strokeLinecap="round"/>
              <path d="M160 60l-40 40 20 20 60-60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
              <circle cx="160" cy="140" r="50" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" fill="none"/>
              <path d="M130 140h60M160 110v60" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round"/>
              <circle cx="160" cy="140" r="8" fill="currentColor" opacity="0.5"/>
            </svg>
          </div>
        </div>
      </section>

      <section className="section section-gray" aria-labelledby="what-we-offer">
        <div className="container">
          <h2 id="what-we-offer" className="section-title">What We Offer</h2>
          <p className="section-intro">Integrated legal and financial solutions from one team—so you get clear advice and end-to-end support.</p>
          <div className="services-preview" role="list">
            <article className="service-card" role="listitem">
              <div className="service-card-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 8v32M14 18h20M14 30h20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                  <circle cx="24" cy="12" r="3" stroke="currentColor" strokeWidth="1.75"/>
                </svg>
              </div>
              <h3>Legal Services</h3>
              <p>Civil, criminal, family and litigation. From bail and FIR to High Court and Supreme Court representation.</p>
              <Link to="/services#legal" className="link-arrow">Learn more →</Link>
            </article>
            <article className="service-card" role="listitem">
              <div className="service-card-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16h24v16H12z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 22h12M18 28h8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Financial Advisory</h3>
              <p>Tax, GST, ITR, compliances and registrations. Stay compliant with one trusted advisor.</p>
              <Link to="/services#financial" className="link-arrow">Learn more →</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section credibility" aria-labelledby="credibility-heading">
        <div className="container">
          <h2 id="credibility-heading" className="section-title">Why clients trust us</h2>
          <div className="credibility-grid" role="list">
            {credibilityStats.map((stat, i) => (
              <div key={i} className="credibility-item" role="listitem">
                <span className="credibility-value">{stat.value}</span>
                <span className="credibility-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section why-choose section-gray" aria-labelledby="why-choose-us">
        <div className="container">
          <header className="why-choose-header">
            <h2 id="why-choose-us" className="section-title why-choose-title">Why Choose Us</h2>
            <p className="why-choose-intro">Trusted expertise, integrated solutions, and a commitment to your outcomes.</p>
          </header>
          <div className="why-choose-grid" role="list">
            <article className="why-choose-card" role="listitem">
              <div className="why-choose-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="14" r="5" stroke="currentColor" strokeWidth="1.75"/>
                  <path d="M14 26v10a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V26" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 26h12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="why-choose-card-title">Experienced Team</h3>
              <p className="why-choose-card-desc">Former UP Police investigation officers, CAs and Advocates. Representation across courts, tribunals and authorities.</p>
            </article>
            <article className="why-choose-card" role="listitem">
              <div className="why-choose-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 16h28v4H10zM10 24h28v4H10zM10 32h28v4H10z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24 8v8M24 36v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                  <circle cx="24" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.75"/>
                </svg>
              </div>
              <h3 className="why-choose-card-title">Holistic Approach</h3>
              <p className="why-choose-card-desc">Legal and financial expertise under one roof—including cyber fraud and fund recovery. One team, end-to-end.</p>
            </article>
            <article className="why-choose-card" role="listitem">
              <div className="why-choose-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 42c9.94 0 18-8.06 18-18S33.94 6 24 6 6 14.06 6 24s8.06 18 18 18z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 24l5 5 11-12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="why-choose-card-title">Client Focused</h3>
              <p className="why-choose-card-desc">Solutions tailored to your needs and circumstances. Clear advice and a path forward.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section process" aria-labelledby="process-heading">
        <div className="container">
          <h2 id="process-heading" className="section-title">How we help you</h2>
          <p className="section-intro">From case review to recovery—especially in cyber fraud and fund recovery matters. A clear, structured approach.</p>
          <ol className="process-list" role="list">
            {processSteps.map((step, i) => (
              <li key={i} className="process-step" style={{ '--step-num': `"${step.num}"` }}>
                <span className="process-step-num" aria-hidden="true">{step.num}</span>
                <div className="process-step-content">
                  <h3 className="process-step-title">{step.title}</h3>
                  <p className="process-step-desc">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-cta cta-strong" aria-labelledby="cta-heading">
        <div className="container">
          <h2 id="cta-heading" className="cta-title">Get clear advice and a path forward</h2>
          <p className="cta-desc">Confidential consultation. Tell us your situation—we’ll outline how we can help.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary btn-cta">Contact Us</Link>
            <a href="tel:+919456661555" className="btn btn-cta-outline">Call now</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
