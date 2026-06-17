import './Hero.css'

const quickLinks = [
  { icon: 'ti-brand-facebook', text: 'Facebook', href: 'https://facebook.com/yourprofile' },
  { icon: 'ti-brand-instagram', text: 'Instagram', href: 'https://instagram.com/yourprofile' },
  { icon: 'ti-brand-linkedin', text: 'LinkedIn', href: 'https://www.linkedin.com/in/catrizia-patrimonio-076022417/' },
]

 

 

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        

        <p className="hero-kicker">
          Virtual Assistant | Administrative Support Specialist | Operations &
          Client Support
        </p>

        <h1 className="hero-name">
          Catrizia Jane
          <br />
          <em>Patrimonio</em>
        </h1>

        <p className="hero-text">
          Helping businesses streamline operations, manage administrative
          tasks, and deliver exceptional client support through reliable and
          efficient virtual assistance.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            Schedule a Consultation
          </a>

          <a href="#services" className="btn-secondary">
            Explore Services
          </a>
        </div>

        <div className="hero-contact-list" aria-label="Professional links">
          {quickLinks.map(({ icon, text, href }) => (
            <a
              className="chip"
              key={text}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`ti ${icon}`} aria-hidden="true" />
              {text}
            </a>
          ))}
        </div>

        
      </div>

      <div className="hero-showcase">
        <div className="portrait-shell">
          <div className="portrait-frame">
             

            <div className="portrait-img-area">
              <img
                src="/cat.jpg"
                alt="Catrizia Jane Patrimonio Legal Virtual Assistant"
              />
            </div>
          </div>

          <div className="hero-note-card">
            <span className="hero-note-label">Currently Accepting</span>
            <strong> Administrative Support</strong>
          </div>
        </div>

         
      </div>
    </section>
  )
}

export default Hero
