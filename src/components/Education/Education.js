import React from "react";
import { motion } from "framer-motion";
import "./Education.css";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

function Education({ id }) {
  const educationList = [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Lovely Professional University",
      period: "Aug 2019 – Aug 2023",
      location: "Jalandhar, Punjab, India",
      grade: "CGPA: 7.6 / 10.0",
      description: "Focused on Software Engineering, Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, and Full Stack Web Development."
    },
    {
      degree: "Intermediate (Class XII - Math & Science)",
      institution: "Sri Chaitanya Educational Institutions",
      period: "Aug 2017 – Aug 2018",
      location: "Vizag, Andhra Pradesh, India",
      grade: "Score: 75%",
      description: "Mathematics, Physics, Chemistry focus."
    }
  ];

  const certifications = [
    {
      title: "Data Structures and Algorithms",
      issuer: "GeeksforGeeks",
      desc: "Advanced problem solving, algorithmic thinking, array/graph/tree traversal, dynamic programming."
    },
    {
      title: "Web Development Using React",
      issuer: "Cipher Schools",
      desc: "Modern JavaScript, React components, state management, hooks, component architecture."
    }
  ];

  return (
    <section id={id} className="education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <GraduationCap size={14} /> Background
          </span>
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">
            Academic foundations in Computer Science and continuous professional certifications.
          </p>
        </div>

        <div className="education-grid">
          {/* Education Column */}
          <div className="edu-column">
            <h3 className="column-title">
              <GraduationCap size={20} className="col-icon" /> Academic Education
            </h3>

            <div className="edu-cards-list">
              {educationList.map((edu, idx) => (
                <motion.div
                  key={idx}
                  className="edu-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="edu-card-top">
                    <h4 className="edu-degree">{edu.degree}</h4>
                    <span className="edu-grade-pill">{edu.grade}</span>
                  </div>

                  <div className="edu-institution-row">
                    <span className="edu-institution">{edu.institution}</span>
                    <span className="meta-divider">•</span>
                    <span className="edu-location">
                      <MapPin size={13} /> {edu.location}
                    </span>
                  </div>

                  <div className="edu-period">
                    <Calendar size={13} /> {edu.period}
                  </div>

                  <p className="edu-desc">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="edu-column">
            <h3 className="column-title">
              <Award size={20} className="col-icon amber" /> Verified Certifications
            </h3>

            <div className="cert-cards-list">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  className="cert-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="cert-header">
                    <Award size={22} className="cert-badge-icon" />
                    <div>
                      <h4 className="cert-title">{cert.title}</h4>
                      <span className="cert-issuer">Issued by {cert.issuer}</span>
                    </div>
                  </div>
                  <p className="cert-desc">{cert.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
