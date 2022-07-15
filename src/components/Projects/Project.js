import React from "react";
import "./Project.css";
import ProjectBox from "./ProjectBox/ProjectBox";
import portfolio from "../../images/projects/portfolio.png";
import moviesBox from "../../images/projects/moviesBox.png";
import ravikart from "../../images/projects/ravikart.png";

function Project() {
  const projectData = [
    {
      images: moviesBox,
      title: "MoviesBox",
      descriptions: [
        "> Movie Application in which you can search for your favourite movies",
        "> Shows Top Rated, Comedy, Actions Movies Separatly",
        "Technologies - Reactjs, JavaScript, HTML, CSS, Firebase.",
      ],
      link: "https://github.com/Ravinayak07/moviesbox",
    },
    {
      images: ravikart,
      title: "RaviKart",
      descriptions: [
        "> This an ecommerce Web Application where user can shop any items.",
        "> It's database is managed on Firestore and is hosted on Firebase.",
        "> Technologies - Reactjs, JavaScript, HTML, CSS, Firebase.",
      ],
      link: "https://github.com/Ravinayak07/E-commerce_Project_CipherSchools",
    },
    {
      images: portfolio,
      title: "My Portfolio",
      descriptions: [
        "It is a website which answers to the question who am I?",
        "Have a look at it, and please feel free to contact anytime.",
        "Technologies - Reactjs, JavaScript, HTML, CSS, Firebase.",
      ],
      link: "https://rsn-portfolio.web.app/",
    },
  ];
  return (
    <div>
      <p className="project_title">PROJECTS</p>
      <div className="projects_project_box_container">
        {projectData.map((value, key) => (
          <ProjectBox
            img={value.images}
            title={value.title}
            descriptions={value.descriptions}
            link={value.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
