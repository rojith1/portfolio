import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">My Portfolio</div>
      <nav className="header-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
