import React from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faReact } from '@fortawesome/free-brands-svg-icons'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const Projects = () => {
  const projects = [
    {
      projectName: 'Blog App',
      description:
        ' My Blog App is a web application that allows users to read, write, and publish blog posts using a user-friendly text editor to compose blog content with ease. Users can register and log in to create and manage their blog posts.',
      repoUrl: 'https://github.com/gauravkkush/blog-app',
      deployment: 'https://example.com',
      techs: ['React', 'NodeJs', 'mySQL'],
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
      date: 'May, 2023',
    },
    {
      projectName: 'Task Manager',
      description:
        'A simple task manager built using HTML, CSS, Bootstrap, and JavaScript. Utilized local browser storage to implement data persistence, allowing users to access their task data across browser sessions ',
      repoUrl: 'https://github.com/gauravkkush/to-do-list',
      deployment: 'https://example2.com',
      techs: ['HTML', 'CSS', 'Javascript'],
      date: 'August, 2022',
    },
    {
      projectName: 'City Tutor',
      description:
        'Developed an online portal using ASP.NET with MVC architecture, to find tutors online. mplemented a three-tiered user interface design, with sections for User, Admin, and Teacher, and utilized MS SQL Server Database at the server-side for efficient data management.',
      repoUrl: 'https://github.com/username/city-tutor',
      deployment: 'https://example2.com',
      techs: ['ASP.NET', 'MVC', 'C#'],
      date: 'August, 2019',
    },
    // {
    //   projectName: 'Awesome Project',
    //   description:
    //     'This is an amazing project showcasing the latest technology.',
    //   repoUrl: 'https://github.com/username/repo',
    //   deployment: 'https://example.com',
    //   techs: ['Demo'],
    //   date: 'yyyy',
    // },
    // Add more projects here...
  ]

  return (
    <div className="projects-container">
      <VerticalTimeline>
        {projects.map((project, id) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'black', color: 'white' }}
              contentArrowStyle={{
                borderRight: '7px solid  black',
              }}
              date={project.date}
              iconStyle={{ background: 'black', color: 'white' }}
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
