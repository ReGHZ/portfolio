// src/components/SocialLinks.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://github.com/ReGHZ"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/satria-teguh/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://x.com/ReifGHZ"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X"
      >
        <FontAwesomeIcon icon={faXTwitter} />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100057528053446"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a
        href="https://www.instagram.com/satriaghz/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
}

export default SocialLinks;
