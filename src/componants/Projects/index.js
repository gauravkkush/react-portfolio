import './index.scss'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faArrowRight,
  faArrowUpRightFromSquare,
  faBrain,
  faChartLine,
  faCode,
  faDatabase,
  faKey,
  faLayerGroup,
  faServer,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import {
  faBootstrap,
  faCss3Alt,
  faGithub,
  faHtml5,
  faJs,
  faMicrosoft,
  faNodeJs,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

const skillIcons = {
  React: faReact,
  'Node.js': faNodeJs,
  Express: faServer,
  MySQL: faDatabase,
  JWT: faKey,
  Python: faPython,
  CatBoost: faChartLine,
  'Machine Learning': faBrain,
  JavaScript: faJs,
  HTML: faHtml5,
  CSS: faCss3Alt,
  Bootstrap: faBootstrap,
  'ASP.NET': faMicrosoft,
  MVC: faLayerGroup,
  'C#': faCode,
  'SQL Server': faDatabase,
}

const projects = [
  {
    number: '01',
    name: 'Blog Application',
    description:
      'A full-stack blogging platform with JWT authentication, responsive interfaces, and complete create, read, update, and delete workflows.',
    outcome:
      'Designed around a clear separation between the React client, Express API, and MySQL persistence layer.',
    highlights: [
      'Secure user registration and login with JWT authentication',
      'Create, edit, publish, and manage blog posts',
      'Responsive React interface backed by REST APIs',
    ],
    repo: 'https://github.com/gauravkkush/blog-app',
    stack: ['React', 'Node.js', 'Express', 'MySQL', 'JWT'],
  },
  {
    number: '02',
    name: 'Weather Prediction System',
    description:
      'A machine learning system that predicts rainfall from historical weather data using CatBoost regression.',
    outcome:
      'Prepared and modelled weather datasets to achieve approximately 89% prediction accuracy.',
    highlights: [
      'Prepared historical weather data for model training',
      'Used CatBoost regression for rainfall prediction',
      'Evaluated the model at approximately 89% prediction accuracy',
    ],
    repo:
      'https://github.com/gauravkkush/Weather-and-Rainfall-Prediction-Using-Machine-Learning',
    stack: ['Python', 'CatBoost', 'Machine Learning'],
  },
  {
    number: '03',
    name: 'Task Manager',
    description:
      'A lightweight task management application with straightforward CRUD workflows and persistent browser storage.',
    outcome:
      'Focused on accessible interactions, responsive layout, and reliable state persistence between sessions.',
    highlights: [
      'Create, update, complete, and remove tasks',
      'Persist task data with browser local storage',
      'Responsive interface built with Bootstrap',
    ],
    repo: 'https://github.com/gauravkkush/to-do-list',
    stack: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    number: '04',
    name: 'City Tutor',
    description:
      'An online portal for connecting students with tutors, built with separate workflows for students, teachers, and administrators.',
    outcome:
      'Implemented an ASP.NET MVC application with a three-tier architecture and Microsoft SQL Server for structured data management.',
    highlights: [
      'Separate workflows for students, teachers, and administrators',
      'Three-tier application architecture',
      'Structured persistence with Microsoft SQL Server',
    ],
    stack: ['ASP.NET', 'MVC', 'C#', 'SQL Server'],
  },
]

const SkillTags = ({ stack }) => (
  <ul className="project-tags">
    {stack.map((tech) => (
      <li key={tech}>
        <FontAwesomeIcon icon={skillIcons[tech] || faCode} />
        {tech}
      </li>
    ))}
  </ul>
)

const Projects = () => {
  const sliderRef = useRef(null)
  const closeButtonRef = useRef(null)
  const [selectedProject, setSelectedProject] = useState(null)

  const scrollProjects = (direction) => {
    const slider = sliderRef.current
    if (!slider) return

    slider.scrollBy({
      left: direction * slider.clientWidth * 0.8,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    if (!selectedProject) return undefined

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedProject(null)
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', closeOnEscape)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [selectedProject])

  return (
    <main className="projects-page page-shell">
      <header className="page-header projects-header">
        <div>
          <p className="eyebrow">Featured projects</p>
          <h1>Things I’ve designed, built, and learned from.</h1>
        </div>
        <div className="slider-actions" aria-label="Project slider controls">
          <button
            type="button"
            onClick={() => scrollProjects(-1)}
            aria-label="Previous projects"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            type="button"
            onClick={() => scrollProjects(1)}
            aria-label="Next projects"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </header>

      <section
        className="project-slider"
        ref={sliderRef}
        aria-label="Project tiles"
      >
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div className="project-top">
              <span>{project.number}</span>
              {project.repo ? (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <FontAwesomeIcon
                    className="external-icon"
                    icon={faArrowUpRightFromSquare}
                  />
                </a>
              ) : (
                <span className="project-type">Academic project</span>
              )}
            </div>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <SkillTags stack={project.stack} />
            <button
              className="read-more"
              type="button"
              onClick={() => setSelectedProject(project)}
              aria-label={`Read more about ${project.name}`}
            >
              Read more
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </article>
        ))}
      </section>
      <p className="slider-hint">Scroll, swipe, or use the arrows to explore.</p>

      {selectedProject &&
        createPortal(
          <div
            className="project-modal-backdrop"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedProject(null)
            }}
          >
            <article
              className="project-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
            >
              <button
                className="modal-close"
                type="button"
                ref={closeButtonRef}
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
              <p className="modal-number">
                Project {selectedProject.number}
              </p>
              <h2 id="project-modal-title">{selectedProject.name}</h2>
              <p className="modal-description">
                {selectedProject.description}
              </p>
              <div className="modal-section">
                <h3>Project details</h3>
                <p>{selectedProject.outcome}</p>
                <ul className="project-highlights">
                  {selectedProject.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-section">
                <h3>Technologies</h3>
                <SkillTags stack={selectedProject.stack} />
              </div>
              {selectedProject.repo && (
                <a
                  className="button button-primary modal-link"
                  href={selectedProject.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  View on GitHub
                </a>
              )}
            </article>
          </div>
          ,
          document.body
        )}
    </main>
  )
}

export default Projects
