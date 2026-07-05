import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBriefcase,
  faEnvelope,
  faFolderOpen,
  faHouse,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const navItems = [
  { to: '/', label: 'Home', icon: faHouse, end: true },
  { to: '/about', label: 'About', icon: faUser },
  { to: '/experience', label: 'Experience', icon: faBriefcase },
  { to: '/projects', label: 'Projects', icon: faFolderOpen },
  { to: '/contact', label: 'Contact', icon: faEnvelope },
]

const Sidebar = () => (
  <aside className="nav-bar">
    <Link className="logo" to="/" aria-label="Gaurav Kushwaha — Home">
      <span>GK</span>
      <strong>Gaurav Kushwaha</strong>
    </Link>
    <nav aria-label="Main navigation">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <FontAwesomeIcon icon={item.icon} />
          <span><strong>{item.label}</strong></span>
        </NavLink>
      ))}
    </nav>
    <div className="nav-socials">
      <a target="_blank" rel="noreferrer" href="https://github.com/gauravkkush" aria-label="GitHub">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gauravkkush" aria-label="LinkedIn">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  </aside>
)

export default Sidebar
