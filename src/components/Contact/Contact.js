import React from "react";
import "./Contact.css";

function Contact(){
    return(
       <div className="contact_container">
        <div>
          <h1>IMAGE</h1>
        </div>
        <div className="contact_form_container">
           <h1 className="contact_title">Contact Me</h1>
           <input className="contact_name" placeholder="Enter Your Name" />
           <input className="contact_email" placeholder="Enter Your Email" />
           <input className="contact_message" placeholder="Enter Your Message" />
           <button className="contact_submit">SUBMIT</button>
        </div>
       </div>
    )
}
export default Contact;
