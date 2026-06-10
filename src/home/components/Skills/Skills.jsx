import { useState } from 'react'
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
  const [active, setActive] = useState(null)

  const handleChipClick = (label) => {
    setActive(active === label ? null : label)
  }

  const handleOverlayClick = () => {
    setActive(null)
  }

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
              className={`skill-chip${active === label ? ' skill-chip--active' : ''}`}
              key={label}
              style={{ '--delay': `${index * 0.07}s` }}
              onClick={() => handleChipClick(label)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleChipClick(label)}
              aria-pressed={active === label}
            >
              <span className="skill-chip-icon">
                <i className={`ti ${icon}`} aria-hidden="true" />
              </span>
              <span className="skill-chip-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="skill-spotlight-overlay"
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-label={active}
        >
          <div
            className="skill-spotlight-card"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="skill-spotlight-icon">
              <i className={`ti ${skills.find(s => s.label === active)?.icon}`} aria-hidden="true" />
            </span>
            <h3 className="skill-spotlight-label">{active}</h3>
            <button
              className="skill-spotlight-close"
              onClick={handleOverlayClick}
              aria-label="Close"
            >
              <i className="ti ti-x" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Skills