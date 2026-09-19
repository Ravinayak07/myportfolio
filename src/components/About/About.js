import React from "react";
import "./About.css";
import TypedComponent from "./TypedComponent";
import profileImg from "../../images/profile2.jpeg";
import Particle from "../../Particle";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Briefcase, 
  Award, 
  Zap, 
  Terminal, 
  ArrowRight
} from "lucide-react";

function About({ id }) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id={id} className="about-section">
      <Particle />
      <div className="container about-container">
        <div className="about-content">
          <div className="role-badge">
            <span className="pulse-dot"></span>
            Senior Full Stack Developer @ Mosambee
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Ravi Shankar Nayak</span>
          </h1>

          <div className="typed-container">
            <span className="typed-prefix">Specialized in </span>
            <TypedComponent />
          </div>

          <p className="hero-description">
            Full Stack & AI Engineer with <strong>3+ years of experience</strong> architecting enterprise web applications, high-performance payment microservices in <strong>Go & Rust</strong>, and LLM-powered agentic systems integrating <strong>Google Gemini 2.0 Flash</strong>, Qdrant RAG, and NATS JetStream mesh.
          </p>

          <div className="hero-location">
            <MapPin size={16} className="location-icon" />
            <span>Mumbai, Maharashtra, India</span>
          </div>

          {/* Quick Metrics */}
          <div className="metrics-grid">
            <div className="metric-card glass-card">
              <div className="metric-icon-wrapper">
                <Briefcase size={20} />
              </div>
              <div className="metric-info">
                <span className="metric-value">3+ Yrs</span>
                <span className="metric-label">Industry Exp</span>
              </div>
            </div>

            <div className="metric-card glass-card">
              <div className="metric-icon-wrapper amber">
                <Zap size={20} />
              </div>
              <div className="metric-info">
                <span className="metric-value">10+</span>
                <span className="metric-label">Enterprise Apps</span>
              </div>
            </div>

            <div className="metric-card glass-card">
              <div className="metric-icon-wrapper emerald">
                <Terminal size={20} />
              </div>
              <div className="metric-info">
                <span className="metric-value">15+</span>
                <span className="metric-label">AI Agent Tools</span>
              </div>
            </div>

            <div className="metric-card glass-card">
              <div className="metric-icon-wrapper purple">
                <Award size={20} />
              </div>
              <div className="metric-info">
                <span className="metric-value">99.9%</span>
                <span className="metric-label">Uptime SLA</span>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="hero-cta-group">
            <button 
              className="btn-primary"
              onClick={() => scrollToSection("experienceSection")}
            >
              <span>View Career Trajectory</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="mailto:ravishankarnayak1@outlook.com"
              className="btn-secondary"
            >
              <Mail size={18} />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="social-links-row">
            <span className="social-label">Connect:</span>
            <a
              href="https://github.com/Ravinayak07"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ravi-shankar-nayak-302881192/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:ravishankarnayak1@outlook.com"
              className="social-icon-btn"
              title="Email Me"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Profile Card */}
        <div className="about-profile-card">
          <div className="avatar-frame">
            <div className="avatar-glow-ring"></div>
            <img src={profileImg} alt="Ravi Shankar Nayak" className="avatar-image" />
            <div className="avatar-status-badge">
              <span className="status-indicator"></span>
              Building FinTech & AI Systems
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
