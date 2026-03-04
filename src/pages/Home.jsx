import React from "react";
import { Link } from "react-router-dom";
import { featuredProjects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";
import "./Home.css";
import Page from "./page.jsx";
import naricover from "../assets/images/nari/nari_cover.png";

export default function Home() {
  return (
    <Page>
      <div className="stack-lg">
        <section className="hero">
          <div className="accent-line" style={{ marginTop: 1 }}></div>
          <p className="kicker">Frontend / Full Stack Developer — Melbourne</p>
          <h1 className="hero-title">
            I build modern React web apps and ship them end-to-end.
          </h1>
          <p className="hero-lead">
            I focus on clean UI, API integration, and reliable deployments. My
            portfolio includes Nari — a full-stack platform for discovering
            mum-friendly workplaces and childcare services.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/projects">
              View Projects
            </Link>
            <a
              className="btn btn-ghost"
              href="https://www.linkedin.com/in/fadhih"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="btn btn-ghost"
              href="https://github.com/mdfadhih"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="btn btn-ghost"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </section>

        <section className="card featured-project">
          <div className="featured-grid">
            <img
              src={naricover}
              alt="Nari platform preview"
              className="featured-img"
            />

            <div className="featured-info">
              <h2>Featured Project</h2>

              <h3>Nari — Mum-Friendly Work & Childcare Finder</h3>

              <p>
                A full-stack web platform helping users discover family-friendly
                workplaces and childcare services. Users can filter companies,
                compare workplace benefits, and discover childcare services
                using location-based search.
              </p>

              <div className="featured-buttons">
                <a className="btn btn-primary" href="/projects/nari">
                  View Case Study
                </a>

                <a
                  className="btn btn-ghost"
                  href="https://gendereq.onrender.com"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </div>
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
    </Page>
  );
}
