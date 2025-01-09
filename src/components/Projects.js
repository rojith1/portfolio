import React from "react";
import "./../styles/Projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and CSS.",
    image: "/assets/portfolio.png", // Replace with your actual images
    link: "https://github.com/username/portfolio",
  },
  {
    title: "E-Commerce App",
    description: "An e-commerce app built with React and Firebase.",
    image: "/assets/ecommerce.png",
    link: "https://github.com/username/ecommerce",
  },
  {
    title: "Weather App",
    description: "A weather app using OpenWeatherMap API and React.",
    image: "/assets/weather-app.png",
    link: "https://github.com/username/weather-app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
