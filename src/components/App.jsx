import React from "react";
import "./App.scss";
import About from "./About/About";
import MainWrap from "./MainWrap";
import NavBar from "./NavBar/NavBar";
import Landing from "./Landing/Landing";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <MainWrap>
        <Landing />
        <About />
      </MainWrap>
    </div>
  );
};

export default App;
