import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="stack-lg">
      <section className="card">
        <h1>About</h1>
        <p className="muted">
          Sample text: I’m a developer focused on React UI, API integration, and
          reliable deployments.
        </p>
      </section>

      <section className="about-grid">
        <div className="card">
          <h2>Skills</h2>
          <ul className="muted">
            <li>React, JavaScript, HTML/CSS</li>
            <li>REST APIs, Flask basics</li>
            <li>Linux, Nginx, AWS basics</li>
          </ul>
        </div>

        <div className="card">
          <h2>Open to</h2>
          <ul className="muted">
            <li>Junior Frontend / Full Stack roles</li>
            <li>Melbourne (Hybrid/Onsite) — Sample</li>
            <li>Contract or permanent</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
