import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Home from "./Home.tsx"
import About from "./About.tsx"
import Contact from "./Contact.tsx"
import Projects from "./Projects.tsx"

import './App.css'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
    </>
  )
}

export default App
