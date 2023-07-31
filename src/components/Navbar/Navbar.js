import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };
  const name = "RAVI";

  return (
    <div>
      <div className="navbar_container">
        <a href="/" className="logo">
          <i class="fa-solid fa-code fa-spin fa-spin-reverse"></i> {name}
        </a>
        <div className="navbar">
          <p className="active" onClick={() => scrollToSection("aboutSection")}>
            About
          </p>
          <p onClick={() => scrollToSection("toolsSection")}>Skills</p>
          <p onClick={() => scrollToSection("experienceSection")}>Experience</p>
          <p onClick={() => scrollToSection("projectsSection")}>Projects</p>
          <p onClick={() => scrollToSection("projectsSection")}>Contact</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar; //exporting so that we can import it from App.js
