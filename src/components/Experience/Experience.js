import React from "react";
import "./Experience.css";
import ExperienceBox from "./ExperienceBox/ExperienceBox";
import react from "../../images/techStack/react.png";
import vuejs from "../../images/techStack/vuejs.png";
import js from "../../images/techStack/js.png";
import nodejs from "../../images/techStack/nodejs.png";
import firebase from "../../images/techStack/firebase.png";
import html from "../../images/techStack/html.png";
import css from "../../images/techStack/css.png";
import python from "../../images/techStack/python.png";
import cpp from "../../images/techStack/cpp.png";
import bootstrap from "../../images/techStack/bootstrap.png";
import git from "../../images/techStack/git.png";
import java from "../../images/techStack/java.png";
import mysql from "../../images/techStack/mysql.png";
import php from "../../images/techStack/php.png";
import typescript from "../../images/techStack/typescript.png";

function Experience({ id }) {
  const experienceData = [
    {
      title: "AppyFlux technologies Pvt. Ltd",
      sentences: [
        "- Built the landing page websites of Appyflux and its product Zyadashop.",
        "- Built the Account Section of Web Version of ZyadaSshop Using VueJs.",
        "- Contributed as techincal support member by publishing customers applications in the Google Play Store and also by managing the daily notifications",
        "- Cleared queries and problems of the customers",
      ],
      subtitles: "Tech used",
      images: [vuejs, js, html, css, bootstrap, git],
    },
    {
      title: "Freelance Web Developer",
      sentences: [
        "- Successfully Delivered high-quality websites for various clients and their companies.",
        "- Did machine and deep learning projects for Final Year Students through freelancework.",
        "- Demonstrated strong problem-solving and client communication skills while maintaining project timelines.",
      ],
      subtitles: "Tech used",
      images: [html, css, js, react, python, nodejs],
    },
    {
      title: "LTIMindtree",
      sentences: [
        "I success fully completed a 9 week internship training program (IGNITEBatch-1) with LTIMindtree ",
        "I actively engaged in a structured learning process and excelled in all three milestones,surpassing the requirements set for the internship",
      ],
      subtitles: "Tech used",
      images: [react, js, html],
    },

    {
      title: "Python Instructor",
      sentences: [
        "Educating engineering students in Python, DataStructures and Algorithms",
        "Fostering strong problem-solving skills and a practical coding mindset.",
      ],
      subtitles: "Tech used",
      images: [python, js, html],
      // images: [JavaScript, Python, Flask, Wordpress, TensorFlow],
    },
  ];
  return (
    <div id={id} className="ex_container">
      <p className="ex_title">Experience</p>
      <div className="ex_experiencebox_container">
        {/* this map fun calls the ExperienceBox depending on the number of objects in the experienceData
                If experience Data has 3 objects map fun will pass the values of 3 objects one by one  */}
        {experienceData.map((value, key) => (
          <ExperienceBox
            title={value.title}
            sentences={value.sentences}
            subtitles={value.subtitles}
            images={value.images}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
