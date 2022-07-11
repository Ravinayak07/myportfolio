import React from "react";
import "./ProjectBox.css";

function ProjectBox({img, title, descriptions, link}) {
    return(
      <div className="project_box_container">
        <div className="project_box_image_container">
           <img  src={img} />
        </div>
        <div className="project_box_details">
          <p className="project_box_title">{title}</p>
           <div className="project_box_descriptions">
                {descriptions.map((value, key)=>(
                    <p>{value}</p>
                ))}
           </div>
          <p className="project_box_link"><span>Link </span>- <a href={link} target="_blank">{link}</a></p>
        </div>
        
      </div>
    )
}

export default ProjectBox;