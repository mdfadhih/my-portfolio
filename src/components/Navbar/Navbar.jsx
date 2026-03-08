import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link className="brand" to="/">
          Mohamed<span className="brand-dot">.</span>
        </Link>

        <nav className="nav-links">
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
          <a
            className="btn btn-ghost"
            href="/Mohamed_Fadhih_Frontend_Developer_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
