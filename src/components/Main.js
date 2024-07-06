import React, { useRef } from 'react';
import Home from './Home';
import Education from './Education';
import Project from './Project';
import Skills from './Skills';
import Contact from './Contact';

export default function Main() {
  const homeRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="main">
      <div className="fullcont">
        <div id="home" ref={homeRef}>
          <Home />
        </div>
        <hr className="separation-line" />
        <div id="education" ref={educationRef}>
          <Education />
        </div>
        <hr className="separation-line" />
        <div id="skills" ref={skillsRef}>
          <Skills />
        </div>
        <hr className="separation-line" />
        <div id="project" ref={projectRef}>
          <Project />
        </div>
        <hr className="separation-line" />
        <div id="contact" ref={contactRef}>
          <Contact />
        </div>
        <hr className="separation-line" />
      </div>
    </div>
  );
}
