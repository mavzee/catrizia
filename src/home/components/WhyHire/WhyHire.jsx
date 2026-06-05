import './WhyHire.css'

const reasons = [
  { icon: 'ti-briefcase', label: 'Legal and administrative experience' },
  { icon: 'ti-messages', label: 'Strong communication skills' },
  { icon: 'ti-device-laptop', label: 'Computer literate' },
  { icon: 'ti-checklist', label: 'Organized and detail-oriented' },
  { icon: 'ti-crown', label: 'Team leadership experience' },
  { icon: 'ti-bolt', label: 'Fast learner and adaptable' },
]

function WhyHire() {
  return (
    <section className="why-hire-section" id="why-hire">
      <div className="section-heading centered-heading">
        <p className="eyebrow">Why Hire Me?</p>
        <h2>Reliable support with the discipline legal and admin work requires.</h2>
      </div>

      <div className="reason-grid">
        {reasons.map(({ icon, label }) => (
          <article className="reason-card" key={label}>
            <span className="reason-icon">
              <i className={`ti ${icon}`} aria-hidden="true" />
            </span>
            <h3>{label}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}

export default WhyHire