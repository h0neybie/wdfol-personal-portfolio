import React from "react";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
      <h2 className="footer__title" style={{ fontSize: "34px" }}>Get In Touch</h2>

        <div className="footer__links">
  <a href="https://github.com/h0neybie" target="_blank" rel="noopener noreferrer" className="footer__link">
    Github
  </a>
  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__link">
    LinkedIn
  </a>
  <a href="mailto:your-email@example.com" className="footer__link">
    Email
  </a>
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer__link">
    Facebook
  </a>
</div>


        <p className="footer__copyright">
          © {new Date().getFullYear()} Abby Dizon Portfolio. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
