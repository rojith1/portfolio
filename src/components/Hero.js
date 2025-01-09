import React from "react";
import "./../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
        <p>
          A passionate <span className="highlight">Frontend Developer</span> building beautiful and functional web experiences.
        </p>
        <button className="hero-button">View My Work</button>
      </div>
    </section>
  );
};

export default Hero;
