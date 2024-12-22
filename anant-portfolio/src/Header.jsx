import React from 'react';
import './Header.css'; // Add custom styles in this file
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
        <div id="dropdown">
            <p className="menu">&#9776;</p>
            <div className="dropdown-content">
                <ul className="dp-box">
                    <a href="#"><li>Education</li></a>
                    <a href="#"><li>Work Experience</li></a>
                    <a href="#"><li>Hobbies</li></a>
                </ul>
            </div>
        </div>
        <div className="bar">
          <div className="nav-item">About Me</div>
          <div className="nav-item">Projects</div>
          <div className="nav-item">Languages</div>
        </div>
    </header>
  );
};

export default Header;
