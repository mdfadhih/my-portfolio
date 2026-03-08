import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Accessibility (WCAG)",
    ],
  },
  {
    title: "Backend & APIs",
    items: ["Flask", "REST APIs", "SQL", "MySQL", "Postman"],
  },
  {
    title: "DevOps & Tools",
    items: [
      "Linux",
      "Nginx",
      "Git/GitHub",
      "CI/CD",
      "Docker (basic)",
      "AWS (EC2, S3)",
    ],
  },
  {
    title: "Quality",
    items: [
      "Testing basics",
      "Debugging",
      "Performance (Lighthouse)",
      "Responsive Design",
    ],
  },
];

export default function About() {
  return (
    <div className="stack-lg">
      {/* Header Card */}
      <section className="about-hero card">
        <div className="about-hero-top">
          <h1>About</h1>
          <div className="about-hero-actions">
            <a
              className="btn btn-ghost"
              href="/Mohamed_Fadhih_Frontend_Developer_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <Link className="btn btn-primary" to="/projects">
              View Projects
            </Link>
          </div>
        </div>

        <p className="muted">
          I’m Mohamed, a developer based in Melbourne focused on building clean,
          responsive web apps with React. I like taking projects from idea →
          implementation → deployment, with a secure-by-default mindset.
        </p>

        {/* Highlights */}
        <div className="about-stats">
          <div className="stat">
            <div className="stat-title">Focus</div>
            <div className="stat-value">Frontend + API Integration</div>
          </div>
          <div className="stat">
            <div className="stat-title">Strength</div>
            <div className="stat-value">Clean UI + Deployment</div>
          </div>
          <div className="stat">
            <div className="stat-title">Featured</div>
            <div className="stat-value">
              <Link className="link" to="/projects/serverless-image-storage">
                Serverless Image Storage Case Study
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="about-grid">
        {skillGroups.map((g) => (
          <div key={g.title} className="card">
            <h2>{g.title}</h2>
            <div className="chips">
              {g.items.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Looking for */}
      <section className="card">
        <h2>Contact</h2>
        <div className="contact-grid">
          <a className="contact-card" href="mailto:your-email@example.com">
            <span className="contact-label">Email</span>
            <span className="contact-value">mdfadhih377@gmail.com</span>
          </a>

          <a className="contact-card" href="tel:+61477126767">
            <span className="contact-label">Phone</span>
            <span className="contact-value">+61 0477126767</span>
          </a>

          <a
            className="contact-card"
            href="https://linkedin.com/in/mdfadhih"
            target="_blank"
          >
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">linkedin.com/in/mdfadhih</span>
          </a>

          <a
            className="contact-card"
            href="https://github.com/mdfadhih"
            target="_blank"
          >
            <span className="contact-label">GitHub</span>
            <span className="contact-value">github.com/mdfadhih</span>
          </a>
        </div>

        <h2>What I’m Looking For</h2>
        <ul className="about-list">
          <li>Frontend / Full Stack Developer roles</li>
          <li>Teams that value learning, clean code, and shipping quality</li>
          <li>Melbourne (hybrid/onsite) or remote-friendly roles</li>
        </ul>
      </section>
    </div>
  );
}
