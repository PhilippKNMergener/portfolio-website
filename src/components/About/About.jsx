import React from "react";
import AboutText from "./AboutText";
import AboutTitle from "./AboutTitle";

const About = () => {
  return (
    <div className="About" id="About">
      <div className="Left">
        <div className="Professional Section">
          <AboutTitle text="Philipp the Programmer" />
          <AboutText text="I have loved computers for as long as I can remember. From writing my first lines of JavaScript at 12 to building my first PC at 14, I was always fascinated of what was possible with just 1s and 0s and a little determination. I dipped my toes in many sides of the digital world, from iOS app development, to python scripting, and even networking and cybersecurity. I am now studying Computer Science at NYU Shanghai, and learning web development in my spare time. I am excited for the journey of multidirectional learning that lies ahead in my software engineering jouney." />
        </div>
        <div className="Personal Section">
          <AboutTitle text="Philipp AFK (Away From Keyboard)" />
          <AboutText text="Outside of the programming world, I am a proffesional ballet dancer who loves philosophy and sunset walks while listening to mac miller. Ballet has been a part of my life since I was 4 years old and I have been dancing ever since. Philosophy has taught me to look at things for what they truly are instead of how I interpret them. And as for sunsets, well, those are just really beautiful." />
        </div>
      </div>
      <div className="Right">Right About</div>
    </div>
  );
};

export default About;
