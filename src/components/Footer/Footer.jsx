import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-left">
          <strong>Mohamed Fadhih</strong>
          <p className="footer-note">
            Frontend / Full Stack Developer — Melbourne
          </p>
        </div>

        <div className="footer-links">
          <a href="/resume.pdf" target="_blank">
            Resume
          </a>
          <a href="mailto:mdfadhih377@gmail.com">Email</a>
          <a href="https://linkedin.com/in/mdfadhih" target="_blank">
            LinkedIn
          </a>
          <a href="https://github.com/mdfadhih" target="_blank">
            GitHub
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Mohamed Fadhih
      </div>
    </footer>
  );
}
