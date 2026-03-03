import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import "./ProjectDetail.css";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

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

  return (
    <div className="stack-lg">
      <Link className="link" to="/projects">
        ← Back to projects
      </Link>

      <section className="detail-head">
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
              className="btn"
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
      </section>

      <section className="card">
        <h2>Highlights</h2>
        <ul className="list">
          {project.highlights.map((h, idx) => (
            <li key={idx}>{h}</li>
          ))}
        </ul>
      </section>

      {project.slug === "nari" && (
        <section className="card">
          <h2>Nari Case Study (template)</h2>
          <div className="two-col">
            <div>
              <h3>Problem</h3>
              <p className="muted">
                Sample: Users need trusted info for workplaces + childcare
                options.
              </p>
            </div>
            <div>
              <h3>Solution</h3>
              <p className="muted">
                Sample: A searchable platform with filters, comparisons, and
                maps.
              </p>
            </div>
          </div>
          <h3>Next improvements</h3>
          <ul className="list">
            <li>Add authentication and role-based admin updates.</li>
            <li>Improve performance with caching and pagination.</li>
            <li>Expand dataset and add user reviews.</li>
          </ul>
        </section>
      )}
    </div>
  );
}
