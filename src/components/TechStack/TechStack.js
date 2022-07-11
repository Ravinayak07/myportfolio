import React from "react";
import "./TechStack.css";
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
import TechStackIcon from "./TechStackIcon/TechStackIcon.js";

function TechStack() {
  const techstackData = [
    {
      iconImage: react,
      iconAltproperty: "reactImage",
      iconName: "React",
    },
    {
      iconImage: vuejs,
      iconAltproperty: "vueJsImage",
      iconName: "VueJs",
    },
    {
      iconImage: js,
      iconAltproperty: "jsImage",
      iconName: "JS",
    },
    {
      iconImage: nodejs,
      iconAltproperty: "NodeJsImage",
      iconName: "NodeJs",
    },
    {
      iconImage: firebase,
      iconAltproperty: "firebaseImage",
      iconName: "Firebase",
    },
  ];

  const techstackData2 = [
    {
      iconImage: cpp,
      iconAltProperty: "cppImage",
      iconName: "CPP",
    },
    {
      iconImage: html,
      iconAltProperty: "htmlImage",
      iconName: "HTML",
    },
    {
      iconImage: css,
      iconAltProperty: "cssImage",
      iconName: "CSS",
    },
    {
      iconImage: python,
      iconAltProperty: "pythonImage",
      iconName: "Python",
    },
    {
      iconImage: bootstrap,
      iconAltProperty: "bootstrapImage",
      iconName: "Bootstrap",
    },
  ];

  function showIcon(value) {
    return (
      <div className="techstack_image_element_container">
           <img src={value.iconImage} alt={value.iconAltProperty} />
           <p>{value.iconName}</p>
      </div>
    )
  }
  return (

    <div className="techstack_container">
      <p className="techstack_title">Tech Stack</p>
      <div className="techstack_image_rows_container">

        {/* TWO METHODS:
         1. make a fun and return html from it 
        showIcon(value)
        2. create a component and pass props to make it work acc to our needs
        <TechStackIcon data={value} />
         */}

         
        {/* Using function */}
        <div className="techstack_image_row1_container">
          {techstackData.map((value, key) => (
             showIcon(value)
          ))}
        </div>


           {/* Using Functional Component */}
        <div className="techstack_image_row1_container">
          {techstackData2.map((value, key) => (
            //   showIcon(value)
            <TechStackIcon data={value} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
