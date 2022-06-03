import React from "react";
import PropTypes from "prop-types";

const NavLink = ({ target }) => {
  return (
    <a href={`#${target}`} className="NavLink">
      {`. ${target}`}
    </a>
  );
};

NavLink.propTypes = {
  target: PropTypes.string,
};

export default NavLink;
