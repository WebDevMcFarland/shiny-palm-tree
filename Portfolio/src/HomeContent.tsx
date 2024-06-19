import React from 'react';
import LinkedIn from "./assets/linkedin.svg";
import GitHub from "./assets/github.svg";
import Twitter from "./assets/twitter-x.svg";
import "./HomeContent.css"; // Import the specific CSS file for HomeContent

const HomeContent = () => {
  return (
    <div className='content-wrapper'>
      <div className="InfoContainer">
        <div className="Info">
          <h1>Jacob McFarland</h1>
          <p>
            I am a passionate Software Engineer with a love for frontend
            development and creating intuitive, user-friendly applications.
            Through self-study and dedication, I immersed myself in learning
            JavaScript and was accepted into an advanced, full-time open-source
            tech immersive program. During the program, I contributed to an
            open-source project alongside a team of talented developers, working
            directly with the maintainer of the Jotai state management dev tool
            to update features and enhance the UI. As an Eagle Scout, I bring a
            unique perspective to my work, with a deep sense of curiosity and a
            desire to explore and understand the world around me. My ultimate
            goal is to make meaningful contributions to a team and continuously
            grow as an individual while deepening my understanding of the inner
            workings of technology.
          </p>
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
};

export default HomeContent;

