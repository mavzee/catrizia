import './Services.css'

const services = [
  {
    icon: 'ti-files',
    title: 'Administrative Support',
    text: 'Organized day-to-day assistance for files, records, workflows, and operational tasks.',
  },
  {
    icon: 'ti-gavel',
    title: 'Legal Virtual Assistance',
    text: 'Support for litigation processes, case documentation, legal admin tasks, and firm workflows.',
  },
  {
    icon: 'ti-mail',
    title: 'Email & Calendar Management',
    text: 'Inbox organization, schedule coordination, meeting reminders, and professional follow-through.',
  },
  {
    icon: 'ti-database',
    title: 'Data Entry & CRM Management',
    text: 'Accurate data encoding, client database updates, records maintenance, and CRM organization.',
  },
  {
    icon: 'ti-messages',
    title: 'Client Communication',
    text: 'Clear, respectful communication that supports strong client relationships and service quality.',
  },
  {
    icon: 'ti-file-text',
    title: 'Document Preparation',
    text: 'Drafting, formatting, organizing, and managing documents for business and legal support needs.',
  },
]

function Services() {
  return (
    <section className="content-section" id="services">
      <div className="centered-heading section-heading">
        <p className="eyebrow">Services</p>
        <h2>Administrative and legal support services for busy professionals.</h2>
      </div>

      <div className="service-grid">
        {services.map((service, index) => (
          <article className="service-card" key={service.title}>
            <div className="service-card-top">
              <span className="service-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="service-icon">
                <i className={`ti ${service.icon}`} aria-hidden="true" />
              </span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services