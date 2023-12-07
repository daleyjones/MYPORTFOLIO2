import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import portfolioImage from '../../assets/images/daley.jpg'; // Replace with the correct path to your portfolio image
import AnimatedLetters from "../AnimatedLetters";
import techImage from '../../assets/images/tech.png';
import quizImage from '../../assets/images/quizz.png';
import gitImage from '../../assets/images/project 2.gif';
import pacImage from '../../assets/images/pacman game.gif';
import holidayImage from '../../assets/images/holidayexplorer.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import "./index.scss";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [githubProjects, setGithubProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    getGithubProjects();
  }, []);

  const getGithubProjects = async () => {
    const projectsData = [
        {
            name: 'Pacman Javascript Game',
            description: 'I am currently working on a Pacman game using JavaScript. ',
          image: pacImage,
            html_url: 'https://github.com/daleyjones/pacman-game.git',
          },
      {
        name: 'Git Jobs',
        description: 'Git-Jobs is a specialized recruitment platform exclusively tailored for software developers. This platform empowers users to effortlessly browse, bookmark, and submit job applications..',
        image: gitImage,
        html_url: 'https://github.com/JackStockwell/git-jobs.git',
      },
      {
        name: 'Holiday Explorer',
        description: 'Holiday Explorer is a web application that helps users discover and explore various holiday destinations around the world. The application utilizes HTML5, CSS, JavaScript (including libraries like jQuery), and server-side APIs such as the Google Maps API and OpenWeatherMap API.',
        image: holidayImage,
        html_url: 'https://github.com/daleyjones/project-1-holidayexplorer.git',
      },
      {
        name: 'The Tech Blog',
        description: 'This web application allows developers to publish their tech-related articles, blog posts, and thoughts while also enabling them to engage with and comment on posts created by other developers. This project follows the Model-View-Controller (MVC) architectural pattern and utilizes various technologies to create a robust content management system (CMS).',
        image: techImage,
        html_url: 'https://github.com/daleyjones/project-1-holidayexplorer.git',
      },
      {
        name: 'JavaScript Quiz',
        description: 'This is a simple quiz application built with HTML, CSS, and JavaScript. It features multiple choice questions with a timer and the ability to save scores.',
        image: quizImage,
        html_url: 'https://github.com/daleyjones/quiz-week4-javascript-code.git',
      },
    ];

    setGithubProjects(projectsData);
  }

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  const renderPortfolio = () => {
    return (
      <div className="portfolio-image-container">
        {/* Render a single portfolio image */}
        <img
          src={portfolioImage}
          alt="Portfolio Image"
          className="portfolio-image"
          style={{ width: '300px', height: '400px', objectFit: 'cover' }}
          onClick={() => openProjectDetails(null)}
        />
      </div>
    );
  };

  const renderGithubProjects = () => {
    return (
      <div className="github-projects">
        {githubProjects.map((project, idx) => (
          <div className="github-project" key={idx} onClick={() => openProjectDetails(project)}>
            <h2 className="project-name">{project.name}</h2>
            <p>{project.description}</p>
            <img
              style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'contain' }}
              className="github-project-image"
              src={project.image}
              alt="Project"
            />
    
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <button className="github-button">
                <FontAwesomeIcon icon={faGithub} style={{ marginRight: '8px' }} />
                View on GitHub
              </button>
            </a>
          </div>
        ))}
      </div>
    );
  };
  

  return (
    <>
      <div className="container portfolio-page">
        {/* Portfolio Section */}
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Portfolio".split("")}
            idx={15}
          />
        </h1>
        {renderPortfolio()}

        {/* GitHub Projects Section */}
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"GitHub Projects".split("")}
            idx={15}
          />
        </h1>
        {renderGithubProjects()}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{selectedProject.name}</h2>
            <p>{selectedProject.description}</p>
            {/* Add more details as needed */}
            <button onClick={closeProjectDetails}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Portfolio;
