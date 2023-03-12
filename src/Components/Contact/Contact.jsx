import React from "react";

function Contact() {
  const heading = "Customer Service";
  const obj ='>'
  return (
    <div>
      <div className="">
        <img src="logo.png" />
        <div>{heading}</div>
      </div>
      <div>
        <div>Home{obj}</div> <div>{heading}</div>
      </div>
    </div>
  );
}

export default Contact;
