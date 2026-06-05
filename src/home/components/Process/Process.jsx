import './Process.css'

const steps = [
  {
    number: '01',
    title: 'Discover',
    text: 'We define your support needs, preferred tools, and communication rhythm.',
    icon: 'ti-search',
  },
  {
    number: '02',
    title: 'Organize',
    text: 'I set up clear task lists, files, calendars, and repeatable workflows.',
    icon: 'ti-layout-list',
  },
  {
    number: '03',
    title: 'Support',
    text: 'You get consistent admin help, status updates, and reliable follow-through.',
    icon: 'ti-shield-check',
  },
]

function Process() {
  return (
    <section className="process-section" id="process">
      <div className="section-heading">
        <p className="eyebrow">Process</p>
        <h2>A simple way to bring support into your legal workflow.</h2>
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
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Process