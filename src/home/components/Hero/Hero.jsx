import samplePhoto from '../../../assets/sample-va-photo.svg'
import './Hero.css'

const stats = [
  ['Legal VA', 'Administrative support'],
  ['Client', 'Relations'],
  ['Remote', 'Business support'],
]

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Legal Virtual Assistant Portfolio</p>
        <h1>Catrizia Jane T. Patrimonio</h1>
        <p className="hero-text">
          Legal Virtual Assistant, Administrative Support Specialist, and Client Relations
          professional helping businesses stay organized through efficient administrative support,
          legal assistance, and client communication.
        </p>

        <div className="hero-contact-list" aria-label="Contact details">
          <span>Zamboanga City, Philippines</span>
          <span>your.email@example.com</span>
          <span>+63 XXX XXX XXXX</span>
          <span>LinkedIn Profile</span>
        </div>

        <div className="hero-actions" aria-label="Portfolio actions">
          <a className="primary-button" href="#contact">Contact me</a>
          <a className="secondary-button" href="#services">View services</a>
        </div>

        <dl className="hero-stats" aria-label="Professional highlights">
          {stats.map(([value, label]) => (
            <div key={label}>
              <dt>{value}</dt>
              <dd>{label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="hero-portrait">
        <img src={samplePhoto} alt="Sample portrait of a professional virtual assistant" />
        <div className="portrait-note">
          <span>Available for</span>
          <strong>Legal and admin support</strong>
        </div>
      </div>
    </section>
  )
}

export default Hero
