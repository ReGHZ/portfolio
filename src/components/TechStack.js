// src/components/TechStack.js (alternatif dengan react-icons)
import React from "react";
import { FaNodeJs, FaJsSquare, FaLaravel } from "react-icons/fa";
import { SiMongodb, SiMysql, SiPostgresql } from "react-icons/si";

const icons = {
  js: <FaJsSquare />,
  node: <FaNodeJs />,
  laravel: <FaLaravel />,
  mysql: <SiMysql />,
  mongodb: <SiMongodb />,
  postgreSQL: <SiPostgresql />,
};

const technologies = [
  { name: "JavaScript", icon: "js" },
  { name: "Node.js", icon: "node" },
  { name: "Laravel", icon: "laravel" },
  { name: "Mysql", icon: "mysql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "PostgreSQL", icon: "postgreSQL" },
];

function TechStack() {
  return (
    <section className="tech-stack" id="techstack">
      <h2>Tech Stack</h2>
      <div className="tech-grid">
        {technologies.map((tech, index) => (
          <div className="tech-item" key={index}>
            <div className="tech-icon">{icons[tech.icon]}</div>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
