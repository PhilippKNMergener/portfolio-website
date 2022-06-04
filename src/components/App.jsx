import React from "react";
import "./App.scss";
import About from "./About/About";
import NavBar from "./NavBar/NavBar";
import Landing from "./Landing/Landing";
import SocialsBar from "./SocialsBar/SocialsBar";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <SocialsBar />
      <Landing />
      <About />
    </div>
  );
};

export default App;
