import React from "react";
import PropTypes from "prop-types";

const MainWrap = ({ children }) => {
  return <div className="MainWrap">{children}</div>;
};

MainWrap.propTypes = {
  children: PropTypes.array,
};

export default MainWrap;
