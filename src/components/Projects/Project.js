import React from "react";
import { motion } from "framer-motion";
import "./Project.css";
import { 
  FolderGit2, 
  Github, 
  Sparkles, 
  ArrowUpRight
} from "lucide-react";

function Project({ id }) {
  // Projects will be added here.
  const projects = [];

  return (
    <section id={id} className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <FolderGit2 size={14} /> Systems & Products
          </span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Highlighting production systems, microservice architectures, and full-stack AI engineering solutions.
          </p>
        </div>

        {projects.length === 0 && (
          <p className="section-subtitle" style={{ textAlign: "center" }}>
            New projects coming soon.
          </p>
        )}

        <div className="projects-grid">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={idx}
                className={`project-card glass-card ${project.featured ? "featured" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="project-card-inner">
                  <div className="project-card-header">
                    <div className="project-icon-wrapper">
                      <Icon size={22} />
                    </div>
                    <span className="project-cat-badge">{project.category}</span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-highlights">
                    {project.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="highlight-item">
                        <Sparkles size={14} className="sparkle-icon" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="project-tech-list">
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="p-tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="project-links-row">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      <Github size={16} />
                      <span>Repository</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn primary"
                    >
                      <span>Details</span>
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Project;
