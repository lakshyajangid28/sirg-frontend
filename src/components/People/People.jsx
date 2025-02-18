import React from "react";
import Card from "../Card/Card";
import { people } from "../../util/util";

const People = () => {
  console.log(people[0]);
  return (
    <div className="box" id="people">
      <h2 className="ui top attached inverted header">People</h2>
      <div className="ui padded text segment" id="content-box">
        <div className="ui large header">Faculty</div>
        <hr />
        <br />
        <div className="faculty">
          <div className="ui link cards">
            <Card people={people[0]}/>
          </div>
        </div>
        <br />
        <div className="ui large header">Research</div>
        <hr />
        <br />
        <div className="students">
          <div className="ui link cards">
          <Card people={people[0]}/><Card people={people[0]}/><Card people={people[0]}/><Card people={people[0]}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
