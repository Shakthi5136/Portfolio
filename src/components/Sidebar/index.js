import './index.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faBars,
  faClose,
  faFile,
} from '@fortawesome/free-solid-svg-icons'

import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
     
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="var(--scondary-color)" />
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="var(--scondary-color)" />
        </NavLink>
     
        <NavLink
          activeclassname="active"
          className="project-link"
          to="/project"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faFile} color="var(--scondary-color)" />
        </NavLink>


        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="var(--scondary-color)" />
        </NavLink>

       


        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="var(--secondary-color)"
          size="3x"
          className='close-icon' />
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/slobodan-gaji%C4%87-006bb8b8/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="var(--scondary-color)"
              className="anchor-icon"
              size="2x"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/bobangajicsm"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="var(--scondary-color)"
              className="anchor-icon"
              size="2x"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="var(--secondary-color)"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar