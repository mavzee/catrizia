import './WhyHire.css'

const reasons = [
  {
    icon: 'ti-briefcase',
    label: 'Legal and Administrative Experience',
    text: 'Practical support background for legal, government, and administrative environments.',
  },
  {
    icon: 'ti-messages',
    label: 'Professional Communication',
    text: 'Clear, respectful, and timely communication with clients, teams, and stakeholders.',
  },
  {
    icon: 'ti-device-laptop',
    label: 'Technology Proficiency',
    text: 'Comfortable using digital tools, office platforms, and remote work systems.',
  },
  {
    icon: 'ti-checklist',
    label: 'Highly Organized',
    text: 'Detail-oriented support for files, schedules, documents, and daily workflows.',
  },
  {
    icon: 'ti-crown',
    label: 'Leadership Experience',
    text: 'Able to coordinate tasks, guide priorities, and support team-based operations.',
  },
  {
    icon: 'ti-bolt',
    label: 'Adaptable Fast Learner',
    text: 'Quick to understand new systems, processes, responsibilities, and client needs.',
  },
]

function WhyHire() {
  return (
    <section className="why-hire-section" id="why-hire">
      <div className="why-bg-accent" aria-hidden="true" />

      <div className="section-heading centered-heading why-heading">
        <p className="eyebrow">
          <span  aria-hidden="true" />
          Why Hire Me?
        </p>

        <h2>Reliable support with the discipline legal and admin work requires.</h2>

         
      </div>

      <div className="reason-grid">
        {reasons.map(({ icon, label, text }, index) => (
          <article
            className="reason-card"
            key={label}
            style={{ '--delay': `${index * 0.08}s` }}
          >
            <span className="reason-number">
              {String(index + 1).padStart(2, '0')}
            </span>

            <span className="reason-icon">
              <i className={`ti ${icon}`} aria-hidden="true" />
            </span>

            <div className="reason-content">
              <h3>{label}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default WhyHire