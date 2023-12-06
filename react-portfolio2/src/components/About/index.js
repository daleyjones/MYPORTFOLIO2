import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          
<p>
  Proudly completing my Full Stack Web Development course, I've immersed myself in the dynamic world of technologies like React, Bootstrap, JQuery, and more. While boasting a solid foundation across the full stack, my true passion resides in front-end development – there's a unique joy in bringing designs to life and ensuring seamless user experiences.
</p>
<p align="LEFT">
  Currently on the lookout for a role in the industry to channel my skills into crafting visually appealing and user-friendly websites.
</p>
<p>
  Beyond the screen, you'll find me whipping up something delicious in the kitchen, I also enjoy playing video games on my PC & PS5, or hitting the gym for a good workout.
</p>
<p>
  I'm an ambitious front-end developer, eagerly seeking a role in an established IT company. I'm thrilled about the opportunity to work with the latest technologies on challenging and diverse projects.
</p>
<p align="LEFT">
  Quietly confident and naturally curious, I'm perpetually exploring ways to improve my skills and tackle design challenges.
</p>
<p>
  If I were to define myself in one sentence, I'd say I'm a family-oriented individual, a proud father of a beautiful daughter, a sports fanatic, photography enthusiast, and unapologetically tech-obsessed!
</p>


        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
