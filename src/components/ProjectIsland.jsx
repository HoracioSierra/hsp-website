import React from 'react';

function ProjectIsland({ project }) {
  return (
    <a className="project-island" href={project.link} target="_blank" rel="noreferrer">
      <div>
        <p className="project-name">{project.name}</p>
        <p className="project-description">{project.description}</p>
      </div>
      <span className="project-link">view repo →</span>
    </a>
  );
}

export default ProjectIsland;
