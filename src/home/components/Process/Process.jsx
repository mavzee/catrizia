import './Process.css'

const steps = [
  {
    number: '01',
    title: 'Consultation',
    text: 'We identify your legal support needs, preferred communication channels, tools, timelines, and administrative priorities.',
    icon: 'ti-search',
  },
  {
    number: '02',
    title: 'Workflow Setup',
    text: 'I organize task lists, documents, calendars, case-related files, and repeatable systems for smoother daily operations.',
    icon: 'ti-layout-list',
  },
  {
    number: '03',
    title: 'Ongoing Support',
    text: 'You receive consistent administrative assistance, progress updates, organized follow-through, and reliable client support.',
    icon: 'ti-shield-check',
  },
]

function Process() {
  return (
    <section className="process-section" id="process">
      <div className="process-heading">
         

        <h2>A structured approach to legal and administrative support.</h2>

        <p className="process-intro">
          A clear, professional workflow designed to help you delegate tasks
          efficiently and maintain organized day-to-day operations.
        </p>
      </div>

      <div className="timeline">
        {steps.map(({ number, title, text, icon }) => (
          <article className="timeline-step" key={title}>
            <div className="timeline-step-header">
              <span className="step-number">{number}</span>
              <span className="step-icon">
                <i className={`ti ${icon}`} aria-hidden="true" />
              </span>
            </div>

            <div className="timeline-step-body">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Process
