import React from "react";
import PropTypes from "prop-types";

const AboutTitle = ({ text }) => {
  return <div className="AboutTitle">{text}</div>;
};

AboutTitle.propTypes = {
  text: PropTypes.string,
};
export default AboutTitle;
