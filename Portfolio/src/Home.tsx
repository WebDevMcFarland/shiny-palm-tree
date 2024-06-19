import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from "react-router-dom";
import Logo from "./assets/Logo5.png";
import AboutComponent from './About';
import ContactComponent from './Contact';
import HomeContent from './HomeContent.tsx';
import "./Home.css";

const TabContent = ({ activeTab }) => {
  switch (activeTab) {
    case 'home':
      return <HomeContent />;
    case 'about':
      return <AboutComponent />;
    case 'contact':
      return <ContactComponent />;
    default:
      return <HomeContent />;
  }
};

function Home() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div>
      <nav className="NavBar">
        <Link to="/" className="logo-link">
          <img src={Logo} alt="Logo" className="logo" />
        </Link>
        <span className="Links">
          <button className="tab-button" onClick={() => setActiveTab('home')}>Home</button>
          <button className="tab-button" onClick={() => setActiveTab('about')}>About</button>
          <button className="tab-button" onClick={() => setActiveTab('contact')}>Contact</button>
        </span>
      </nav>
      <div className="tab-content">
        <TransitionGroup>
          <CSSTransition
            key={activeTab}
            timeout={500}
            classNames="slide-fade"
          >
            <div className="content-wrapper">
              <TabContent activeTab={activeTab} />
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default Home;


