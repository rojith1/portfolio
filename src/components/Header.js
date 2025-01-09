import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './../styles/Header.css'; // Ensure this is the updated CSS file

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={location.pathname === '/projects' ? 'active' : ''}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
