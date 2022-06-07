import React from "react";
import PropTypes from "prop-types";

const AboutText = ({ text }) => {
  return <div className="AboutText">{text}</div>;
};

AboutText.propTypes = {
  text: PropTypes.string,
};
export default AboutText;
