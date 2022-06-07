import React from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import Email from "./Email";

const NavBar = () => {
  const sections = ["About", "Skills", "Projects", "Contact"];
  return (
    <div className="NavBar">
      <div className="NavWrap">
        <div className="NavLeft">
          <Logo />
          <Email />
        </div>
        <div className="NavLinkWrap">
          {sections.map((section) => {
            return <NavLink key={section} target={section} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
