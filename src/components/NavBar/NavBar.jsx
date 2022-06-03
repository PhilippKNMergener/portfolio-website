import React from "react";
import NavWrap from "./NavWrap";
import Logo from "./Logo";
import "./NavBar.scss";
import NavLink from "./NavLink";
import NavLinkWrap from "./NavLinkWrap";

const NavBar = () => {
  const sections = ["About", "Skills", "Projects", "Contact"];
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
