// src/components/Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} ReGHZ. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
