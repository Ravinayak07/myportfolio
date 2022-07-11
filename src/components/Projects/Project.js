import React from "react";
import "./Project.css";
import ProjectBox from "./ProjectBox/ProjectBox";
import project1 from "../../images/projects/project1.png";

function Project() {

    const projectData = [
        {
            images: project1,
            title : "xyz",
            descriptions: ["> Ravi","> Ravi","> Ravi"],
            link: "https://github.com/Ravinayak07/Snake-Game"

        },
        {
            images: project1,
            title : "xyz",
            descriptions: ["Ravi","Ravi","Ravi"],
            link: "https://github.com/Ravinayak07/Snake-Game"

        },
        {
            images: project1,
            title : "xyz",
            descriptions: ["Ravi","Ravi","Ravi"],
            link: "https://github.com/Ravinayak07/Snake-Game"

        },
        {
            images: project1,
            title : "xyz",
            descriptions: ["Ravi","Ravi","Ravi"],
            link: "https://github.com/Ravinayak07/Snake-Game"

        },
    ]
    return (
        <div>
            <p className="project_title">PROJECTS</p>
            <div className="projects_project_box_container">
             {projectData.map((value,key)=>(
                <ProjectBox 
                   img = {value.images}
                   title = {value.title}
                   descriptions={value.descriptions}
                   link={value.link} />
             ))}
            </div>
        </div>
    )
}

export default Project;
