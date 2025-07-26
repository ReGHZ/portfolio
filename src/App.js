// src/App.js
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import Footer from "./components/Footer";
import TechStack from "./components/TechStack";
import projects from "./data/projects";
import ProjectShowcaseVideo from "./components/ProjectShowcaseVideo";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="app">
      <Header />

      <main>
        <section className="hero-section" id="home">
          <div className="section-inner">
            <div className="hero-content">
              <h1 className="gradient-text">Web Development Portfolio</h1>
              <p className="subtitle">Back-end Developer</p>
              <p>
                Hi, I'm Satria — showcasing my personal web application projects
                below.
              </p>
            </div>
          </div>
        </section>

        <TechStack />

        <ProjectShowcaseVideo />

        <section className="projects-section" id="projects">
          <h2>My Projects</h2>
          <div className="section-inner">
            <div className="project-grid">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={setSelectedProject}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <Footer />
    </div>
  );
}

export default App;
