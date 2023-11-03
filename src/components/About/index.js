import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGit, faHtml5, faJava, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  const [letterClass, setLetterClass] = useState('text-animate');

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e', '.']}
            idx={15}
          />
        </h1>
        <p>
          As a recent computer science engineering graduate, I am eager to bring my theoretical knowledge and passion for technology to the workforce.
        </p>
        <p align="LEFT">
          Despite being a fresher with no direct work experience, I am confident in my ability to quickly adapt and make meaningful contributions to this organization.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#dd0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faGit} color="#Ec4D28" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faJava} color="#Ec4D28" />
          </div>
        </div>
      </div>

      <Loader type="ball-spin-fade-loader" />
    </div>
  );
};

export default About;
