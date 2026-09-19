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
      summary: "Leading multi-platform merchant payment ecosystem engineering, Rust AI microservice agents, Go backend services, and cross-platform native mobile applications.",
      metrics: [
        { label: "AI Tool Registry", value: "15+ Tools" },
        { label: "Verification APIs", value: "6+ Providers" },
        { label: "Mobile Bridge", value: "35+ Handlers" }
      ],
      points: [
        "Built and shipped end-to-end features across a multi-platform merchant payments ecosystem spanning a Rust AI agent, Go backend services, native Android/iOS applications, and Vue/Nuxt dashboards.",
        "Engineered a merchant-facing AI assistant in Rust (Axum, Tokio) integrating Google Gemini with a 15+ tool registry (function calling) and Qdrant-based RAG, deployed as a NATS JetStream microservice mesh to automate UPI QR generation, transaction inquiries, payouts, and operational workflows.",
        "Implemented AI-powered experiences across Android and iOS using Firebase AI and Gemini 2.0 Flash, enabling voice input, function calling, streamed responses, and merchant self-service workflows directly within mobile applications.",
        "Designed and maintained REST APIs and backend services in Go (Fiber) backed by PostgreSQL and Redis, powering merchant onboarding, KYC, payments, settlements, OTP handling, notifications, invoice generation, and PDF rendering.",
        "Integrated 6+ verification and compliance providers (PAN, GST, Aadhaar, DigiLocker, bank-account verification, AML screening, OCR document processing) and built a reusable TypeScript KYC SDK.",
        "Shipped cross-platform merchant features on Android (Kotlin, Jetpack Compose) and iOS (Swift, SwiftUI), including a 35+ handler WebView bridge, MLKit document OCR, dynamic UPI QR generation, and Watch/Wear companion applications.",
        "Developed merchant-facing dashboards and internal admin tooling using Vue 3, Nuxt 3/4, Vuetify, Pinia, and Next.js with RBAC, 2FA (TOTP and WebAuthn passkeys), and Liquibase database migrations."
      ],
      tech: ["Rust (Axum)", "Go (Fiber)", "Google Gemini 2.0", "Qdrant RAG", "NATS JetStream", "PostgreSQL", "Redis", "TypeScript SDK", "Vue 3 / Nuxt 4", "Jetpack Compose", "SwiftUI", "Docker"]
    },
    {
      role: "Full Stack Developer",
      company: "LTIMindtree",
      period: "Sept 2023 – Nov 2025",
      location: "Pune, Maharashtra, India",
      type: "Full-Time",
      isCurrent: false,
      summary: "Architected and delivered enterprise-grade web applications, Spring Boot/Node.js microservices, and cloud infrastructure on Azure with high availability.",
      metrics: [
        { label: "System Uptime", value: "99.9%" },
        { label: "API Speedup", value: "+30%" },
        { label: "DevOps Efficiency", value: "-40% Overhead" }
      ],
      points: [
        "Architected, developed, and deployed 10+ enterprise-grade web applications using React.js, Node.js, and Spring Boot hosted on Azure App Services with 99.9% uptime, enhancing deployment efficiency by 35%.",
        "Designed and developed RESTful and GraphQL APIs across Node.js and Spring Boot microservices, enabling scalable inter-service communication and improving API response times by 30%.",
        "Integrated secure authentication using OAuth 2.0 and JWT, implementing Role-Based Access Control (RBAC) to enforce enterprise security standards.",
        "Containerized services with Docker and deployed via Azure DevOps CI/CD pipelines, reducing manual deployment overhead by 40% and ensuring zero-downtime releases.",
        "Enhanced backend performance through Redis caching, asynchronous event handling, connection pooling, and configured Azure App Services, Blob Storage, Function Apps, and Application Insights."
      ],
      tech: ["React.js", "Node.js", "Spring Boot", "Azure App Services", "Docker", "Azure DevOps CI/CD", "GraphQL", "Redis", "OAuth 2.0", "PowerShell"]
    },
    {
      role: "Python Instructor",
      company: "CodeBeat",
      period: "Aug 2023 – Sept 2023",
      location: "Bhubaneswar, Odisha, India",
      type: "Contract",
      isCurrent: false,
      summary: "Educated engineering students in Python programming, Data Structures & Algorithms, and competitive problem solving.",
      metrics: [
        { label: "Student Score", value: "+25% Boost" },
        { label: "Internship Success", value: "80% Rate" }
      ],
      points: [
        "Delivered 20+ interactive Python programming sessions covering core data structures, algorithms, and object-oriented programming, improving students' coding scores by 25%.",
        "Conducted 10+ hands-on workshops preparing 30+ students for tech industry roles, resulting in 80% of students securing internships within 3 months."
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
      summary: "Built landing pages, e-commerce account portals, and published native mobile applications to the Google Play Store.",
      metrics: [
        { label: "Businesses Scaled", value: "1000+" },
        { label: "User Engagement", value: "+15%" }
      ],
      points: [
        "Developed and optimized responsive landing pages for AppyFlux and Zyadashop using HTML, CSS, JavaScript, PHP, and Bootstrap, increasing brand visibility by 30%.",
        "Collaborated in building a scalable e-commerce platform using React, Redux, and Node.js, enabling over 1,000 businesses to create and manage online stores.",
        "Published customer applications on the Google Play Store using Android SDK and Firebase, maintaining daily notifications that led to a 15% increase in user retention."
      ],
      tech: ["React.js", "Redux", "Node.js", "JavaScript", "Android SDK", "Firebase", "Bootstrap"]
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
