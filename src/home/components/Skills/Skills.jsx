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
      <div>
        <p className="eyebrow">Skills</p>
        <h2>Core strengths for legal, administrative, and client support work.</h2>
      </div>

      <div className="skills-panel">
        <div className="skill-grid" aria-label="Skills">
          {skills.map(({ label, icon }) => (
            <div className="skill-chip" key={label}>
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