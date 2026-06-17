import './Skills.css'

const skills = [
  { label: 'Administrative Support', icon: 'ti-files' },
  { label: 'Virtual Assistance', icon: 'ti-device-laptop' },
  { label: 'Client & Customer Relations', icon: 'ti-users' },
  { label: 'Data Entry & Data Management', icon: 'ti-database' },
  { label: 'CRM Management', icon: 'ti-address-book' },
  { label: 'Research & Documentation', icon: 'ti-book' },
  { label: 'Email & Calendar Management', icon: 'ti-mail' },
  { label: 'Microsoft Office Suite', icon: 'ti-brand-windows' },
  { label: 'Google Workspace', icon: 'ti-brand-google' },
  { label: 'Team Leadership & Training', icon: 'ti-crown' },
  { label: 'Process Improvement', icon: 'ti-settings-2' },
  { label: 'Problem Solving', icon: 'ti-bulb' },
  { label: 'Attention to Detail', icon: 'ti-zoom-check' },
  { label: 'Time Management', icon: 'ti-clock' },
  { label: 'Computer Proficiency', icon: 'ti-cpu' },
]

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-heading">
        

        <h2>Core strengths for legal, administrative, and client support work.</h2>

        <p className="skills-intro">
          A focused skill set built around organization, confidentiality,
          communication, and dependable support for professional teams.
        </p>
      </div>

      <div className="skills-panel">
        {skills.map(({ label, icon }) => (
          <article className="skill-group-card" key={label}>
            <div className="skill-group-head">
              <span className="skill-group-icon">
                <i className={`ti ${icon}`} aria-hidden="true" />
              </span>
              <h3>{label}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
