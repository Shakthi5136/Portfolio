

import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGit, faHtml5, faJava, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const Project = () => {

  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  const [letterClass, setLetterClass] = useState('text-animate');

  return (
    <div className="container project-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's', '.']}
            idx={15}
          />
        </h1>
        <p>
        Welcome to my project showcase! This section serves as a window into my journey as an aspiring professional in the IT field.        </p>
       
      </div>

     

      <Loader type="ball-spin-fade-loader" />
    </div>
  );
};

export default Project;
