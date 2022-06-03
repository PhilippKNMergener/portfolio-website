import React from "react";
import PropTypes from "prop-types";

const NavLinkWrap = ({ children }) => {
  return <div className="NavLinkWrap">{children}</div>;
};

NavLinkWrap.propTypes = {
  children: PropTypes.children,
};

export default NavLinkWrap;
