import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/Home.css'; // Ensure the updated Home.css file is in place

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I'm [Your Name]</h1>
          <p>Front-End Developer | Creating Beautiful & Functional Websites</p>
          <Link to="/projects" className="cta-btn">
            Explore My Work
          </Link>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I'm a passionate front-end developer with experience in creating user-friendly and responsive websites. I enjoy solving problems and making digital experiences better.
          </p>
          <Link to="/about" className="cta-btn">
            Learn More
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <div className="container">
          <h2>My Projects</h2>
          <p>Explore some of the best work I've done.</p>
          <Link to="/projects" className="cta-btn">
            View Projects
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
