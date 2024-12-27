import React, { useEffect, useState } from "react";

const Teaching = () => {
  const [teaching, setTeaching] = useState([]);

  useEffect(() => {
    setTeaching([
      "Multiagent Systems",
      "Cellular Communication and Networking",
      "IoT Application and Communication Protocol",
    ]);
  }, []);

  return (
    <div className="box" id="teaching">
      <h2 className="ui top attached inverted header">Teaching</h2>
      <div className="ui padded text segment">
        {teaching.map((item, index) => (
          <div key={index}>
            <div className="ui medium header">{item}</div>
            <hr />
            <p>
              <li>Type</li>
            </p>
            <p>
              <li>Semester</li>
            </p>
            <p>
              <li>Time</li>
            </p>
            <p>
              <li>Course Instructor</li>
            </p>
            <p>
              <li>Credits</li>
            </p>
            <p>
              <li>Course Code</li>
            </p>
            {index == teaching.length-1 ? <></> : <br />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teaching;
