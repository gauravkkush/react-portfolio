import React from 'react'
import { Link } from 'react-router-dom'
import '../index.scss'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const Card = ({ id, projectName, description, repoUrl, deployment, techs }) => {
  const techTags = techs && Array.isArray(techs) ? techs : []
  console.log(techTags)
  return (
    
      <div className="card">
        <h3>{projectName}</h3>
        <p>{description}</p>
        <div className="links">
          <Link to={repoUrl}>
            <FontAwesomeIcon className="link" icon={faGithubSquare} />
          </Link>
          <Link to={deployment}>
            <FontAwesomeIcon className="link" icon={faLink} />
          </Link>
        </div>
        <div className="tags">
          {techTags.map((tag, index) => (
            <div key={index} className="tag">
              {tag}
            </div>
          ))}
        </div>
      </div>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
  deployment: PropTypes.string.isRequired,
  techs: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Card
