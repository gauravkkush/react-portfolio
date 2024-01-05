import React from 'react'
import './index.scss'
import Card from './Card'

const Projects = () => {
  const projects = [
    {
      id: 1,
      projectName: 'Awesome Project',
      description:
        'This is an amazing project showcasing the latest technology.',
      repoUrl: 'https://github.com/username/repo',
      deployment: 'https://example.com',
      techs: ['React'],
    },
    {
      id: 2,
      projectName: 'Cool Project',
      description: 'A cool project built with cutting-edge tools.',
      repoUrl: 'https://github.com/username/repo2',
      deployment: 'https://example2.com',
      techs: ['React', 'Java', 'C++'],
    },{
      id: 1,
      projectName: 'Awesome Project',
      description:
        'This is an amazing project showcasing the latest technology.',
      repoUrl: 'https://github.com/username/repo',
      deployment: 'https://example.com',
      techs: ['React'],
    },
    {
      id: 2,
      projectName: 'Cool Project',
      description: 'A cool project built with cutting-edge tools.',
      repoUrl: 'https://github.com/username/repo2',
      deployment: 'https://example2.com',
      techs: ['React', 'Java', 'C++'],
    },{
      id: 1,
      projectName: 'Awesome Project',
      description:
        'This is an amazing project showcasing the latest technology.',
      repoUrl: 'https://github.com/username/repo',
      deployment: 'https://example.com',
      techs: ['React'],
    },
    {
      id: 2,
      projectName: 'Cool Project',
      description: 'A cool project built with cutting-edge tools.',
      repoUrl: 'https://github.com/username/repo2',
      deployment: 'https://example2.com',
      techs: ['React', 'Java', 'C++'],
    },
    // Add more projects here...
  ]

  console.log(projects)

  return (
    <div className="projects-container">
      {projects.map((project, id) => {
        console.log(project) // Log each project

        // Additional check to ensure each project has the necessary properties
        if (
          project &&
          project.projectName &&
          project.description &&
          project.techs &&
          project.repoUrl &&
          project.deployment
        ) {
          return (
            <Card
              key={id}
              className="card"
              projectName={project.projectName}
              description={project.description}
              techs={project.techs}
              repoUrl={project.repoUrl}
              deployment={project.deployment}
            />
          )
        } else {
          // Log a warning if any project is missing required properties
          console.warn(`Invalid project data at index ${id}:`, project)
          return null // Skip rendering the card for this invalid project
        }
      })}
    </div>
  )
}

export default Projects
