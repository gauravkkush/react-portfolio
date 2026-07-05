import './index.scss'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faArrowDown,
  faArrowUp,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'

const roles = [
  {
    company: 'Adani Digital Labs',
    role: 'Executive – Technology',
    focus: 'QA Automation Engineering',
    summary:
      'Building maintainable automation and investigating quality across enterprise-scale products.',
    achievements: [
      'Enhanced a Playwright and TypeScript UI automation framework used across enterprise services.',
      'Reduced manual regression execution from several hours to approximately 30 minutes.',
      'Built reusable Java, REST Assured, and Cucumber API suites for Flight Tracker services.',
      'Validated and closed 1,400+ defects, enhancements, and change requests across 12 services.',
      'Used MongoDB and Grafana to validate backend behaviour and investigate production issues.',
    ],
    tech: ['Java', 'TypeScript', 'Playwright', 'REST Assured', 'MongoDB', 'Grafana'],
  },
  {
    company: 'Birlasoft',
    role: 'Software Development Apprentice',
    focus: 'Java Full Stack Development',
    summary:
      'Developed enterprise applications and services using Java, Spring Boot, React, and MySQL.',
    achievements: [
      'Developed CRUD applications with Spring Boot and React.',
      'Built REST APIs and persistence layers using JPA, Hibernate, and MySQL.',
      'Contributed to microservices development and Eureka-based service discovery.',
      'Improved application performance and API response times.',
    ],
    tech: ['Java', 'Spring Boot', 'REST APIs', 'React', 'MySQL', 'Microservices'],
  },
]

const TechTags = ({ technologies, company }) => (
  <ul className="experience-tech" aria-label={`${company} technologies`}>
    {technologies.map((tech) => (
      <li key={tech}>{tech}</li>
    ))}
  </ul>
)

const Experience = () => {
  const sliderRef = useRef(null)
  const closeButtonRef = useRef(null)
  const [selectedRole, setSelectedRole] = useState(null)

  const scrollExperience = (direction) => {
    const slider = sliderRef.current
    if (!slider) return

    slider.scrollBy({
      top: direction * slider.clientHeight * 0.8,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    if (!selectedRole) return undefined

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedRole(null)
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', closeOnEscape)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [selectedRole])

  return (
    <main className="experience-page page-shell">
      <header className="page-header experience-header">
        <div>
          <p className="eyebrow">Professional experience</p>
          <h1>Building enterprise software—and making it dependable.</h1>
        </div>
        <div className="experience-actions" aria-label="Experience slider controls">
          <button
            type="button"
            onClick={() => scrollExperience(-1)}
            aria-label="Previous experience"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
          <button
            type="button"
            onClick={() => scrollExperience(1)}
            aria-label="Next experience"
          >
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
        </div>
      </header>

      <section
        className="experience-slider"
        ref={sliderRef}
        aria-label="Professional experience"
      >
        {roles.map((role, index) => (
          <article className="experience-card" key={role.company}>
            <div className="experience-card-top">
              <span>0{index + 1}</span>
              <span>{role.focus}</span>
            </div>
            <h2>{role.company}</h2>
            <h3>{role.role}</h3>
            <p>{role.summary}</p>
            <TechTags technologies={role.tech} company={role.company} />
            <button
              className="experience-read-more"
              type="button"
              onClick={() => setSelectedRole({ ...role, number: `0${index + 1}` })}
              aria-label={`Read more about ${role.role} at ${role.company}`}
            >
              Read more
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </article>
        ))}
      </section>
      <p className="experience-hint">
        Scroll up or down, swipe, or use the arrows to explore.
      </p>

      {selectedRole &&
        createPortal(
          <div
            className="experience-modal-backdrop"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedRole(null)
            }}
          >
            <article
              className="experience-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="experience-modal-title"
            >
              <button
                className="experience-modal-close"
                type="button"
                ref={closeButtonRef}
                onClick={() => setSelectedRole(null)}
                aria-label="Close experience details"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>

              <p className="experience-modal-number">
                Experience {selectedRole.number}
              </p>
              <h2 id="experience-modal-title">{selectedRole.company}</h2>
              <p className="experience-modal-role">{selectedRole.role}</p>
              <p className="experience-modal-summary">
                {selectedRole.summary}
              </p>

              <section className="experience-modal-section">
                <h3>Key contributions</h3>
                <ul className="experience-achievements">
                  {selectedRole.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </section>

              <section className="experience-modal-section">
                <h3>Technologies</h3>
                <TechTags
                  technologies={selectedRole.tech}
                  company={selectedRole.company}
                />
              </section>
            </article>
          </div>,
          document.body
        )}
    </main>
  )
}

export default Experience
