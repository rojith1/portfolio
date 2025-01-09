import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiChakraui } from "react-icons/si";
import "./../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>About Me</h1>
        <div className="divider"></div>
      </div>

      <p className="about-description">
        I'm a <span className="highlight">front-end developer</span> with a passion for creating responsive, user-friendly, and modern web applications. I enjoy working with the latest technologies like React and Next.js, ensuring seamless user experiences.
      </p>

      <div className="skills">
        <h2>My Skills</h2>
        <ul className="skills-list">
          <li><FaHtml5 className="icon html-icon" title="HTML" /></li>
          <li><FaCss3Alt className="icon css-icon" title="CSS" /></li>
          <li><FaJsSquare className="icon js-icon" title="JavaScript" /></li>
          <li><FaReact className="icon react-icon" title="React" /></li>
          <li><SiNextdotjs className="icon nextjs-icon" title="Next.js" /></li>
          <li><SiChakraui className="icon chakraui-icon" title="Chakra UI" /></li>
        </ul>
      </div>

      <div className="resume">
        <a href="/resume.pdf" download className="download-btn">
          Download My Resume
        </a>
      </div>
    </div>
  );
};

export default About;
