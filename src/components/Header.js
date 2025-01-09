import React from "react";
import "./../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">MyPortfolio</div>
      <nav className="header-nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
