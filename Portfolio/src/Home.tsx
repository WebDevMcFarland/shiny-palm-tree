import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Logo from "./assets/Logo5.png";
import LinkedIn from "./assets/linkedin.svg";
import GitHub from "./assets/github.svg";
import Twitter from "./assets/twitter-x.svg";
import AboutComponent from './About';
import ContactComponent from './Contact';
import HomeContent from './HomeContent.tsx';
import ProjectsContent from './Projects.tsx';
import 'animate.css';
import "./Home.css";

const TabContent = ({ activeTab }) => {
  switch (activeTab) {
    case 'home':
      return <HomeContent />;
    case 'about':
      return <AboutComponent />;
    case 'contact':
      return <ContactComponent />;
    case 'projects':
      return <ProjectsContent />;
    default:
      return <HomeContent />;
  }
};

function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [animating, setAnimating] = useState(false);
  const [animation, setAnimation] = useState('');

  const handleTabClick = (tab) => {
    if (tab !== activeTab && !animating) {
      setAnimating(true);
      setAnimation('animate__fadeOutRight');
      setTimeout(() => {
        setActiveTab(tab);
        setAnimation('animate__fadeInLeft');
        setTimeout(() => {
          setAnimating(false);
        }, 500); // Duration of the fade-in animation
      }, 500); // Duration of the fade-out animation
    }
  };

  return (
    <div>
      <nav className="NavBar">
        <Link to="/" className="logo-link">
          <img src={Logo} alt="Logo" className="logo" />
        </Link>
        <span className="Links">
          <button className="tab-button" onClick={() => handleTabClick('home')}>Home</button>
          <button className="tab-button" onClick={() => handleTabClick('about')}>About</button>
          <button className="tab-button" onClick={() => handleTabClick('projects')}>Projects</button>
          <button className="tab-button" onClick={() => handleTabClick('contact')}>Contact</button>
        </span>
      </nav>
      <div className="tab-content">
        <div className={`content-wrapper animate__animated ${animation}`}>
          <TabContent activeTab={activeTab} />
        </div>
      </div>
      <footer className="footer">
        <a href="https://www.linkedin.com/in/jacob-s-mcfarland" target="_blank" rel="noopener noreferrer">
          <img src={LinkedIn} alt="LinkedIn Profile" className="social"/>
        </a>
        <a href="https://github.com/WebDevMcFarland" target="_blank" rel="noopener noreferrer">
          <img src={GitHub} alt="GitHub Profile" className="social"/>
        </a>
        <a href="https://twitter.com/WebDevMac" target="_blank" rel="noopener noreferrer">
          <img src={Twitter} alt="Twitter Profile" className="social"/>
        </a>
      </footer>
    </div>
  );
}

export default Home;
