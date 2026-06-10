import './Services.css'

const services = [
  {
    category: 'Administrative & Executive Support',
    icon: 'ti-briefcase',
    items: [
      'Email & Calendar Management',
      'Data Entry & Database Management',
      'Document Preparation & Organization',
      'Internet Research',
      'File & Records Management',
    ],
  },
  {
    category: 'Operations & Business Support',
    icon: 'ti-settings',
    items: [
      'CRM Management',
      'Project Coordination',
      'Workflow Monitoring',
      'Process Documentation',
      'Reporting & Tracking',
    ],
  },
  {
    category: 'Client Support',
    icon: 'ti-users',
    items: [
      'Customer Service',
      'Client Communication',
      'Follow-ups & Appointment Scheduling',
      'Inbox Management',
    ],
  },
  {
    category: 'Specialized Support',
    icon: 'ti-gavel',
    items: [
      'Legal Administrative Assistance',
      'Case Management Support',
      'Compliance & Documentation Support',
    ],
  },
]

function Services() {
  return (
    <section className="content-section" id="services">
      <div className="centered-heading section-heading">
         
        <h2>Administrative and legal support services for busy professionals.</h2>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.category}>
            <div className="service-card-top">
              <span className="service-icon">
                <i className={`ti ${service.icon}`} aria-hidden="true" />
              </span>
              <h3>{service.category}</h3>
            </div>
            <ul className="service-list">
              {service.items.map((item) => (
                <li key={item}>
                  <i className="ti ti-circle-check" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services