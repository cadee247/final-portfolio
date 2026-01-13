import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Nav links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#landing" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#Certificates" onClick={() => setMenuOpen(false)}>Certificates</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#demo" onClick={() => setMenuOpen(false)}>Demo</a></li>
          <li><a href="#testimonial" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
          
        </ul>

        {/* Hamburger */}
        <div
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
