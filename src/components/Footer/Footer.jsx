import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-text">
          © {new Date().getFullYear()} Mohamed — Built with React.
        </p>
        <div className="footer-links">
          <a
            href="https://github.com/YOUR-USERNAME"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/YOUR-LINKEDIN"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:you@email.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
