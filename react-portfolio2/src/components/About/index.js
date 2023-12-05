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
  I've proudly wrapped up my Full Stack Web Development course, immersing myself in the exciting world of technologies like React, Bootstrap, JQuery, and more. While I've got a solid foundation in the full stack, my passion truly lies in front-end development – there's a unique joy in bringing designs to life and ensuring seamless user experiences.
</p>
<p align="LEFT">
  Currently, I'm on the lookout for a role in the industry to channel my skills into crafting visually appealing and user-friendly websites. 
</p>
<p>
  Beyond the screen, you'll catch me whipping up something delicious in the kitchen, lost in the world of video games, or hitting the gym for a good workout. Let's connect and chat about tech, or anything else that piques your interest!
</p>
<p>
  I'm a very ambitious front-end developer, eagerly seeking a role in an established IT company. I'm excited about the opportunity to work with the latest technologies on challenging and diverse projects.
</p>
<p align="LEFT">
  I'm quietly confident, naturally curious, and perpetually working on improving my chops, one design problem at a time.
</p>

<p>
  If I need to define myself in one sentence, that would be a family person, father of a beautiful daughter, a sports fanatic, photography enthusiast, and tech-obsessed!
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
