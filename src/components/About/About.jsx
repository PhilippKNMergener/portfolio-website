import React from "react";
import AboutText from "./AboutText";
import AboutTitle from "./AboutTitle";

const About = () => {
  return (
    <div className="About" id="About">
      <div className="Left">
        <AboutTitle />
        <AboutText />
      </div>
      <div className="Right">Right About</div>
    </div>
  );
};

export default About;
