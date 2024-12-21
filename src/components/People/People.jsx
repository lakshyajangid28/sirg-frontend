import React from "react";
import Card from "../Card/Card";

const People = () => {
  return (
    <div className="people box" id="people">
      <h1 className="ui horizontal divider header">People</h1>
      <br />
      <h2>Faculty</h2>
      <br />
      <div className="faculty">
        <div className="ui link cards">
          <Card /><Card /><Card />
        </div>
      </div>
      <br />
      <h2 className="people-heading">Students</h2>
      <br />
      <div className="students">
        <div className="ui link cards">
          <Card /><Card /><Card />
        </div>
      </div>
    </div>
  );
};

export default People;
