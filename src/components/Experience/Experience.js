import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  TrendingUp
} from "lucide-react";

function Experience({ id }) {
  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "Mosambee",
      period: "Nov 2025 – Present",
      location: "Mumbai, Maharashtra, India",
      type: "Full-Time",
      isCurrent: true,
      summary: "Building a multi-platform merchant payments ecosystem spanning a Rust AI agent, Go backend services, and Vue/Nuxt dashboards for onboarding, KYC, UPI payments, payouts, and settlements.",
      metrics: [
        { label: "AI Tool Registry", value: "15+ Tools" },
        { label: "Verification Providers", value: "6+" },
        { label: "Microservice Mesh", value: "NATS JetStream" }
      ],
      points: [
        "Built and shipped end-to-end features across a multi-platform merchant payments ecosystem spanning a Rust AI agent, Go backend services, and Vue/Nuxt dashboards, supporting merchant onboarding, KYC, UPI payments, payouts, settlements, and transaction reporting workflows.",
        "Engineered a merchant-facing AI assistant in Rust (Axum, Tokio) integrating Google Gemini and vLLM with a 15+ tool registry and Qdrant-based RAG, deployed as a NATS JetStream microservice mesh to automate UPI QR generation, transaction inquiries, payouts, and operational workflows through natural-language chat.",
        "Designed and maintained REST APIs and backend services in Go (Fiber) backed by PostgreSQL and Redis, powering merchant onboarding, KYC, payments, settlements, OTP handling, notifications, invoice generation, PDF rendering, and third-party fintech integrations.",
        "Integrated 6+ verification and compliance providers, including PAN, GST, Aadhaar, DigiLocker, bank-account verification, AML screening, and OCR-based document processing, streamlining merchant onboarding and compliance workflows.",
        "Developed merchant-facing dashboards, internal admin panels, and operations tooling using Vue 3, Nuxt 3/4, Vuetify, Pinia, and Next.js, implementing RBAC, 2FA (TOTP and WebAuthn passkeys), document annotation workflows, reporting systems, and operational management tools.",
        "Improved scalability and deployment reliability by implementing Dockerized services, Liquibase-managed database migrations, graceful shutdown handling, AWS S3 integrations, push notification systems, and automated PDF/Excel reporting pipelines for receipts and transaction analytics."
      ],
      tech: ["Rust (Axum, Tokio)", "Go (Fiber)", "Google Gemini", "vLLM", "Qdrant RAG", "NATS JetStream", "PostgreSQL", "Redis", "Vue 3 / Nuxt 3/4", "Next.js", "Docker", "Liquibase", "AWS S3"]
    },
    {
      role: "Full Stack Developer",
      company: "LTIMindtree",
      period: "Sept 2023 – Nov 2025",
      location: "Pune, Maharashtra, India",
      type: "Full-Time",
      isCurrent: false,
      summary: "Architected and delivered enterprise-grade web applications, Node.js microservices, and cloud infrastructure on Azure with high availability.",
      metrics: [
        { label: "System Uptime", value: "99.9%" },
        { label: "API Speedup", value: "+30%" },
        { label: "Deployment Overhead", value: "-40%" }
      ],
      points: [
        "Architected, developed, and deployed 10+ enterprise-grade web applications using React.js and Node.js hosted on Azure App Services with 99.9% uptime, enhancing deployment efficiency by 35%.",
        "Designed and developed RESTful and GraphQL APIs across Node.js, enabling scalable inter-service communication and improving API response times by 30%.",
        "Integrated secure authentication using OAuth 2.0 and JWT, implementing Role-Based Access Control (RBAC) and ensuring compliance with enterprise-grade security standards.",
        "Built and optimized microservice-based architectures, containerized with Docker, and deployed via Azure DevOps CI/CD pipelines, reducing manual deployment overhead by 40% and ensuring zero-downtime releases.",
        "Enhanced backend performance through caching (Redis), asynchronous event handling, and connection pooling, reducing latency and improving throughput for high-traffic systems.",
        "Configured and monitored Azure resources including App Services, Blob Storage, Function Apps, and Application Insights, implementing environment-based configurations for staging and production workloads.",
        "Automated system health checks, log analysis, and maintenance tasks using PowerShell scripts and Azure Monitor, improving system reliability and observability across deployments."
      ],
      tech: ["React.js", "Node.js", "GraphQL", "Azure App Services", "Azure DevOps CI/CD", "Docker", "Redis", "OAuth 2.0 / JWT", "Azure Monitor", "PowerShell"]
    },
    {
      role: "Python Instructor",
      company: "CodeBeat",
      period: "Aug 2023 – Sept 2023",
      location: "Bhubaneswar, Odisha, India",
      type: "Internship",
      isCurrent: false,
      summary: "Taught engineering students Python programming, data structures & algorithms, and competitive problem solving.",
      metrics: [
        { label: "Assessment Scores", value: "+25%" },
        { label: "Internship Placement", value: "80%" }
      ],
      points: [
        "Delivered 20+ interactive Python programming sessions covering data structures and algorithms and object-oriented programming, improving students' problem-solving abilities and increasing their average coding assessment scores by 25%.",
        "Conducted 10+ hands-on coding workshops on advanced Python topics, preparing 30+ students for competitive programming and tech industry roles, resulting in 80% of students securing internships within 3 months of course completion."
      ],
      tech: ["Python", "Data Structures & Algorithms", "Object-Oriented Programming", "Competitive Coding"]
    },
    {
      role: "Frontend Developer Intern",
      company: "AppyFlux",
      period: "Oct 2021 – Oct 2022",
      location: "Bhubaneswar, Odisha, India",
      type: "Internship",
      isCurrent: false,
      summary: "Built landing pages and a multi-merchant e-commerce platform, and published customer apps to the Google Play Store.",
      metrics: [
        { label: "Businesses Onboarded", value: "1000+" },
        { label: "User Engagement", value: "+15%" }
      ],
      points: [
        "Developed and optimized responsive landing pages for AppyFlux and Zyadashop using HTML, CSS, JavaScript, PHP, and Bootstrap, enhancing user engagement and increasing brand visibility by 30%.",
        "Collaborated in building a scalable e-commerce platform using React, Redux, and Node.js, enabling over 1,000 businesses to create, manage, and scale their online stores effectively.",
        "Published and managed customer applications on the Google Play Store using Android SDK and Firebase, maintaining daily notifications that led to a 15% increase in user engagement and retention."
      ],
      tech: ["React.js", "Redux", "Node.js", "JavaScript", "PHP", "Bootstrap", "Android SDK", "Firebase"]
    }
  ];

  return (
    <section id={id} className="experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Briefcase size={14} /> Career History
          </span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Track record of architecting high-scale microservices, payment systems, enterprise cloud apps, and AI agents.
          </p>
        </div>

        <div className="timeline-wrapper">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="timeline-item"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="timeline-badge-column">
                <div className={`timeline-node ${exp.isCurrent ? "current" : ""}`}>
                  <Building2 size={18} />
                </div>
                {idx !== experiences.length - 1 && <div className="timeline-connector" />}
              </div>

              <div className="timeline-card glass-card">
                <div className="card-top-bar">
                  <div className="role-company-info">
                    <h3 className="role-title">
                      {exp.role}
                      {exp.isCurrent && <span className="present-pill">Present</span>}
                    </h3>
                    <div className="company-meta">
                      <span className="company-name">{exp.company}</span>
                      <span className="meta-divider">•</span>
                      <span className="exp-location">
                        <MapPin size={13} /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="period-badge">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="exp-summary">{exp.summary}</p>

                {/* Metrics Badges */}
                {exp.metrics && (
                  <div className="exp-metrics-row">
                    {exp.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="exp-metric-pill">
                        <TrendingUp size={13} className="metric-icon" />
                        <span className="metric-val">{m.value}</span>
                        <span className="metric-lbl">{m.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bullet Points */}
                <ul className="exp-bullets">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx}>
                      <CheckCircle2 size={16} className="bullet-check" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="exp-tech-row">
                  {exp.tech.map((t, tIdx) => (
                    <span key={tIdx} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
