import './Services.css'

const services = [
  {
    title: 'Administrative Support',
    text: 'Organized day-to-day assistance for files, records, workflows, and operational tasks.',
  },
  {
    title: 'Legal Virtual Assistance',
    text: 'Support for litigation processes, case documentation, legal admin tasks, and firm workflows.',
  },
  {
    title: 'Email and Calendar Management',
    text: 'Inbox organization, schedule coordination, meeting reminders, and professional follow-through.',
  },
  {
    title: 'Data Entry and CRM Management',
    text: 'Accurate data encoding, client database updates, records maintenance, and CRM organization.',
  },
  {
    title: 'Client Communication',
    text: 'Clear, respectful communication that supports strong client relationships and service quality.',
  },
  {
    title: 'Document Preparation',
    text: 'Drafting, formatting, organizing, and managing documents for business and legal support needs.',
  },
]

function Services() {
  return (
    <section className="content-section" id="services">
      <div className="section-heading centered-heading">
        <p className="eyebrow">Services</p>
        <h2>Administrative and legal support services for busy professionals.</h2>
      </div>

      <div className="service-grid">
        {services.map((service, index) => (
          <article className="service-card" key={service.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
