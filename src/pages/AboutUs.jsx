import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <>
      <section className="page-hero" aria-labelledby="about-heading">
        <div className="container">
          <h1 id="about-heading">About Us</h1>
          <p>Former police investigation officers, CAs and Advocates—courts, tribunals and fund recovery</p>
        </div>
      </section>

      <section className="section" aria-labelledby="who-we-are">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop" alt="Lexfortune team and legal advisory in Ghaziabad" width="600" height="400" loading="lazy" />
            </div>
            <div className="about-text">
              <h2 id="who-we-are">Who We Are</h2>
              <p>
                Lexfortune is a professional <Link to="/services">legal and financial advisory</Link> platform led by senior former police investigation officers and supported by a team of experienced Advocates and Chartered Accountants. The organization focuses on delivering practical, result-oriented solutions across criminal, civil, financial, and regulatory matters.
              </p>
              <p>
                With extensive experience representing clients before District Courts, High Courts, the Supreme Court of India, and various tribunals and authorities, our team works with a clear objective—protecting the legal and financial interests of our clients.
              </p>
              <p>
                Operating from our registered center in Ghaziabad, Lexfortune provides comprehensive legal consultation, cyber fraud recovery assistance, financial advisory, property dealing support, insurance guidance, and investment-related services through both offline and online channels.
              </p>
              <p>
                <Link to="/services">Explore our services</Link> or <Link to="/contact">contact us</Link> for a consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-gray" aria-labelledby="our-values">
        <div className="container">
          <h2 id="our-values" className="section-title">Our Values</h2>
          <div className="values-grid" role="list">
            <article className="value-item" role="listitem">
              <h3>Integrity</h3>
                <p>We uphold the highest standards of honesty and transparency in all our dealings.</p>
              </article>
              <article className="value-item" role="listitem">
              <h3>Expertise</h3>
              <p>Our team's combined experience in law enforcement, law and finance sets us apart.</p>
            </article>
            <article className="value-item" role="listitem">
              <h3>Reliability</h3>
              <p>Clients trust us to deliver timely, accurate and practical solutions.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="location-heading">
        <div className="container text-center">
          <h2 id="location-heading">Located in Ghaziabad</h2>
          <p>We serve clients across Uttar Pradesh and beyond. Visit us or get in touch for a consultation.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </>
  )
}

export default AboutUs
