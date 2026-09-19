import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Code2, Menu, X, Sparkles } from "lucide-react";

const navItems = [
  { id: "aboutSection", label: "About" },
  { id: "toolsSection", label: "Skills" },
  { id: "experienceSection", label: "Experience" },
  { id: "projectsSection", label: "Projects" },
  { id: "educationSection", label: "Education" },
  { id: "contactSection", label: "Contact" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("aboutSection");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#aboutSection" onClick={(e) => { e.preventDefault(); scrollToSection("aboutSection"); }} className="navbar-logo">
          <div className="logo-icon-wrapper">
            <Code2 size={22} className="logo-icon" />
          </div>
          <span className="logo-text">
            RAVI<span className="logo-accent">.NAYAK</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar-menu-desktop">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? "active" : ""}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
              {activeSection === item.id && <span className="active-dot" />}
            </button>
          ))}
        </nav>

        <div className="navbar-actions">
          <a
            href="https://www.linkedin.com/in/ravi-shankar-nayak-302881192/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-cta-btn"
          >
            <Sparkles size={16} />
            <span>Connect</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <div className="mobile-nav-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`mobile-nav-link ${activeSection === item.id ? "active" : ""}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://www.linkedin.com/in/ravi-shankar-nayak-302881192/"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-cta-btn"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
