import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  return (
    <div className="pcard">
      {project.image && (
        <div className="pcard-media">
          <img
            className="pcard-img"
            src={project.image}
            alt={`${project.title} preview`}
          />
        </div>
      )}
      <div>
        <h3 className="pcard-title">{project.title}</h3>
        <p className="pcard-summary">{project.summary}</p>
      </div>

      <div className="pcard-badges">
        {project.stack.slice(0, 6).map((t) => (
          <span key={t} className="badge">
            {t}
          </span>
        ))}
      </div>

      <div className="pcard-actions">
        <Link className="btn" to={`/projects/${project.slug}`}>
          Details
        </Link>
        {project.links?.live && (
          <a
            className="btn btn-ghost"
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
          >
            Live
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
    </div>
  );
}
