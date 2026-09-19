import React from "react";
import "./Contact.css";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  Sparkles,
  ArrowUpRight,
  Code2
} from "lucide-react";

function Contact({ id }) {
  return (
    <footer id={id} className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Mail size={14} /> Reach Out
          </span>
          <h2 className="section-title">Let's Connect & Build</h2>
          <p className="section-subtitle">
            Whether you are looking for a Senior Full Stack Developer, AI Microservices Specialist, or technical consultant, I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="contact-grid">
          {/* Main Contact CTA Card */}
          <div className="contact-card main-cta-card glass-card">
            <div className="cta-header">
              <Sparkles size={24} className="sparkle-glow" />
              <h3>Start a Conversation</h3>
            </div>
            <p>
              I specialize in Go & Rust microservices, React/Vue/Next.js frontend architectures, and Gemini 2.0 AI integrations. Send an email or connect on LinkedIn to get in touch.
            </p>

            <div className="cta-buttons-row">
              <a href="mailto:ravishankarnayak1@outlook.com" className="btn-primary">
                <Send size={18} />
                <span>Send Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ravi-shankar-nayak-302881192/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Linkedin size={18} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Quick Info Grid */}
          <div className="contact-info-list">
            <a href="mailto:ravishankarnayak1@outlook.com" className="info-card glass-card">
              <div className="info-icon-box">
                <Mail size={20} />
              </div>
              <div className="info-text">
                <span className="info-label">Email Address</span>
                <span className="info-val">ravishankarnayak1@outlook.com</span>
              </div>
              <ArrowUpRight size={18} className="info-arrow" />
            </a>

            <a href="tel:+918468879688" className="info-card glass-card">
              <div className="info-icon-box green">
                <Phone size={20} />
              </div>
              <div className="info-text">
                <span className="info-label">Phone / Mobile</span>
                <span className="info-val">+91-8468879688</span>
              </div>
              <ArrowUpRight size={18} className="info-arrow" />
            </a>

            <div className="info-card glass-card">
              <div className="info-icon-box amber">
                <MapPin size={20} />
              </div>
              <div className="info-text">
                <span className="info-label">Location</span>
                <span className="info-val">Mumbai, Maharashtra, India</span>
              </div>
            </div>

            <a
              href="https://github.com/Ravinayak07"
              target="_blank"
              rel="noopener noreferrer"
              className="info-card glass-card"
            >
              <div className="info-icon-box purple">
                <Github size={20} />
              </div>
              <div className="info-text">
                <span className="info-label">GitHub</span>
                <span className="info-val">github.com/Ravinayak07</span>
              </div>
              <ArrowUpRight size={18} className="info-arrow" />
            </a>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-brand">
            <Code2 size={18} className="logo-icon" />
            <span>Ravi Shankar Nayak</span>
          </div>
          <p className="copyright-text">
            © 2026 Ravi Shankar Nayak. Built with React, Tailwind & High-Performance Engineering.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
