import React from "react"; //not mandatory but a good practice. It tells the Navbar.js file that it is a react file
import "./Navbar.css";
//creating a functional component
function Navbar(){
    
    //js code

    var name = "<RSN  />";

    return(
        <div>
        <div className="navbar_container">
            <div className="navbar_left">
              {name}
            </div>
    
            <div className="navbar_right">
              <p>About</p>
              <p>Tools</p>
              <p>Experience</p>
              <p>Projects</p>
              <p>Results</p>
            </div>
        </div>
        <div className="navbar_line">
           <hr />
        </div>

    </div>
    )
}

export default Navbar; //exporting so that we can import it from App.js

/*
Now will this code run? : No becoz we haven't called the functional component.
Now syntax to call it:  <Navbar />

So we need to first import this component(Navabr) inside App.js and then call it there

*/