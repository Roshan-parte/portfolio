import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";


export default function Navbar() {

  const [activeLink, setActiveLink] = useState("");

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  const [src, setSrc] = useState("cloud-sun.svg");

  const changeMode = () => {
    console.log("mode changed");
    setSrc(src === "cloud-sun.svg" ? "cloud-moon.svg" : "cloud-sun.svg");
  };

  const scrollToRef = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="Navbar">
      <ul>
        <li>
          <a href="#home" className={activeLink === "home" ? "active" : ""} onClick={() => scrollToRef('home')}>HOME</a>
        </li>
        <li>
          <a href="#education" className={activeLink === "education" ? "active" : ""} onClick={() => scrollToRef('education')}>EDUCATION</a>
        </li>
        <li>
          <a href="#skills" className={activeLink === "skills" ? "active" : ""} onClick={() => scrollToRef('skills')}>SKILLS</a>
        </li>
        <li>
          <a href="#project" className={activeLink === "project" ? "active" : ""} onClick={() => scrollToRef('project')}>PROJECT</a>
        </li>
        <li>
          <a href="#contact" className={activeLink === "home" ? "active" : ""} onClick={() => scrollToRef('contact')}>CONTACT</a>
        </li>
      </ul>
      {/* Your mode change button here */}
      <button className="mode">
        <img src={src} onClick={changeMode} alt="light" />
      </button> 
    </div>
  );
}
