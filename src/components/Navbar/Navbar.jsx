import { useState, useEffect } from "react";
import "./Navbar.css";

const navigationLinks = [
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "certificates", label: "Certifications", href: "#certificates" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "gallery", label: "Field Gallery", href: "#gallery" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "contact", label: "Contact", href: "#contact" },
];

function Navbar({ onOpenResume }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const closeMenu = () => setIsMenuOpen(false);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        closeMenu();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  // Section observer for active link highlighting
  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "-25% 0px -65% 0px",
      threshold: 0,
    });

    navigationLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <a className="logo-brand" href="#home" onClick={closeMenu}>
        <div className="logo-badge">AK</div>
        <div className="logo-text-group">
          <span className="logo-name">Athul Krishna</span>
          <span className="logo-status">
            <span className="status-dot" aria-hidden="true" /> Available in Abu Dhabi
          </span>
        </div>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-menu ${isMenuOpen ? "is-open" : ""}`} id="main-navigation">
        <ul className="nav-links">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link-item ${activeSection === link.id ? "active" : ""}`}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <a
            href="https://www.linkedin.com/in/athulkrishna-os"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-btn"
            aria-label="Athul Krishna's LinkedIn Profile"
            onClick={closeMenu}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>LinkedIn</span>
          </a>

          <button
            type="button"
            className="resume-btn"
            onClick={() => {
              closeMenu();
              if (onOpenResume) onOpenResume();
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="12" y1="18" x2="12" y2="12" />
              <polyline points="9 15 12 18 15 15" />
            </svg>
            <span>Resume</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
