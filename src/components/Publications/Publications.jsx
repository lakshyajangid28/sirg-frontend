import React from "react";
import { publications } from "../../util/util";

const Publications = () => {
  return (
    <div className="box" id="publications">
      <h1 className="ui top attached inverted bold header">Publications</h1>
      <div className="ui padded text segment" id="content-box">
        {publications.map((ele, index) => {
          return (
            <div key={index}>
              <div className="ui large bold header">{ele.type}</div>
              <hr />
              {ele.body.map((item, index) => {
                return (
                  <p key={index}>
                    <li>{item}</li>
                  </p>
                );
              })}
              {index == publications.length - 1 ? null : <br />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Publications;
