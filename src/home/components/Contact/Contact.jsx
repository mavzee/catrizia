import './Contact.css'

const details = [
  {
    icon: 'ti-map-pin',
    label: 'Location',
    value: 'Zamboanga City, Philippines',
  },
  {
    icon: 'ti-clock',
    label: 'Availability',
    value: 'Open to remote work',
  },
  {
    icon: 'ti-device-laptop',
    label: 'Work Type',
    value: 'Legal & Admin VA',
  },
  {
    icon: 'ti-mail',
    label: 'Direct Email',
    value: 'catriziap@gmail.com',
  },
]

function Contact() {
  const nextUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}${window.location.pathname}#contact`
      : ''

  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <h2 className="contact-title">
          <span>Need Professional Support For Your Legal Workflow?</span>
        </h2>

        <p className="contact-text">
          Let&apos;s discuss how I can help manage legal administration, client
          communication, document preparation, scheduling, and daily
          operational tasks with professionalism, confidentiality, and
          efficiency.
        </p>

        <div className="contact-detail-list">
          {details.map(({ icon, label, value }, index) => (
            <div
              className="contact-detail-item"
              key={label}
              style={{ '--delay': `${index * 0.12}s` }}
            >
              <span className="contact-detail-icon">
                <i className={`ti ${icon}`} aria-hidden="true" />
              </span>

              <div>
                <span className="contact-detail-label">{label}</span>
                <strong className="contact-detail-value">{value}</strong>
              </div>
            </div>
          ))}
        </div>

        <form
          className="contact-form"
          action="https://formsubmit.co/ivang@hyacinthindustriesllc.com"
          method="POST"
        >
          <input type="hidden" name="_next" value={nextUrl} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New portfolio inquiry" />

          <div className="contact-form-header">
            <p className="contact-form-kicker">Send a message</p>
            <h3>Tell me what support you need</h3>
            <p>
              Share your goals, workload, or timeline and the message will be
              sent from this website straight to her email inbox.
            </p>
          </div>

          <div className="contact-form-grid">
            <label className="contact-field">
              <span>Name</span>
              <input type="text" name="name" placeholder="Your full name" required />
            </label>

            <label className="contact-field">
              <span>Email</span>
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
          </div>

          <label className="contact-field">
            <span>Subject</span>
            <input
              type="text"
              name="subject"
              placeholder="What would you like help with?"
              required
            />
          </label>

          <label className="contact-field">
            <span>Message</span>
            <textarea
              name="message"
              rows="6"
              placeholder="Tell me about your business needs, timeline, and the kind of support you're looking for."
              required
            />
          </label>

          <div className="contact-actions">
            <button className="primary-button" type="submit">
              <i className="ti ti-send" aria-hidden="true" />
              Send Message
            </button>

            <a
              className="secondary-button"
              href="https://www.linkedin.com/in/catrizia-patrimonio-076022417/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ti ti-brand-linkedin" aria-hidden="true" />
              View LinkedIn
            </a>
          </div>

          <p className="contact-form-note">
            Messages are submitted through FormSubmit and delivered to
            {' '}ivang@hyacinthindustriesllc.com.
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
