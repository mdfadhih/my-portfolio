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
      "Tailwind CSS",
      "Vite",
      "Accessibility (WCAG)",
    ],
  },
  {
    title: "Backend & AI",
    items: [
      "Node.js",
      "Express",
      "Gemini AI",
      "RAG Pipelines",
      "Vector Embeddings",
      "REST APIs",
      "Flask",
      "SQL",
      "MySQL",
      "PostgreSQL",
      "Supabase",
      "Postman",
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      "Git/GitHub",
      "GitHub Actions",
      "CI/CD",
      "Vercel",
      "Render",
      "AWS (EC2, S3)",
      "Docker (basic)",
      "Linux",
      "Nginx",
    ],
  },
  {
    title: "Quality",
    items: [
      "Testing basics",
      "Debugging",
      "Performance (Lighthouse)",
      "Responsive Design",
      "Security (OWASP)",
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
              href="/Mohamed_Fadhih_FullStack_Developer_Resume.pdf"
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
          I'm Mohamed, a full stack developer based in Melbourne focused on
          building AI-powered and secure web applications. I take projects from
          idea → RAG pipeline → production deployment, combining React, Node.js
          and Gemini AI to create real-world tools that actually work.
        </p>

        {/* Highlights */}
        <div className="about-stats">
          <div className="stat">
            <div className="stat-title">Focus</div>
            <div className="stat-value">Full Stack + AI Engineering</div>
          </div>
          <div className="stat">
            <div className="stat-title">Strength</div>
            <div className="stat-value">RAG Pipelines + Clean UI</div>
          </div>
          <div className="stat">
            <div className="stat-title">Featured</div>
            <div className="stat-value">
              <Link className="link" to="/projects/docuchat">
                DocuChat — AI Document Q&A
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

      {/* Contact + Looking For */}
      <section className="card">
        <h2>Contact</h2>
        <div className="contact-grid">
          <a className="contact-card" href="mailto:mdfadhih377@gmail.com">
            <span className="contact-label">Email</span>
            <span className="contact-value">mdfadhih377@gmail.com</span>
          </a>

          <a className="contact-card" href="tel:+61477126767">
            <span className="contact-label">Phone</span>
            <span className="contact-value">+61 0477126767</span>
          </a>

          <a
            className="contact-card"
            href="https://www.linkedin.com/in/fadhih"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">linkedin.com/in/fadhih</span>
          </a>

          <a
            className="contact-card"
            href="https://github.com/mdfadhih"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-label">GitHub</span>
            <span className="contact-value">github.com/mdfadhih</span>
          </a>
        </div>

        <h2 style={{ marginTop: "1.5rem" }}>What I'm Looking For</h2>
        <ul className="about-list">
          <li>Full Stack Developer or AI Engineer roles</li>
          <li>Teams building AI-powered products or developer tools</li>
          <li>Teams that value learning, clean code, and shipping quality</li>
          <li>Melbourne (hybrid/onsite) or remote-friendly roles</li>
        </ul>
      </section>
    </div>
  );
}
