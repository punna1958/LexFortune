import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <>
      <section className="page-hero" aria-labelledby="about-heading">
        <div className="container">
          <h1 id="about-heading">About Us</h1>
          <p>Your trusted partners in legal and financial matters</p>
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
                Lexfortune Advisory Services is a Ghaziabad-based firm offering integrated legal and financial advisory. 
                We bring together expertise from diverse backgrounds to serve our clients with comprehensive solutions.
              </p>
              <p>
                Our team is led by <strong>senior and top investigation officers of Uttar Pradesh Police</strong>, 
                working alongside qualified <strong>Chartered Accountants</strong> and <strong>Advocates</strong>. 
                This unique combination gives us deep insight into both investigative and regulatory matters, 
                as well as the financial and legal frameworks that govern them.
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
