import './WhyHire.css'

const reasons = [
  'Legal and administrative experience',
  'Strong communication skills',
  'Computer literate',
  'Organized and detail-oriented',
  'Team leadership experience',
  'Fast learner and adaptable',
]

function WhyHire() {
  return (
    <section className="why-hire-section" id="why-hire">
      <div className="section-heading centered-heading">
        <p className="eyebrow">Why Hire Me?</p>
        <h2>Reliable support with the discipline legal and admin work requires.</h2>
      </div>

      <div className="reason-grid">
        {reasons.map((reason) => (
          <article className="reason-card" key={reason}>
            <span aria-hidden="true">✓</span>
            <h3>{reason}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}

export default WhyHire
