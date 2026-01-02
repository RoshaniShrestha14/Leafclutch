import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img src="/logo.png" alt="Leafclutch logo" className="logo" />
          <h2 className="brand-name">
            Leafclutch Technologies<span className="dot">.</span>
          </h2>
        </Link>
      </div>

      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <ul className={`nav-center ${isMenuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/" className="nav-link" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className="nav-link" onClick={closeMenu}>
            Our Services
          </NavLink>
        </li>
        <li className="mobile-only">
          <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
            Get Started
          </NavLink>
        </li>
      </ul>

      <div className="nav-right">
        <NavLink to="/contact" className="get-started-btn">
          Get Started
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
