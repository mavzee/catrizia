import './WhyHire.css'

const reasons = [
  {
    stat: '01',
    label: 'Reliable and Detail-Oriented',
    text: 'Consistent, careful, and thorough in every task - nothing falls through the cracks.',
  },
  {
    stat: '02',
    label: 'Strong Administrative and Organizational Skills',
    text: 'Experienced managing files, schedules, documents, and complex workflows with precision.',
  },
  {
    stat: '03',
    label: 'Excellent Written and Verbal Communication',
    text: 'Clear, professional, and timely communication with clients, teams, and stakeholders.',
  },
  {
    stat: '04',
    label: 'Experienced in Client Support and Team Coordination',
    text: 'Skilled at building client relationships and keeping team operations running smoothly.',
  },
  {
    stat: '05',
    label: 'Proficient in Microsoft Office, Google Workspace, and CRM Systems',
    text: 'Comfortable with the full suite of tools used in modern professional environments.',
  },
  {
    stat: '06',
    label: 'Quick Learner and Adaptable to New Tools and Processes',
    text: 'Fast to onboard into new systems, responsibilities, and evolving client needs.',
  },
  {
    stat: '07',
    label: 'Capable of Working Independently and Managing Multiple Tasks',
    text: 'Self-directed and organized enough to handle competing priorities without losing quality.',
  },
  {
    stat: '08',
    label: 'Committed to Delivering High-Quality Results',
    text: 'Every output reflects care, accountability, and a standard of excellence.',
  },
]

function WhyHire() {
  return (
    <section className="why-hire-section" id="why-hire">
      <div className="why-heading">
      

        <h2>Reliable support with the discipline legal and admin work requires.</h2>
      </div>

      <div className="reason-grid">
        {reasons.map(({ stat, label, text }) => (
          <article className="reason-card" key={label}>
            <span className="reason-stat">{stat}</span>
            <h3>{label}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default WhyHire
