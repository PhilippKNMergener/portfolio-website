import React from "react";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

const SocialsBar = () => {
  return (
    <div className="SocialsBar">
      <hr className="BorderLine" />
      <div className="Icons">
        <a href="" className="Icon">
          <FiTwitter />
        </a>
        <a href="" className="Icon">
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
