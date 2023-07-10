import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };
  var name = "<RSN  />";

  return (
    <div>
      <div className="navbar_container">
        <div className="navbar_left">{name}</div>
        <div className="navbar_right">
          <p onClick={() => scrollToSection("aboutSection")}>About</p>
          <p onClick={() => scrollToSection("toolsSection")}>Tools</p>
          <p onClick={() => scrollToSection("experienceSection")}>Experience</p>
          <p onClick={() => scrollToSection("projectsSection")}>Projects</p>
        </div>
      </div>
      <div className="navbar_line">
        <hr />
      </div>
    </div>
  );
}

export default Navbar; //exporting so that we can import it from App.js
