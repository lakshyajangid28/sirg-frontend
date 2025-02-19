import React, { useState } from "react";
import { teaching } from "../../util/util";

const Teaching = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="box" id="teaching">
      <h2 className="ui top attached inverted bold header">Teaching</h2>
      <div className="ui padded text segment" id="content-box">
        {teaching.map((ele, index) => (
          <div className="ui styled fluid accordion" key={ele.id}>
            <div
              className={`title ui medium bold header ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              <i className="dropdown icon"></i>
              {ele.subject}
            </div>
            <div className={`content ${activeIndex === index ? "active" : ""}`}>
              <ul>
                <li>{ele.type}</li>
                <li>{ele.semester} Semester</li>
                <li>{ele.time}</li>
                <li>Instructor: {ele.course_instructor}</li>
                <li>Credits: {ele.credits}</li>
                <li>Course Code: {ele.course_code}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teaching;
