import React from "react";
import PropTypes from "prop-types";

const NavWrap = ({ children }) => {
  return <div className="NavWrap">{children}</div>;
};

NavWrap.propTypes = {
  children: PropTypes.children,
};

export default NavWrap;
