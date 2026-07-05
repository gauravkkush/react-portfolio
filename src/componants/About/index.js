import './index.scss'

const skillGroups = [
  { title: 'Languages', items: ['Java', 'JavaScript', 'TypeScript', 'SQL'] },
  {
    title: 'Backend',
    items: ['Spring Boot', 'REST APIs', 'Microservices', 'JPA', 'Hibernate'],
  },
  {
    title: 'Automation',
    items: ['Playwright', 'REST Assured', 'Cucumber', 'Postman'],
  },
  {
    title: 'Data & tools',
    items: ['MySQL', 'MongoDB', 'Git', 'Grafana', 'React.js'],
  },
]

const About = () => (
  <main className="about-page page-shell">
    <header className="page-header">
      <p className="eyebrow">About me</p>
      <h1>Engineering software from implementation to confidence.</h1>
    </header>

    <section className="about-grid">
      <div className="about-copy">
        <p>
          I’m a Software Engineer focused on Java backend development, with
          hands-on experience building enterprise applications and the
          automation systems that protect their quality.
        </p>
        <p>
          At Birlasoft, I developed Spring Boot services, REST APIs, and React
          interfaces backed by MySQL. At Adani Digital Labs, I work across 12
          enterprise services, creating UI and API automation and investigating
          application behaviour from the browser through to the database.
        </p>
        <p>
          That combination has shaped how I work: understand the system end to
          end, write maintainable code, and build quality in from the start. My
          goal is to keep growing as a Backend Software Engineer working on
          clean, scalable systems.
        </p>
      </div>
      <blockquote>
        “Development experience helps me test beyond the surface. Quality
        engineering helps me build with failure in mind.”
      </blockquote>
    </section>

    <section className="skills-section">
      <div className="section-heading">
        <p className="eyebrow">Technical toolkit</p>
        <h2>Skills I use to build and validate software</h2>
      </div>
      <div className="skill-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  </main>
)

export default About
