import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faGlobe,
  faTimes,
  faKey,
} from "@fortawesome/free-solid-svg-icons";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <h2>{project.title}</h2>

        <div className="modal-image-container">
          <img src={project.image} alt={project.title} loading="lazy" />
        </div>

        <div className="modal-content">
          <p className="modal-description">{project.description}</p>

          <div className="modal-features">
            <h3>Key Features</h3>
            <ul>
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Tambahin ini kalau ada demo credentials */}
          {project.demoCredentials && (
            <div className="demo-credentials">
              <h4>
                <FontAwesomeIcon icon={faKey} /> Demo Credentials
              </h4>
              <ul>
                {Object.entries(project.demoCredentials).map(([key, value]) => (
                  <li key={key}>
                    <strong>
                      {key.charAt(0).toUpperCase() + key.slice(1)}:
                    </strong>{" "}
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal-actions">
            <a
              href={project.demoUrl}
              className="demo-btn"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGlobe} />
              Live Demo
            </a>
            <a
              href={project.repoUrl}
              className="repo-btn"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faCodeBranch} />
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
