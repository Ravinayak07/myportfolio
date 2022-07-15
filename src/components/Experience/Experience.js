import React from "react";
import "./Experience.css";
import ExperienceBox from "./ExperienceBox/ExperienceBox";
import react from "../../images/techStack/react.png"
import vuejs from "../../images/techStack/vuejs.png";
import js from "../../images/techStack/js.png";
import nodejs from "../../images/techStack/nodejs.png";
import firebase from "../../images/techStack/firebase.png";
import html from "../../images/techStack/html.png";
import css from "../../images/techStack/css.png";
import python from "../../images/techStack/python.png";
import cpp from "../../images/techStack/cpp.png";
import bootstrap from "../../images/techStack/bootstrap.png";

function Experience() {

    const experienceData = [
        {
            title: "AppyFlux technologies Pvt. Ltd",
            sentences: [
                "Built the landing page websites of Appyflux and its product Zyadashop.",
                "Built the Account Section of Web Version of ZyadaSshop Using VueJs.",
                "Contributed as techincal support member by publishing customers applications in the Google Play Store and also by managing the daily notifications",
                "Cleared queries and problems of the customers"
                

            ],
            subtitles: "Tech used",
            images: [react, js, html]
        },
        // {
        //     title: "Summer Training In DSA by GFGs",
        //     sentences: [
        //         "Ravi Shankar Nayak Ravi Shankar Nayak Ravi Shankar Nayak Ravi Shankar Nayak",
        //         "Ravi Shankar Nayak",
        //         "Ravi Shankar Nayak",

        //     ],
        //     subtitles: "Tech used",
        //     images: [react, js, html]
        // },



    ]
    return(
        <div className="ex_container">
            <p className="ex_title">Experience</p>
            <div className="ex_experiencebox_container">

                {/* this map fun calls the ExperienceBox depending on the number of objects in the experienceData
                If experience Data has 3 objects map fun will pass the values of 3 objects one by one  */}
                {experienceData.map((value,key)=>(
                   <ExperienceBox 
                   title={value.title}
                   sentences={value.sentences}
                   subtitles={value.subtitles}
                   images={value.images}
                    />
                ))}
                
            </div>
        </div>
    )
}

export default Experience;