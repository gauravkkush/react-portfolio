import React from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faReact,
  faPython,
  faHtml5,
} from '@fortawesome/free-brands-svg-icons'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { faDisplay } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
  const projects = [
    {
      projectName: 'Blog App',
      description:
        ' My Blog App is a web application that allows users to read, write, and publish blog posts using a user-friendly text editor to compose blog content with ease. Users can register and log in to create and manage their blog posts.',
      repoUrl: 'https://github.com/gauravkkush/blog-app',
      deployment: 'https://example.com',
      techs: ['React', 'NodeJs', 'mySQL'],
      icon: faReact,
      date: 'Sep, 2023',
    },
    {
      projectName: 'Weather & Rainfall Prediction using ML',
      description:
        'The project aimed to enhance the accuracy of weather and rainfall prediction Project using machine learning technique, Catboost.',
      repoUrl:
        'https://github.com/gauravkkush/Weather-and-Rainfall-Prediction-Using-Machine-Learning',
      deployment: 'https://example2.com',
      techs: ['Python', 'ML'],
      icon: faPython,
      date: 'May, 2023',
    },
    {
      projectName: 'Task Manager',
      description:
        'A simple task manager built using HTML, CSS, Bootstrap, and JavaScript. Utilized local browser storage to implement data persistence, allowing users to access their task data across browser sessions ',
      repoUrl: 'https://github.com/gauravkkush/to-do-list',
      deployment: 'https://example2.com',
      techs: ['HTML', 'CSS', 'Javascript'],
      icon: faHtml5,
      date: 'August, 2022',
    },
    {
      projectName: 'City Tutor',
      description:
        'Developed an online portal using ASP.NET with MVC architecture, to find tutors online. Implemented a three-tiered user interface design, with sections for User, Admin, and Teacher, and utilized MS SQL Server Database at the server-side for efficient data management.',
      repoUrl: 'https://github.com/username/city-tutor',
      deployment: 'https://example2.com',
      techs: ['ASP.NET', 'MVC', 'C#'],
      icon: faDisplay,
      date: 'August, 2019',
    },
    {
      projectName: 'Awesome Project',
      description:
        'This is an amazing project showcasing the latest technology.',
      repoUrl: 'https://github.com/username/repo',
      deployment: 'https://example.com',
      techs: ['Demo'],
      date: 'yyyy',
    },
    // Add more projects here...
  ]

  return (
    <div className="projects-container">
      <VerticalTimeline>
        {projects.map((project) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#115173', color: 'white' }}
              contentArrowStyle={{
                borderRight: '7px solid  white',
              }}
              date={project.date}
              iconStyle={{ background: '#022c43', color: 'white' }}
              icon={<FontAwesomeIcon icon={project.icon}></FontAwesomeIcon>}
            >
              <h3 className="vertical-timeline-element-title">
                <div className="projectName">{project.projectName}</div>
                <div className="tech">
                  {project.techs.map((tech) => {
                    return (
                      <h4 className="vertical-timeline-element-subtitle">
                        {tech}
                      </h4>
                    )
                  })}
                  <a href={project.repoUrl}>
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </h3>

              <p className="desc">{project.description}</p>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </div>
  )
}

export default Projects
