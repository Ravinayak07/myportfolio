import React from "react";
import { motion } from "framer-motion";
import "./Project.css";
import { 
  FolderGit2, 
  Github, 
  Sparkles, 
  Bot, 
  Server, 
  Smartphone, 
  ShoppingBag,
  ArrowUpRight
} from "lucide-react";

function Project({ id }) {
  const projects = [
    {
      title: "Merchant AI Assistant & RAG Microservice Mesh",
      category: "AI & Distributed Backend",
      featured: true,
      icon: Bot,
      description: "Production-grade merchant AI assistant engineered in Rust (Axum, Tokio) integrated with Google Gemini 2.0 Flash, a 15+ tool function calling registry, and Qdrant Vector DB for Retrieval-Augmented Generation (RAG). Deployed as a NATS JetStream microservice mesh to automate UPI QR generation, payouts, and transaction inquiries.",
      highlights: [
        "Natural-language chat automation for UPI payment status & settlement reporting",
        "15+ tool function-calling registry handling real-time DB queries and payout APIs",
        "Streamed responses and voice-to-text input integrated via Firebase AI & Gemini 2.0 Flash"
      ],
      tech: ["Rust", "Axum/Tokio", "Google Gemini 2.0", "Qdrant Vector DB", "NATS JetStream", "Go (Fiber)", "PostgreSQL", "Redis"],
      github: "https://github.com/Ravinayak07",
      demo: "https://github.com/Ravinayak07"
    },
    {
      title: "Enterprise Cloud Microservice Platform",
      category: "Cloud & Microservices",
      featured: true,
      icon: Server,
      description: "High-throughput enterprise platform powering 10+ microservices built with Spring Boot, Node.js, and React. Deployed on Azure App Services with zero-downtime Azure DevOps CI/CD pipelines, Docker containerization, OAuth 2.0/JWT RBAC, and Redis caching.",
      highlights: [
        "Maintained 99.9% uptime SLA across high-traffic enterprise workloads",
        "Improved API response times by 30% through Redis caching & connection pooling",
        "Reduced manual deployment overhead by 40% via automated Azure DevOps pipelines"
      ],
      tech: ["React.js", "Node.js", "Spring Boot", "Azure App Services", "Azure DevOps", "Docker", "GraphQL", "Redis", "OAuth 2.0"],
      github: "https://github.com/Ravinayak07",
      demo: "https://github.com/Ravinayak07"
    },
    {
      title: "Multi-Platform Merchant Portal & Verification SDK",
      category: "Full Stack & Native Mobile",
      featured: false,
      icon: Smartphone,
      description: "Cross-platform merchant dashboard and administrative suite built with Vue 3, Nuxt 4, Vuetify, and Next.js. Complemented by native Android (Kotlin, Jetpack Compose) and iOS (Swift, SwiftUI) applications with a 35+ handler WebView bridge, MLKit document OCR, and WebAuthn passkeys.",
      highlights: [
        "Reusable TypeScript KYC SDK unifying merchant & admin compliance workflows",
        "Integrated 6+ verification APIs (PAN, Aadhaar, GST, DigiLocker, Bank Verification)",
        "Biometric 2FA (WebAuthn/Passkeys & TOTP) and Watch/Wear OS companion apps"
      ],
      tech: ["Vue 3 / Nuxt 4", "TypeScript SDK", "Kotlin (Jetpack Compose)", "SwiftUI", "Pinia", "WebAuthn Passkeys", "MLKit OCR"],
      github: "https://github.com/Ravinayak07",
      demo: "https://github.com/Ravinayak07"
    },
    {
      title: "Zyadashop E-Commerce & Merchant Platform",
      category: "Web & E-Commerce",
      featured: false,
      icon: ShoppingBag,
      description: "Scalable e-commerce web platform and merchant management portal enabling over 1,000 online store businesses to build catalog storefronts, manage orders, process cart transactions, and publish customer apps to the Google Play Store.",
      highlights: [
        "Scaled platform to support over 1,000 merchant business online storefronts",
        "Integrated real-time order notifications and Google Play Store release tooling",
        "Responsive, high-conversion product catalog UI with full mobile responsiveness"
      ],
      tech: ["React.js", "Redux", "Node.js", "Express.js", "Android SDK", "Firebase"],
      github: "https://github.com/Ravinayak07",
      demo: "https://github.com/Ravinayak07"
    }
  ];

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
