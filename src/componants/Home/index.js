import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => (
  <main className="home-page page-shell">
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Hello, I’m Gaurav Kushwaha</p>  
        <h1>
          I build reliable backend systems
          <span> and the automation that keeps them reliable.</span>
        </h1>
        <p className="hero-summary">
          Software Engineer with 2 years of experience across Java backend
          development and quality engineering. I work with Spring Boot, REST
          APIs, microservices, Playwright, and API automation.
        </p>
        <div className="hero-actions">
          <Link to="/projects" className="button button-primary">
            View my work
          </Link>
          <Link to="/contact" className="button button-secondary">
            Get in touch
          </Link>
        </div>
      </div>

      <aside className="hero-card" aria-label="Core expertise">
        <p className="card-label">Core expertise</p>
        <ul>
          <li>
            <span>01</span>
            Java & Spring Boot
          </li>
          <li>
            <span>02</span>
            REST APIs & Microservices
          </li>
          <li>
            <span>03</span>
            API & UI Automation
          </li>
        </ul>
        <div className="availability">
          <span className="status-dot" />
          Open to backend engineering opportunities
        </div>
      </aside>
    </section>

    <section className="impact-strip" aria-label="Career highlights">
      <div>
        <strong>2 years</strong>
        <span>Professional experience</span>
      </div>
      <div>
        <strong>12</strong>
        <span>Enterprise services supported</span>
      </div>
      <div>
        <strong>1,400+</strong>
        <span>Items validated and closed</span>
      </div>
      <div>
        <strong>~30 min</strong>
        <span>Reduced regression runtime</span>
      </div>
    </section>
  </main>
)

export default Home
