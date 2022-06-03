import React from "react";
import Greeting from "./Greeting";
import "./Landing.scss";
import Name from "./Name";
import Roles from "./Roles";
import ScrollDown from "./ScrollDown";

const Landing = () => {
  return (
    <div className="Landing" id="Landing">
      <div className="Left">
        <div className="Title">
          <Greeting />
          <Name />
          <Roles />
        </div>
      </div>
      <ScrollDown />
    </div>
  );
};

export default Landing;