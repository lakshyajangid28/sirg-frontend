import React from "react";
import { about } from "../../util/util";

const About = () => {
  return (
    <div className="box" id="about">
      <h2 className="ui top attached inverted header">About</h2>
      <div className="ui padded text segment" id="content-box">
        <p>
          {about}
        </p>
      </div>
    </div>
  );
};

export default About;
