import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    'G',
    'a',
    'u',
    'r',
    'a',
    'v',
    ' ',
    'K',
    'u',
    's',
    'h',
    'w',
    'a',
    'h',
    'a',
  ]
  const jobArray = [
    'A',
    'n',
    ' ',
    'a',
    's',
    'p',
    'i',
    'r',
    'i',
    'n',
    'g',
    ' ',
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className=" container home-page">
        <div className="text-zone">
        <h2>Welcome,</h2>
          <h1>
            <span className={`${letterClass}_13`}>I</span>
            <span className={`${letterClass}_14`}>'m</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={10}
            />
          </h1>
          <h2>Frontend Developer / Core Java / Javascript / Programmer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
