import samplePhoto from '../../../assets/sample-va-photo.svg'
import './Hero.css'

const stats = [
  { label: 'Specialty', value: 'Legal', sub: 'Virtual Assistant' },
  { label: 'Focus', value: 'Client', sub: 'Relations' },
  { label: 'Mode', value: 'Remote', sub: 'Business support' },
]

const contacts = [
  { icon: 'ti-map-pin', text: 'Zamboanga City, PH' },
  { icon: 'ti-mail', text: 'your.email@example.com' },
  { icon: 'ti-phone', text: '+63 XXX XXX XXXX' },
  { icon: 'ti-brand-linkedin', text: 'LinkedIn Profile' },
]

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="eyebrow-dot" aria-hidden="true" />
          Legal Virtual Assistant Portfolio
        </p>

        <h1 className="hero-name">
          Catrizia Jane<br />
          <em>Patrimonio</em>
        </h1>

        <div className="hero-role-line">
          <span className="role-divider" aria-hidden="true" />
          <p className="hero-role">Legal VA · Administrative Support · Client Relations</p>
        </div>

        <p className="hero-text">
          Helping businesses stay organized through efficient administrative support,
          legal assistance, and client communication — from Zamboanga City, Philippines.
        </p>

        <div className="hero-contact-list" aria-label="Contact details">
          {contacts.map(({ icon, text }) => (
            <span className="chip" key={text}>
              <i className={`ti ${icon}`} aria-hidden="true" />
              {text}
            </span>
          ))}
        </div>

        <div className="hero-actions" aria-label="Portfolio actions">
          <a className="btn-primary" href="#contact">Contact me</a>
          <a className="btn-secondary" href="#services">View services ↓</a>
        </div>

        <dl className="hero-stats" aria-label="Professional highlights">
          {stats.map(({ label, value, sub }) => (
            <div className="stat-item" key={label}>
              <span className="stat-label-top">{label}</span>
              <dt className="stat-value">{value}</dt>
              <dd className="stat-sub">{sub}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="hero-portrait-col">
        <div className="portrait-frame">
          <span className="portrait-tag">Available</span>
          <div className="portrait-img-area">
            <img
              src={samplePhoto}
              alt="Portrait of Catrizia Jane Patrimonio, Legal Virtual Assistant"
            />
          </div>
        </div>

        <div className="availability-card">
          <span className="avail-dot" aria-hidden="true" />
          <div className="avail-text">
            <span className="avail-label">Currently accepting</span>
            <strong className="avail-value">Legal &amp; admin support</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero