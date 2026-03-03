import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [status, setStatus] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    setStatus("Form is a placeholder. Connect to Formspree/EmailJS later ✅");
  }

  return (
    <div className="stack-lg">
      <section className="card">
        <h1>Contact</h1>
        <p className="muted">
          Email and LinkedIn are best. (Replace details later.)
        </p>
      </section>

      <section className="contact-grid">
        <div className="card">
          <h2>Direct</h2>
          <p className="muted">
            <b>Email:</b>{" "}
            <a className="link" href="mailto:you@email.com">
              you@email.com
            </a>
          </p>
          <p className="muted">
            <b>LinkedIn:</b>{" "}
            <a
              className="link"
              href="https://www.linkedin.com/in/YOUR-LINKEDIN"
              target="_blank"
              rel="noreferrer"
            >
              Profile
            </a>
          </p>
          <p className="muted">
            <b>GitHub:</b>{" "}
            <a
              className="link"
              href="https://github.com/YOUR-USERNAME"
              target="_blank"
              rel="noreferrer"
            >
              Profile
            </a>
          </p>
        </div>

        <form className="card" onSubmit={onSubmit}>
          <h2>Message</h2>
          <label className="label">Name</label>
          <input className="input" required placeholder="Your name" />
          <label className="label">Email</label>
          <input
            className="input"
            required
            type="email"
            placeholder="your@email.com"
          />
          <label className="label">Message</label>
          <textarea
            className="textarea"
            required
            rows="5"
            placeholder="Your message..."
          />
          <button className="btn" type="submit">
            Send
          </button>
          {status && (
            <p className="muted" style={{ marginTop: 10 }}>
              {status}
            </p>
          )}
        </form>
      </section>
    </div>
  );
}
