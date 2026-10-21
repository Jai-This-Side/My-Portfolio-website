import React from 'react';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <a href="#home" className="logo">JSB.</a>
        
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Expertise</a></li>
          <li><a href="#projects">Work</a></li>
          <li>
            <a href="#contact" className="btn-primary hard-shadow" style={{ padding: '0.5rem 1rem' }}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;