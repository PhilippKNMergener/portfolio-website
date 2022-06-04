import React, { useEffect, useRef } from "react";
import { init } from "ityped";

const Roles = () => {
  const itypedText = useRef();

  useEffect(() => {
    init(itypedText.current, {
      showCursor: true,
      typeSpeed: 100,
      backDelay: 1700,
      backSpeed: 40,
      strings: [
        "Front-End Developer",
        "iOS Developer",
        "Software Engineer",
        "Coffee Lover",
      ],
    });
  }, []);

  return (
    <div className="Roles">
      <span className="Bracket">{"{"}</span>
      <div ref={itypedText}></div>
      <span className="Bracket">{" }"}</span>
    </div>
  );
};

export default Roles;
