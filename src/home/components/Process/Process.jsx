import './Process.css'

const steps = [
  ['01', 'Discover', 'We define your support needs, preferred tools, and communication rhythm.'],
  ['02', 'Organize', 'I set up clear task lists, files, calendars, and repeatable workflows.'],
  ['03', 'Support', 'You get consistent admin help, status updates, and reliable follow-through.'],
]

function Process() {
  return (
    <section className="process-section" id="process">
      <div className="section-heading">
        <p className="eyebrow">Process</p>
        <h2>A simple way to bring support into your legal workflow.</h2>
      </div>

      <div className="timeline">
        {steps.map(([number, title, text]) => (
          <article key={title}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Process
