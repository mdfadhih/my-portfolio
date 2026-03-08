import React from "react";
import { Link } from "react-router-dom";
import { featuredProjects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";
import "./Home.css";
import Page from "./page.jsx";

import serverlesscover from "../assets/images/serverless/serverless_cover.png";

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
              href="https://linkedin.com/in/fadhih"
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
              href="/Mohamed_Fadhih_Frontend_Developer_Resume.pdf"
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
              src={serverlesscover}
              alt="Nari platform preview"
              className="featured-img"
            />

            <div className="featured-info">
              <h2>Featured Project</h2>

              <h3>Serverless Image Storage System</h3>

              <p>
                A cloud-native image gallery platform that stores images in AWS
                S3, automatically detects objects using YOLO, generates
                thumbnails, and enables tag-based image search.
              </p>

              <div className="featured-buttons">
                <a
                  className="btn btn-primary"
                  href="/projects/serverless-image-storage"
                >
                  View Case Study
                </a>

                <a
                  className="btn btn-ghost"
                  href="https://serverless-image-storage.vercel.app"
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
