// src/components/ProjectCard.js
import React from "react";

function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={() => onClick(project)}>
      <div className="card-image-container">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="card-overlay"></div>
      </div>
      <div className="card-content">
        <h3>{project.title}</h3>
        <p className="card-description">{project.description}</p>
        <div className="feature-tags">
          {project.features.slice(0, 3).map((feature, idx) => (
            <span key={idx} className="tag">
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
