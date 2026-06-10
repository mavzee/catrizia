import samplePhoto from '../../../assets/sample-va-photo.svg'
import './Hero.css'

const contacts = [
  { icon: 'ti-brand-facebook', text: 'Facebook', href: 'https://facebook.com/yourprofile' },
  { icon: 'ti-brand-instagram', text: 'Instagram', href: 'https://instagram.com/yourprofile' },
  { icon: 'ti-brand-linkedin', text: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
]

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-bg-orb hero-bg-orb-one"></div>
      <div className="hero-bg-orb hero-bg-orb-two"></div>

      <div className="hero-copy">
         

        <h1 className="hero-name">
          Catrizia Jane
          <br />
          <em>Patrimonio</em>
        </h1>

        <div className="hero-role-line">
          <span className="role-divider"></span>
          <p className="hero-role">
            Legal Assistance · Administrative Support · Client Relations
          </p>
        </div>

        <p className="hero-text">
          Delivering dependable legal and administrative support for law firms,
          entrepreneurs, and professionals. Specializing in document management,
          client communication, scheduling coordination, and operational
          assistance with professionalism, discretion, and efficiency.
        </p>

        <div className="hero-contact-list">
            {contacts.map(({ icon, text, href }) => (
              <a className="chip" key={text} href={href} target="_blank" rel="noopener noreferrer">
                <i className={`ti ${icon}`}></i>
                {text}
              </a>
            ))}
        </div>

        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            Schedule a Consultation
          </a>

          <a href="#services" className="btn-secondary">
            Explore Services
          </a>
        </div>

         
      </div>

      <div className="hero-portrait-col">
        <div className="portrait-frame">
          <span className="portrait-tag">
            Available for Projects
          </span>

          <div className="portrait-img-area">
            <img
              src={samplePhoto}
              alt="Catrizia Jane Patrimonio Legal Virtual Assistant"
            />
          </div>
        </div>

        <div className="availability-card">
          <span className="avail-dot"></span>

          <div className="avail-text">
            <span className="avail-label">
              Currently Accepting
            </span>

            <strong className="avail-value">
              Legal & Administrative Support
            </strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero