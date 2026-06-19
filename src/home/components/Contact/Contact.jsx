import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const directEmail = 'ivang@hyacinthindustriesllc.com'
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? ''
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? ''
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? ''

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
    value: directEmail,
  },
]

function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message:
          'EmailJS is not configured yet. Add the EmailJS keys in your env file first.',
      })
      return
    }

    setIsSending(true)
    setStatus({ type: '', message: '' })

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      })

      formRef.current?.reset()
      setStatus({
        type: 'success',
        message: 'Message sent successfully.',
      })
    } catch {
      setStatus({
        type: 'error',
        message: 'Message failed to send. Please check your EmailJS setup and try again.',
      })
    } finally {
      setIsSending(false)
    }
  }

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

        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <input type="hidden" name="contact_email" value={directEmail} />

          <div className="contact-form-header">
            <p className="contact-form-kicker">Send a message</p>
            <h3>Tell me what support you need</h3>
            <p>
              Share your goals, workload, or timeline and the message will be
              sent through EmailJS directly from this website.
            </p>
          </div>

          <div className="contact-form-grid">
            <label className="contact-field">
              <span>Name</span>
              <input
                type="text"
                name="from_name"
                placeholder="Your full name"
                required
              />
            </label>

            <label className="contact-field">
              <span>Email</span>
              <input
                type="email"
                name="reply_to"
                placeholder="you@example.com"
                required
              />
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
            <button className="primary-button" type="submit" disabled={isSending}>
              <i className="ti ti-send" aria-hidden="true" />
              {isSending ? 'Sending...' : 'Send Message'}
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

          <p
            className={`contact-form-note${status.type ? ` is-${status.type}` : ''}`}
            role="status"
          >
            {status.message ||
              `Messages are sent through EmailJS and delivered to ${directEmail}.`}
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
