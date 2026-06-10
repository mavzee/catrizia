import './Skills.css'

const skills = [
  { label: 'Administrative Support', icon: 'ti-files' },
  { label: 'Legal Case Management', icon: 'ti-gavel' },
  { label: 'Client Relations', icon: 'ti-users' },
  { label: 'Data Management', icon: 'ti-database' },
  { label: 'Microsoft Office', icon: 'ti-brand-windows' },
  { label: 'Google Workspace', icon: 'ti-brand-google' },
  { label: 'Team Leadership', icon: 'ti-crown' },
  { label: 'Process Improvement', icon: 'ti-settings-2' },
]

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-bg-accent" aria-hidden="true" />

      <div className="skills-heading">
        <p className="eyebrow">
          <span aria-hidden="true" />
          Skills
        </p>

        <h2>Core strengths for legal, administrative, and client support work.</h2>

        <p className="skills-intro">
          A focused skill set built around organization, confidentiality,
          communication, and dependable support for professional teams.
        </p>
      </div>

      <div className="skills-panel">
        <div className="skill-grid" aria-label="Skills">
          {skills.map(({ label, icon }, index) => (
            <div
              className="skill-chip"
              key={label}
              style={{ '--delay': `${index * 0.07}s` }}
            >
              <span className="skill-chip-icon">
                <i className={`ti ${icon}`} aria-hidden="true" />
              </span>

              <span className="skill-chip-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills