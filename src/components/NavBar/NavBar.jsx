import React, { useState } from "react";
import NavWrap from "./NavWrap";
import Logo from "./Logo";
import "./NavBar.scss";
import NavLink from "./NavLink";
import NavLinkWrap from "./NavLinkWrap";

const NavBar = () => {
  const sections = ["About", "Skills", "Projects", "Contact"];
  const [atTop, setAtTop] = useState();
  const checkAtTop = new IntersectionObserver(setAtTop(true));
  return (
    <div className="NavBar">
      <NavWrap>
        <Logo />
        <NavLinkWrap>
          {sections.map((section) => {
            return <NavLink key={section} target={section} />;
          })}
        </NavLinkWrap>
      </NavWrap>
    </div>
  );
};

export default NavBar;
