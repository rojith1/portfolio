import React from "react";
import "./../styles/About.css";
import profileImage from "./../assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="profile-picture">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi, I’m [Your Name], a passionate Frontend Developer with a love
            for creating elegant, user-friendly interfaces. I specialize in
            building modern, responsive, and accessible websites.
          </p>
          <h3>Skills</h3>
          <ul className="skills-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Chakra UI</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
