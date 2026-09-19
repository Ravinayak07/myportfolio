import React, { useState } from "react";
import { motion } from "framer-motion";
import "./TechStack.css";
import { 
  Code, 
  Server, 
  Layout, 
  Database, 
  Cloud, 
  Cpu, 
  Sparkles,
  Zap,
  ShieldCheck,
  Flame,
  Layers,
  Terminal,
  Activity
} from "lucide-react";

// Existing image assets
import reactImg from "../../images/techStack/react.png";
import vueImg from "../../images/techStack/vuejs.png";
import jsImg from "../../images/techStack/js.png";
import nodeImg from "../../images/techStack/nodejs.png";
import firebaseImg from "../../images/techStack/firebase.png";
import pythonImg from "../../images/techStack/python.png";
import cppImg from "../../images/techStack/cpp.png";
import javaImg from "../../images/techStack/java.png";
import mysqlImg from "../../images/techStack/mysql.png";
import tsImg from "../../images/techStack/typescript.png";

function TechStack({ id }) {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "All Stack", icon: Sparkles },
    { id: "languages", label: "Languages", icon: Code },
    { id: "backend", label: "Backend & Microservices", icon: Server },
    { id: "frontend", label: "Frontend & Mobile", icon: Layout },
    { id: "databases", label: "Databases & Vector", icon: Database },
    { id: "cloud", label: "Cloud & DevOps", icon: Cloud },
    { id: "ai", label: "AI & Security", icon: Cpu },
  ];

  // Core highlighted technologies for Orbit Grid
  const featuredCoreStack = [
    { name: "Go", tag: "Backend & Microservices", icon: "GO", color: "#00ADD8" },
    { name: "Rust", tag: "Async & AI Agents", icon: "RS", color: "#F74C00" },
    { name: "TypeScript", tag: "Full Stack & SDKs", img: tsImg, color: "#3178C6" },
    { name: "Google Gemini 2.0", tag: "LLMs & Function Calling", lucide: Sparkles, color: "#8E75FF" },
    { name: "React / Next.js", tag: "SSR & Web Apps", img: reactImg, color: "#61DAFB" },
    { name: "Vue 3 / Nuxt 4", tag: "Dashboards & Pinia", img: vueImg, color: "#4FC08D" },
    { name: "PostgreSQL", tag: "Relational & SQLx", lucide: Database, color: "#4169E1" },
    { name: "Docker & Azure", tag: "Cloud Infrastructure", lucide: Cloud, color: "#0078D4" },
  ];

  const skillGroups = [
    {
      category: "languages",
      title: "Languages",
      icon: Code,
      skills: [
        { name: "Go", level: "Expert", tag: "Fiber, Concurrency", abbr: "GO", color: "#00ADD8" },
        { name: "Rust", level: "Advanced", tag: "Axum, Tokio", abbr: "RS", color: "#F74C00" },
        { name: "TypeScript", level: "Expert", tag: "Full Stack & Node", img: tsImg, color: "#3178C6" },
        { name: "JavaScript", level: "Expert", tag: "ES6+, V8 Engine", img: jsImg, color: "#F7DF1E" },
        { name: "Python", level: "Advanced", tag: "FastAPI, Flask, DSA", img: pythonImg, color: "#3776AB" },
        { name: "Java", level: "Proficient", tag: "Spring Boot Enterprise", img: javaImg, color: "#ED8B00" },
        { name: "Kotlin", level: "Proficient", tag: "Android Native", abbr: "KT", color: "#7F52FF" },
        { name: "SQL", level: "Expert", tag: "Complex Analytics", lucide: Database, color: "#4169E1" },
        { name: "C++", level: "Proficient", tag: "Data Structures", img: cppImg, color: "#00599C" },
      ],
    },
    {
      category: "backend",
      title: "Backend & Microservices",
      icon: Server,
      skills: [
        { name: "Go (Fiber)", level: "Core", tag: "High-Throughput APIs", abbr: "FIB", color: "#00ADD8" },
        { name: "Rust (Axum)", level: "Core", tag: "Async AI Mesh", abbr: "AX", color: "#F74C00" },
        { name: "Node.js", level: "Core", tag: "GraphQL & Event Driven", img: nodeImg, color: "#339933" },
        { name: "Spring Boot", level: "Experienced", tag: "Microservices", abbr: "SB", color: "#6DB33F" },
        { name: "FastAPI", level: "Experienced", tag: "AI Endpoints", abbr: "FA", color: "#009688" },
        { name: "REST & GraphQL", level: "Expert", tag: "API Schemas & Auth", lucide: Activity, color: "#E535AB" },
        { name: "NATS JetStream", level: "Advanced", tag: "Streaming Mesh", abbr: "NATS", color: "#00C39A" },
      ],
    },
    {
      category: "frontend",
      title: "Frontend & Mobile",
      icon: Layout,
      skills: [
        { name: "React", level: "Expert", tag: "Web Applications", img: reactImg, color: "#61DAFB" },
        { name: "Next.js", level: "Expert", tag: "SSR & App Router", abbr: "NEXT", color: "#FFFFFF" },
        { name: "Vue 3", level: "Expert", tag: "Composition API", img: vueImg, color: "#4FC08D" },
        { name: "Nuxt 4", level: "Expert", tag: "SSR Dashboards", abbr: "NUXT", color: "#00DC82" },
        { name: "Tailwind CSS", level: "Expert", tag: "Glassmorphism UI", lucide: Layers, color: "#38BDF8" },
        { name: "Jetpack Compose", level: "Advanced", tag: "Android UI", abbr: "CMP", color: "#4285F4" },
        { name: "SwiftUI", level: "Advanced", tag: "iOS Native Apps", abbr: "SW", color: "#F05138" },
      ],
    },
    {
      category: "databases",
      title: "Databases & Vector DB",
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: "Expert", tag: "SQLx, Liquibase", lucide: Database, color: "#4169E1" },
        { name: "Qdrant", level: "Advanced", tag: "Vector RAG Embeddings", abbr: "QDR", color: "#DC2626" },
        { name: "Redis", level: "Expert", tag: "Cache & Rate Limiting", abbr: "RDS", color: "#DC382D" },
        { name: "ClickHouse", level: "Advanced", tag: "Columnar Analytics", abbr: "CH", color: "#FFCC00" },
        { name: "MySQL", level: "Experienced", tag: "Relational DB", img: mysqlImg, color: "#4479A1" },
        { name: "Firestore", level: "Expert", tag: "Realtime Store", img: firebaseImg, color: "#FFCA28" },
      ],
    },
    {
      category: "cloud",
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS Services", level: "Advanced", tag: "EC2, S3, Lambda, VPC", abbr: "AWS", color: "#FF9900" },
        { name: "Azure Services", level: "Advanced", tag: "App Services, Pipelines", abbr: "AZ", color: "#0078D4" },
        { name: "Docker", level: "Expert", tag: "Containerization", abbr: "DCK", color: "#2496ED" },
        { name: "Kubernetes", level: "Experienced", tag: "K8s Orchestration", abbr: "K8S", color: "#326CE5" },
        { name: "CI/CD Pipelines", level: "Expert", tag: "Zero-Downtime Builds", lucide: Flame, color: "#F05032" },
        { name: "OpenTelemetry", level: "Experienced", tag: "Tracing & Observability", abbr: "OTEL", color: "#F5A800" },
      ],
    },
    {
      category: "ai",
      title: "AI & Security Workflows",
      icon: Cpu,
      skills: [
        { name: "Gemini 2.0 Flash", level: "Expert", tag: "Function Calling AI", lucide: Sparkles, color: "#8E75FF" },
        { name: "RAG Systems", level: "Expert", tag: "Vector Search Injection", abbr: "RAG", color: "#34D399" },
        { name: "Firebase AI", level: "Advanced", tag: "Voice & Multimodal", img: firebaseImg, color: "#FFCA28" },
        { name: "Prompt Engineering", level: "Expert", tag: "Structured Outputs", lucide: Terminal, color: "#38BDF8" },
        { name: "OAuth 2.0 & JWT", level: "Expert", tag: "RBAC Security", lucide: ShieldCheck, color: "#10B981" },
        { name: "Passkeys & WebAuthn", level: "Advanced", tag: "Biometric 2FA Auth", lucide: Zap, color: "#F59E0B" },
      ],
    },
  ];

  const filteredGroups = activeTab === "all" 
    ? skillGroups 
    : skillGroups.filter(g => g.category === activeTab);

  return (
    <section id={id} className="techstack-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} /> Core Capabilities
          </span>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">
            Modern full-stack engineering, high-performance distributed systems, cloud microservices, and AI integrations.
          </p>
        </div>

        {/* Top Featured Core Tech Grid */}
        <div className="core-stack-showcase">
          <div className="showcase-header">
            <Zap size={18} className="zap-icon" />
            <span>Flagship Tech Stack</span>
          </div>

          <div className="core-stack-grid">
            {featuredCoreStack.map((tech, idx) => (
              <motion.div
                key={idx}
                className="core-stack-card glass-card"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="core-card-icon" style={{ borderColor: tech.color }}>
                  {tech.img ? (
                    <img src={tech.img} alt={tech.name} className="tech-icon-img" />
                  ) : tech.lucide ? (
                    <tech.lucide size={22} style={{ color: tech.color }} />
                  ) : (
                    <span className="tech-icon-abbr" style={{ color: tech.color }}>{tech.icon}</span>
                  )}
                </div>
                <div className="core-card-details">
                  <span className="core-tech-name">{tech.name}</span>
                  <span className="core-tech-tag">{tech.tag}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="tech-filter-tabs">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                className={`filter-tab-btn ${activeTab === cat.id ? "active" : ""}`}
                onClick={() => setActiveTab(cat.id)}
              >
                <Icon size={16} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Categorized Bento Grid */}
        <div className={`skill-groups-grid ${activeTab !== "all" ? "single-view" : ""}`}>
          {filteredGroups.map((group, groupIdx) => {
            const GroupIcon = group.icon;
            return (
              <motion.div
                key={group.category}
                className="skill-group-card glass-card"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: groupIdx * 0.08 }}
              >
                <div className="group-card-header">
                  <div className="group-icon-badge">
                    <GroupIcon size={20} />
                  </div>
                  <h3 className="group-card-title">{group.title}</h3>
                  <span className="group-count">{group.skills.length} Technologies</span>
                </div>

                {/* Grid of Visual Tech Badges */}
                <div className="skills-badge-grid">
                  {group.skills.map((skill, sIdx) => {
                    const LucideIcon = skill.lucide;
                    return (
                      <div key={sIdx} className="tech-tile-badge">
                        <div className="tile-icon-box" style={{ borderColor: `${skill.color}40`, backgroundColor: `${skill.color}12` }}>
                          {skill.img ? (
                            <img src={skill.img} alt={skill.name} className="tile-img" />
                          ) : LucideIcon ? (
                            <LucideIcon size={18} style={{ color: skill.color }} />
                          ) : (
                            <span className="tile-abbr" style={{ color: skill.color }}>{skill.abbr}</span>
                          )}
                        </div>

                        <div className="tile-info">
                          <div className="tile-name-row">
                            <span className="tile-name">{skill.name}</span>
                            <span className="tile-level-dot" style={{ backgroundColor: skill.color }} title={skill.level} />
                          </div>
                          <span className="tile-tag">{skill.tag}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
