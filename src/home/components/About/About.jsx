import './About.css'

const highlights = [
  { icon: 'ti-school', label: 'B.S. Political Science', sub: 'Western Mindanao State University' },
  { icon: 'ti-briefcase', label: 'U.S. Law Firm Experience', sub: 'Litigation & legal admin support' },
  { icon: 'ti-globe', label: 'Remote-Ready', sub: 'Government, legal & admin teams' },
]

function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-heading">
        
        <h2>Professional Summary</h2>
      </div>

      <div className="about-content">
        <div className="about-copy">
          <p>
           I am a highly organized and detail-oriented Virtual Assistant with experience in administrative support,
           client communication, data management, team coordination, and business operations.
          </p>
          <p>
            My professional background includes supporting U.S.-based companies, legal teams, and
            government offices, where I developed strong skills in document management, customer
            service, workflow coordination, research, and process improvement.
          </p>
          <p>
            I am passionate about helping businesses stay organized, improve productivity, and maintain
            smooth day-to-day operations while providing excellent support to clients and teams.
          </p>
        </div>

        <div className="about-highlights">
          {highlights.map(({ icon, label, sub }) => (
            <div className="highlight-item" key={label}>
              <span className="highlight-icon">
                <i className={`ti ${icon}`} aria-hidden="true" />
              </span>
              <div>
                <strong className="highlight-label">{label}</strong>
                <span className="highlight-sub">{sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About