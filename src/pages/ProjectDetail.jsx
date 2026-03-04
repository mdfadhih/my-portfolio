import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import "./ProjectDetail.css";
import Page from "./page.jsx";
import Lightbox from "../components/Lightbox/Lightbox.jsx";

import nariCover from "../assets/images/nari/nari_cover.png";
import nariComlist from "../assets/images/nari/comlist.png";
import naricomcare from "../assets/images/nari/comcare.png";
import naricarechild from "../assets/images/nari/care.png";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  const [lb, setLb] = useState({ open: false, src: "", alt: "" });

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setLb({ open: false, src: "", alt: "" });
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!project) {
    return (
      <div className="stack-lg">
        <h1>Project not found</h1>
        <Link className="btn" to="/projects">
          Back
        </Link>
      </div>
    );
  }

  const isNari = project.slug === "nari";

  return (
    <Page>
      <div className="stack-lg">
        <Link className="link" to="/projects">
          ← Back to projects
        </Link>

        {/* ✅ ONE HERO ONLY */}
        <section className="project-hero">
          {isNari && (
            <img
              src={nariCover}
              alt="Nari platform preview"
              className="project-hero-img"
            />
          )}

          <div className="project-hero-info">
            <h1>{project.title}</h1>
            <p className="muted">{project.summary}</p>

            <div className="detail-badges">
              {project.stack.map((t) => (
                <span key={t} className="badge">
                  {t}
                </span>
              ))}
            </div>

            <div className="detail-actions">
              {project.links?.live && (
                <a
                  className="btn btn-primary"
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
              {project.links?.github && (
                <a
                  className="btn btn-ghost"
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>

            <div className="accent-line" style={{ marginTop: 16 }} />
          </div>
        </section>

        {/* ✅ Screenshots only for Nari */}
        {isNari && (
          <section className="card">
            <h2>Product Screenshots</h2>

            <div className="screenshot-grid">
              <div
                className="shot"
                onClick={() =>
                  setLb({ open: true, src: nariCover, alt: "Homepage" })
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  setLb({ open: true, src: nariCover, alt: "Homepage" })
                }
              >
                <img src={nariCover} alt="Nari homepage" />
                <span>Homepage</span>
              </div>

              <div
                className="shot"
                onClick={() =>
                  setLb({ open: true, src: nariComlist, alt: "Company Search" })
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  setLb({ open: true, src: nariComlist, alt: "Company Search" })
                }
              >
                <img src={nariComlist} alt="Company directory and filters" />
                <span>Company Filters</span>
              </div>

              <div
                className="shot"
                onClick={() =>
                  setLb({
                    open: true,
                    src: naricomcare,
                    alt: "Company Comparison",
                  })
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  setLb({
                    open: true,
                    src: naricomcare,
                    alt: "Company Comparison",
                  })
                }
              >
                <img src={naricomcare} alt="Company comparison" />
                <span>Comparison</span>
              </div>

              <div
                className="shot"
                onClick={() =>
                  setLb({
                    open: true,
                    src: naricarechild,
                    alt: "Childcare Map",
                  })
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  setLb({
                    open: true,
                    src: naricarechild,
                    alt: "Childcare Map",
                  })
                }
              >
                <img src={naricarechild} alt="Childcare map discovery" />
                <span>Childcare Map</span>
              </div>
            </div>
          </section>
        )}

        {/* ✅ Highlights separate card */}
        <section className="card">
          <h2>Highlights</h2>
          <ul className="list">
            {project.highlights.map((h, idx) => (
              <li key={idx}>{h}</li>
            ))}
          </ul>
        </section>

        {/* ✅ Case study only for Nari */}
        {isNari && (
          <section className="card stack-lg">
            <h2>Nari Case Study</h2>

            <div className="case-grid">
              <div>
                <h3>Problem</h3>
                <p className="muted">
                  Expectant and working mothers often struggle to find reliable,
                  centralized information about family-friendly employers and
                  nearby childcare services. Information is scattered and
                  difficult to compare.
                </p>
              </div>

              <div>
                <h3>Solution</h3>
                <p className="muted">
                  Nari centralizes workplace benefits data and childcare service
                  discovery in one platform. Users can filter and compare
                  workplaces, and discover services through a map-based
                  experience.
                </p>
              </div>
            </div>

            <div>
              <h3>Key Features</h3>
              <ul>
                <li>
                  Company directory with filters (benefits, rating, location)
                </li>
                <li>Side-by-side comparison flow</li>
                <li>Childcare discovery via map + location-based search</li>
                <li>Responsive UI for mobile and desktop</li>
              </ul>
            </div>

            <div>
              <h3>Architecture</h3>
              <ul>
                <li>React frontend</li>
                <li>Flask REST API</li>
                <li>MySQL database schema for structured records</li>
                <li>Linux + Nginx deployment</li>
              </ul>
            </div>

            <div>
              <h3>Future Improvements</h3>
              <ul>
                <li>User accounts + saved lists</li>
                <li>Admin dashboard for data updates</li>
                <li>Caching and pagination for faster search</li>
                <li>User reviews + verification workflow</li>
              </ul>
            </div>
          </section>
        )}
      </div>
      <Lightbox
        open={lb.open}
        src={lb.src}
        alt={lb.alt}
        onClose={() => setLb({ open: false, src: "", alt: "" })}
      />
    </Page>
  );
}
