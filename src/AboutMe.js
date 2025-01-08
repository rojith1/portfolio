import React from 'react';
import './AboutMe.css'; // Import the CSS file for styling

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-content">
        {/* Profile Picture */}
        <div className="profile-picture">
          <img
            src="your-image-url-here.jpg" // Replace with your profile image URL
            alt="Profile"
            className="profile-img"
          />
        </div>

        {/* Bio Content */}
        <div className="bio-content">
          <h1 className="name">Rojith R</h1>
          <p className="bio">
            I'm a passionate web developer focused on creating modern, user-friendly applications. I enjoy experimenting with new technologies like React, Next.js, and working on meaningful projects that help people.
            In my spare time, I explore new tech trends, contribute to open-source projects, and strive to create better digital experiences.
          </p>
          <p className="cta">
            <a href="#contact" className="cta-link">Let's Connect</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
