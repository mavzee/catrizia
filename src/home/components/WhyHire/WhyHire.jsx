import './WhyHire.css'

const reasons = [
  {
    icon: 'ti-shield-check',
    label: 'Reliable and Detail-Oriented',
    text: 'Consistent, careful, and thorough in every task — nothing falls through the cracks.',
  },
  {
    icon: 'ti-clipboard-list',
    label: 'Strong Administrative and Organizational Skills',
    text: 'Experienced managing files, schedules, documents, and complex workflows with precision.',
  },
  {
    icon: 'ti-messages',
    label: 'Excellent Written and Verbal Communication',
    text: 'Clear, professional, and timely communication with clients, teams, and stakeholders.',
  },
  {
    icon: 'ti-users',
    label: 'Experienced in Client Support and Team Coordination',
    text: 'Skilled at building client relationships and keeping team operations running smoothly.',
  },
  {
    icon: 'ti-device-laptop',
    label: 'Proficient in Microsoft Office, Google Workspace, and CRM Systems',
    text: 'Comfortable with the full suite of tools used in modern professional environments.',
  },
  {
    icon: 'ti-bolt',
    label: 'Quick Learner and Adaptable to New Tools and Processes',
    text: 'Fast to onboard into new systems, responsibilities, and evolving client needs.',
  },
  {
    icon: 'ti-adjustments-horizontal',
    label: 'Capable of Working Independently and Managing Multiple Tasks',
    text: 'Self-directed and organized enough to handle competing priorities without losing quality.',
  },
  {
    icon: 'ti-rosette',
    label: 'Committed to Delivering High-Quality Results',
    text: 'Every output reflects care, accountability, and a standard of excellence.',
  },
]

function WhyHire() {
  return (
    <section className="why-hire-section" id="why-hire">
      <div className="why-bg-accent" aria-hidden="true" />

      <div className="section-heading centered-heading why-heading">
         

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