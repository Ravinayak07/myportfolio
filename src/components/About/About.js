import React from "react";
import "./About.css";
import TypedComponent from "./TypedComponent";
import github from "../../images/github.png";
import profile from "../../images/profile2.jpeg";
import linkedin from "../../images/linkedin.png";
import Particle from "../../Particle"; // ✅ make sure you import it

function About({ id }) {
  return (
    <section id={id} className="about-section">
      <Particle /> {/* Particles will stay inside this section */}
      <div className="about_container">
        <div className="aboutBio">
          <p className="about_text">
            <span>Hi</span> my name is
          </p>
          <p className="about_text">Ravi Shankar Nayak</p>
          <p className="about_text">
            I am
            <span className="about_text2">
              <TypedComponent />
            </span>
          </p>
          <div>
            <a href="https://github.com/Ravinayak07" target="_blank">
              <img src={github} alt="github" />
            </a>

            <a
              href="https://www.linkedin.com/in/ravi-shankar-nayak-302881192/"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
          <a href="mailto: ravishankarnayak2000@gmail.com">
            <button className="about_button">Get in Touch</button>
          </a>
        </div>
        <img src={profile} alt="profile" />
      </div>
    </section>
  );
}

export default About;
