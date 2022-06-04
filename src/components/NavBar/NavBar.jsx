import React from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import PropTypes from "prop-types";
import Email from "./Email";

const NavBar = ({ isAtTop }) => {
  const sections = ["About", "Skills", "Projects", "Contact"];
  return (
    <div className={`NavBar ${isAtTop && "atTop"}`}>
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

NavBar.propTypes = {
  isAtTop: PropTypes.bool,
};
export default NavBar;
