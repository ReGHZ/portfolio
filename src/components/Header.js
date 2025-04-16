// src/components/Header.js
import React from "react";
import SocialLinks from "./SocialLinks";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <SocialLinks />
        <nav className="main-nav">
          <a href="#home">Home</a>
          <a href="#techstack">TechStack</a>
          <a href="#projects">Projects</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
