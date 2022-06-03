import React from "react";
import PropTypes from "prop-types";

const NavLinkWrap = ({ children }) => {
  return <div className="NavLinkWrap">{children}</div>;
};

NavLinkWrap.propTypes = {
  children: PropTypes.array,
};

export default NavLinkWrap;
