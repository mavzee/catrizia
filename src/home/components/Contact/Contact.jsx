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
]

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-bg-orb contact-bg-orb-one" aria-hidden="true" />
      <div className="contact-bg-orb contact-bg-orb-two" aria-hidden="true" />

     <div className="contact-content">
  <p className="eyebrow">
    <span  aria-hidden="true" />
    Contact
  </p>
  <h2 className="contact-title">
    <span>Need Professional Support For Your Legal Workflow?</span>
  </h2>

  <p className="contact-text">
    Let’s discuss how I can help manage legal administration,
    client communication, document preparation, scheduling,
    and daily operational tasks with professionalism,
    confidentiality, and efficiency.
  </p>

  <div className="contact-actions">
    <a className="primary-button" href="mailto:hello@example.com">
      <i className="ti ti-mail" aria-hidden="true" />
      Email Me
    </a>

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
</div>

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
    </section>
  )
}

export default Contact