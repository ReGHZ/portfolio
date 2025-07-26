import React from "react";

const ProjectShowcaseVideo = () => {
  return (
    <section className="project-showcase-section" id="showcase">
      <h2>Project Showcase Video</h2>
      <p className="showcase-subtext">
        Here's a full walkthrough of my main web app projects.
      </p>
      <div className="video-wrapper">
        <video
          controls
          playsInline
          width="100%"
          height="480"
          style={{ border: "none", borderRadius: "12px" }}
        >
          <source
            src="https://res.cloudinary.com/dhafnpq2t/video/upload/v1753540981/2025-07-26_20-32-59_h0ywtt.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default ProjectShowcaseVideo;
