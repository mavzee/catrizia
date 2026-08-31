import './About.css'

const credentials = [
  {
    title: 'B.A. Political Science',
    detail: 'Western Mindanao State University',
  },
  {
    title: 'U.S. Law Firm Experience',
    detail: 'Litigation & legal admin support',
  },
  {
    title: 'Remote-Ready',
    detail: 'Government, legal & admin teams',
  },
]

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-heading">
        

        <h2>Professional Summary</h2>
      </div>

      <div className="about-layout">
        <div className="about-story">
          <p className="about-lead">
            I am a highly organized and detail-oriented Virtual Assistant with
            experience in administrative support, client communication, data
            management, team coordination, and business operations.
          </p>

          <div className="about-copy">
            <p>
              My professional background includes supporting U.S.-based
              companies, legal teams, and government offices, where I developed
              strong skills in document management, customer service, workflow
              coordination, research, and process improvement.
            </p>
            <p>
              I am passionate about helping businesses stay organized, improve
              productivity, and maintain smooth day-to-day operations while
              providing excellent support to clients and teams.
            </p>
          </div>
        </div>

        <div className="about-credentials">
          {credentials.map(({ title, detail }) => (
            <article className="credential-card" key={title}>
              <span className="credential-label">{title}</span>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
