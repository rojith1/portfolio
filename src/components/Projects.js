import React from "react";
import "./../styles/Projects.css";  // Ensure the CSS file is imported

const Projects = () => {
  return (
    <div className="projects-container">
      {/* Project 1 */}
      <div className="project-card">
        <img src="path/to/image1.jpg" alt="Project 1" />
        <h3>Project 1</h3>
        <p>Short description of project 1. Lorem ipsum dolor sit amet.</p>
        <a href="https://github.com" className="project-btn">View Project</a>
      </div>

      {/* Project 2 */}
      <div className="project-card">
        <img src="path/to/image2.jpg" alt="Project 2" />
        <h3>Project 2</h3>
        <p>Short description of project 2. Lorem ipsum dolor sit amet.</p>
        <a href="https://github.com" className="project-btn">View Project</a>
      </div>

      {/* Project 3 */}
      <div className="project-card">
        <img src="path/to/image3.jpg" alt="Project 3" />
        <h3>Project 3</h3>
        <p>Short description of project 3. Lorem ipsum dolor sit amet.</p>
        <a href="https://github.com" className="project-btn">View Project</a>
      </div>

      {/* Optional additional projects */}
      {/* You can add more projects and they will follow the same pastel color scheme */}
      <div className="project-card">
        <img src="path/to/image4.jpg" alt="Project 4" />
        <h3>Project 4</h3>
        <p>Short description of project 4. Lorem ipsum dolor sit amet.</p>
        <a href="https://github.com" className="project-btn">View Project</a>
      </div>
    </div>
  );
};

export default Projects;
