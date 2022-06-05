import React from "react";
import PropTypes from "prop-types";

const SocialsLink = ({ icon, linkTo }) => {
  return (
    <a rel="noreferrer" target="_blank" href={linkTo} className="Icon">
      {icon}
    </a>
  );
};

SocialsLink.propTypes = {
  icon: PropTypes.element,
  linkTo: PropTypes.string,
};

export default SocialsLink;
