import React from "react";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

const SocialsBar = () => {
  return (
    <div className="SocialsBar">
      <hr className="BorderLine" />
      <div className="Icons">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://twitter.com/philipp_knm"
          className="Icon"
        >
          <FiTwitter />
        </a>
        <a href="https://github.com/PhilippKNMergener" className="Icon">
          <FiGithub />
        </a>
        <a href="" className="Icon">
          <FiLinkedin />
        </a>
      </div>
      <hr className="BorderLine" />
    </div>
  );
};

export default SocialsBar;
