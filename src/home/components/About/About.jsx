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
        <p className="eyebrow">About Me</p>
        <h2>Professional Summary</h2>
      </div>

      <div className="about-content">
        <div className="about-copy">
          <p>
            A Political Science graduate from Western Mindanao State University with hands-on
            experience in legal administration, client communication, case management support, and
            business operations.
          </p>
          <p>
            I have worked with U.S.-based law firms, government agencies, and administrative teams,
            providing support in litigation processes, document management, client relations, and
            workflow coordination.
          </p>
          <p>
            My goal is to help businesses and professionals stay organized, improve efficiency, and
            maintain exceptional client service.
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