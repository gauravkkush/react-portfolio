import './index.scss'
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {CIcon} from '@coreui/icons-react'
import {cibLeetcode} from '@coreui/icons'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const formRef = useRef()
  const [status, setStatus] = useState('')

  const sendEmail = async (event) => {
    event.preventDefault()
    setStatus('Sending…')

    try {
      await emailjs.sendForm(
        'gmail',
        'email_temp',
        formRef.current,
        'xpJYBzpUXujNEBSQW'
      )
      formRef.current.reset()
      setStatus('Thanks—your message has been sent.')
    } catch {
      setStatus(
        'The form could not send right now. Please email me directly instead.'
      )
    }
  }

  return (
    <main className="contact-page page-shell">
      <div className="contact-layout">
        <section className="contact-intro">
          <p className="eyebrow">Contact</p>
          <h1>Let’s build something dependable.</h1>
          <p>
            I’m interested in backend engineering opportunities and thoughtful
            software projects. If my <b>Java</b>, <b>Spring Boot</b>, or{' '}
            <b>automation</b> experience could help your team, I’d be glad to
            hear from you.
          </p>
          <div className="contact-links">
            <a href="mailto:kkushgaurav@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>
                Email
                <strong>kkushgaurav@gmail.com</strong>
              </span>
            </a>
            <div>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>
                Location
                <strong>Ahmedabad, Gujrat, India</strong>
              </span>
            </div>
          </div>
          <div className="nav-socials">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/gauravkkush"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/gauravkkush"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.leetcode.com/gauravkkush"
              aria-label="LeetCode"
            >
              <CIcon icon={cibLeetcode} size="sm" />
            </a>
          </div>
        </section>

        <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="First & Last Name"
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="example@company.com"
              required
            />
          </label>
          <label>
            Subject
            <input
              type="text"
              name="subject"
              placeholder="Backend engineering opportunity"
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              placeholder="Tell me a little about the role or project…"
              required
            />
          </label>
          <div className="form-footer">
            <p aria-live="polite">{status}</p>
            <button className="button button-primary" type="submit">
              Send message
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Contact
