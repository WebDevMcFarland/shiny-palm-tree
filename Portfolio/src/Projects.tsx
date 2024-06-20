import React from 'react';
import './Projects.css';

const projectData = [
  {
    title: 'Project One',
    description: 'This is a brief description of Project One.',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'This is a brief description of Project Two.',
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'This is a brief description of Project Three.',
    link: '#',
  },
  {
    title: 'Project Four',
    description: 'This is a brief description of Project Four.',
    link: '#',
  },
];

function Projects() {
  return (
    <div className='content-wrapper bb-wrapper'>
      <div className="bb"></div> {/* Apply the .bb class here */}
      <div className="InfoContainer">
        <div className="Info">
          <h1>Projects</h1>
          <div className="projects-grid">
            {projectData.map((project, index) => (
              <div key={index} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href={project.link} className="project-link">Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
