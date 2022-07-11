import React from "react";

function TechStackIcon(props) {
    // props means properties. It receives the values as objects
    // for example in TechStack.js, this is passed:
    // <TechStackIcon abc="hi" text="hello" />
    // then Here, props receives it as objects like:
    // const props {
    //     abc: "hi",
    //     text: "hello"
    // }
    // Now it is displayed as:
    // <p>{props.text}</p>

    // So we have passed like this:
    // <TechStackIcon data={value} />
    // props will receive it as:
    // const props{
    //     data: {
    //         iconImage: cpp,
    //         iconAltProperty: "cppImage",
    //         iconName: "CPP",
    //       },
    // }
    console.log(props); 
    return (
        <div className="techstack_image_element_container">
           <img src={props.data.iconImage} alt={props.data.iconAltProperty} />
           <p>{props.data.iconName}</p>
      </div>
    )
}

export default TechStackIcon