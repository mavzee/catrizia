import './Skills.css'

const skills = [
  'Administrative Support',
  'Legal Case Management',
  'Client Relations',
  'Data Management',
  'Microsoft Office and Google Workspace',
  'Computer Literate',
  'Team Leadership',
  'Process Improvement',
]

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div>
        <p className="eyebrow">Skills</p>
        <h2>Core strengths for legal, administrative, and client support work.</h2>
      </div>

      <div className="skills-panel">
        <div className="tool-list" aria-label="Skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
