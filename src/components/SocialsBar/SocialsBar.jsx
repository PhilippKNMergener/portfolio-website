import React from "react";
import SocialsLink from "./SocialsLink.jsx";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

const SocialsBar = () => {
  return (
    <div className="SocialsBar">
      <hr className="BorderLine" />
      <div className="Icons">
        <SocialsLink
          icon={<FiTwitter />}
          linkTo="https://www.twitter.com/philipp_knm"
        />
        <SocialsLink
          icon={<FiGithub />}
          linkTo="https://www.github.com/PhilippKNMergener/"
        />
        <SocialsLink
          icon={<FiLinkedin />}
          linkTo="https://www.linkedin.com/in/philipp-mergener-9950271a1/"
        />
      </div>
      <hr className="BorderLine" />
    </div>
  );
};

export default SocialsBar;
