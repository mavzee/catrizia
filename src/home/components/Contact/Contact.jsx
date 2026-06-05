import './Contact.css'

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <p className="eyebrow">Contact</p>
        <h2>Need a VA who can help your legal work stay organized?</h2>
        <p className="contact-text">
          Send a message and share what kind of support your practice needs.
        </p>
        <div className="contact-actions">
          <a className="primary-button" href="mailto:hello@example.com">
            <i className="ti ti-mail" aria-hidden="true" />
            Email me
          </a>
          <a className="secondary-button" href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="ti ti-brand-linkedin" aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="contact-detail-list">
        <div className="contact-detail-item">
          <span className="contact-detail-icon">
            <i className="ti ti-map-pin" aria-hidden="true" />
          </span>
          <div>
            <span className="contact-detail-label">Location</span>
            <strong className="contact-detail-value">Zamboanga City, Philippines</strong>
          </div>
        </div>
        <div className="contact-detail-item">
          <span className="contact-detail-icon">
            <i className="ti ti-clock" aria-hidden="true" />
          </span>
          <div>
            <span className="contact-detail-label">Availability</span>
            <strong className="contact-detail-value">Open to remote work</strong>
          </div>
        </div>
        <div className="contact-detail-item">
          <span className="contact-detail-icon">
            <i className="ti ti-device-laptop" aria-hidden="true" />
          </span>
          <div>
            <span className="contact-detail-label">Work type</span>
            <strong className="contact-detail-value">Legal &amp; Admin VA</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact