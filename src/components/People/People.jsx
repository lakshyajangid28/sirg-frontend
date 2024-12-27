import React from "react";
import Card from "../Card/Card";

const People = () => {
  return (
    <div className="box" id="people">
      <h2 className="ui top attached inverted header">People</h2>
      <div className="ui padded text segment">
        <div className="ui medium header">Faculty</div>
        <hr />
        <br />
        <div className="faculty">
          <div className="ui link cards">
            <Card />
          </div>
        </div>
        <br />
        <div className="ui medium header">Research</div>
        <hr />
        <br />
        <div className="students">
          <div className="ui link cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
