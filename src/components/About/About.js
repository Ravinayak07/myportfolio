import react from "react";
import "./About.css";
import TypedComponent from "./TypedComponent";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png"; /* We need to add extension for every file except .js files */
function About({ id }) {
  return (
    <>
      <div id={id} className="about_container">
        <div className="aboutBio">
          <p className="about_text1">
            <span className="highlighted_text">Hi</span> my name is
          </p>
          <p className="about_text2">Ravi Shankar Nayak</p>
          <p className="about_text3">
            {/* I am a <span className="highlighted_text">Front-End </span>Developer */}
            <TypedComponent />
          </p>
          <p className="about_description">
            I am did my graduation in Computer Science Student from
            <span className="highlighted_text">
              {" "}
              Lovely Professional University
            </span>
            .
            <br />
            <br />I Love making{" "}
            <span className="highlighted_text">Frond-End </span>
            Web Development Projects
            <br />
            <br />I am an <span className="highlighted_text">Cloud</span>{" "}
            Enthusiast and also Love contributing to{" "}
            <span className="highlighted_text">open source</span> Projects
          </p>
          <div>
            <a href="https://github.com/Ravinayak07" target="_blank">
              <img src={github} alt="github" />
            </a>

            <a
              href="https://www.linkedin.com/in/ravi-shankar-nayak-302881192/"
              target="_blank"
            >
              <img src={linkedin} alt="github" />
            </a>
          </div>
          <a href="mailto: ravishankarnayak2000@gmail.com">
            <button className="about_button">Get in Touch</button>
          </a>
        </div>
        <img src="../../assets/images/Profile.png" />
      </div>
    </>
  );
}

export default About;
