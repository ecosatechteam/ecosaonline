import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <img
            src="/logo.png"
            alt="ECOSA Logo"
            className="footer-logo"
          />

          <div>
            <h3>ECOSA</h3>

            <p>Equatorial College Ibanda Old Students Association</p>

            <p className="footer-tagline">
              Together for a <br />
              Brighter Future.
            </p>

            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>

              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>

              <a href="#" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>

          <a href="/">Home</a>
          <a href="/about">About ECOSA</a>
          <a href="/projects">Projects</a>
          <a href="/resources">Resources</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Membership */}
        <div className="footer-links">
          <h4>Membership</h4>

          <a href="/register">Register</a>
          <a href="/members">Members</a>
          <a href="/chapters">Chapters</a>
          <a href="/payments">Membership Payments</a>
        </div>

        {/* Support */}
        <div className="footer-links">
          <h4>Support</h4>

          <a href="/community">Community</a>
          <a href="/jobs">Job Board</a>
          <a href="/projects">Projects</a>
          <a href="/resources">Resources</a>
        </div>

        {/* Contact */}
        <div className="footer-links">
          <h4>Contact</h4>

          <p>📞 +256 700 123 456</p>
          <p>✉️ info@ecosa.org</p>
          <p>
            📍 Ibanda District,
            <br />
            Uganda
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} ECOSA — Equatorial College Ibanda Old
        Students Association. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
