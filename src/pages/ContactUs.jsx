import { useState } from 'react'
import { Link } from 'react-router-dom'

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID

function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setStatus('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!FORMSPREE_ID) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setFormData({ name: '', email: '', phone: '', message: '' })
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="page-hero" aria-labelledby="contact-heading">
        <div className="container">
          <h1 id="contact-heading">Contact Us</h1>
          <p>Confidential consultation. Call, visit or send a message—we'll respond promptly. <Link to="/services">View our legal and tax services</Link>.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="reach-out">
        <div className="container">
          <div className="contact-grid">
            <address className="contact-info">
              <h2 id="reach-out">Reach Out</h2>
              <div className="contact-item">
                <h3>Email</h3>
                <a href="mailto:contact@lexfortune.in">contact@lexfortune.in</a>
              </div>
              <div className="contact-item">
                <h3>Phone</h3>
                <div className="contact-phones">
                  <a href="tel:+919456661555">+91 9456661555</a>
                  <a href="tel:+919719168574">+91 9719168574</a>
                  <a href="tel:+917669572735">+91 7669572735</a>
                </div>
              </div>
              <div className="contact-item">
                <h3>Address</h3>
                <p>SC-094, Jaipuria Sunrise Plaza, Ahinsa Khand 1, Ghaziabad, UP</p>
              </div>
            </address>
            <div className="contact-form-wrap">
              <h2 id="send-message">Send a Message</h2>
              <p className="contact-form-intro">Your details are confidential. We typically respond within 24 hours.</p>
              <form onSubmit={handleSubmit} className="contact-form" aria-labelledby="send-message" noValidate>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" disabled={status === 'sending'} aria-busy={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'success' && <p id="form-status" className="form-success" role="status">Thank you. We'll get back to you soon.</p>}
                {status === 'error' && <p id="form-status" className="form-error" role="alert">Something went wrong. Please try again or call us.</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs
