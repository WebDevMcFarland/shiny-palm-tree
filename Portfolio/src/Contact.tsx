import Logo from "./assets/Logo5.png";
import LinkedIn from "./assets/linkedin.svg"
import GitHub from "./assets/github.svg"
import Twitter from "./assets/twitter-x.svg"
import "./Contact.css";
import { Link } from "react-router-dom";


function Contact(){
    return(
       <div>
        {/* <nav className="NavBar">
      <Link to="/" className="logo-link">
                <img src={Logo} alt="Logo" className="logo" />
            </Link>
        <span className="Links">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Projects">Projects</Link>
        </span>
      </nav> */}

      <footer className="footer">
    <a href="https://www.linkedin.com/in/jacob-s-mcfarland" target="_blank">
        <img src={LinkedIn} alt="LinkedIn Profile" className="social"/>
    </a>
    <a href="https://github.com/WebDevMcFarland" target="_blank">
        <img src={GitHub} alt="GitHub Profile" className="social"/>
    </a>
    <a href="https://twitter.com/WebDevMac" target="_blank">
        <img src={Twitter} alt="Twitter Profile" className="social"/>
    </a>
    </footer>
       </div> 
    )
    }
    
    export default Contact;