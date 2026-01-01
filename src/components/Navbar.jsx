import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/" className="logo-link">
          <img src="/logo.png" alt="Leafclutch logo" className="logo" />
          <h2 className="brand-name">
            Leafclutch Technologies<span className="dot">.</span>
          </h2>
        </Link>
      </div>

      <ul className="nav-center">
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className="nav-link">
            Our Services
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
