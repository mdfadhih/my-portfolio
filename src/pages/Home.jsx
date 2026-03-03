import React from "react";
import { Link } from "react-router-dom";
import { featuredProjects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";
import "./Home.css";

export default function Home() {
  return (
    <div className="stack-lg">
      <section className="hero">
        <p className="kicker">Frontend / Full Stack Developer — Melbourne</p>
        <h1 className="hero-title">I build clean, fast web apps with React.</h1>
        <p className="hero-lead">
          Sample text: I focus on React, APIs, and reliable deployments. I’m
          open to junior roles and contract work.
        </p>

        <div className="hero-actions">
          <Link className="btn" to="/projects">
            View Projects
          </Link>
          <a
            className="btn btn-ghost"
            href="https://www.linkedin.com/in/YOUR-LINKEDIN"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="btn btn-ghost"
            href="https://github.com/YOUR-USERNAME"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>

      <section>
        <div className="section-head">
          <h2>Featured Projects</h2>
          <Link className="link" to="/projects">
            See all
          </Link>
        </div>

        <div className="grid-3">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
