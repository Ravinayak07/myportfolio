import React from "react";
import "./ExperienceBox.css";

function ExperienceBox({title, sentences, subtitles, images}) {

    // title-String
    // sentences-array of Strings
    // subtitle - String
    // images - array of images
    return(
        <div className="ex_box_container">
            <p className="ex_box_title">{title}</p>
            <div className="ex_box_sentences">
                {sentences.map((value, key)=>(
                    <p>{value}</p>
                ))}
            </div>
            <p className="ex_box_subtitles">{subtitles}</p>
            <div className="ex_box_images">
                {images.map((value, key)=>(
                   <img src={value} />
                ))}
            </div>
        </div>
    )
}

export default ExperienceBox;