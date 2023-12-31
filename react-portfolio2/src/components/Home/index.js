import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import LogoImage from '../../assets/images/vecteezy_software-engineer-png-graphic-clipart-design_20962986.png';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['D', 'a', 'l', 'e', 'y', ' ', 'J', 'o', 'n', 'e', 's'];
  const jobArray = ['J', 'u', 'n', 'i', 'o', 'r', ' ', 'F', 'u', 'l', 'l', ' ', 'S', 't', 'a', 'c', 'k', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <img src={LogoImage} alt="Your Logo" className="logo-image" />
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13}`}>I</span>
            <span className={`${letterClass} _14`}> 'm</span>
            <span className={`${letterClass} _15`}> </span>
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={9} />
          </h1>
          <h2>| Junior Full Stack Developer |</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
