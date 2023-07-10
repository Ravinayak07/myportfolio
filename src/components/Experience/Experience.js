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
      images: [react, js, html],
    },
    {
      title: "LTIMindtree",
      sentences: [
        "I success fully completed a 9 week internship training program (IGNITEBatch-1) with LTIMindtree during which I actively engaged in a structured learning process and excelled in all three milestones,surpassing the requirements set for the internship",
      ],
      subtitles: "Tech used",
      images: [react, js, html],
    },
    {
      title: "Freelance Web Developer",
      sentences: [
        "Successfully delivered high-quality websites for various clients and their companies.",
        "Also did machine and deep learning projects for Final Year Students through freelancework.",
      ],
      subtitles: "Tech used",
      images: [react, js, html],
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
