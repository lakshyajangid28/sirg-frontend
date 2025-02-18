import React from "react";
import { project } from "../../util/util";

const Project = () => {
  return (
    <div className="box" id="project">
      <h2 className="ui top attached inverted header">Project</h2>
      <div className="ui padded text segment" id="content-box">
        {project.map((ele, index) => {
          return (
            <div key={ele.id}>
              <div className="ui medium header">{ele.project_type}</div>
              <hr />
              {ele.project_details.map((ele, index) => {
                return (
                  <p key={index}>
                    <li>{ele}</li>
                  </p>
                );
              })}
              {index == project.length - 1 ? <></> : <br />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
