import React from "react";

const ResearchPage = () => {
  return (
    <div className="research-page">
      <div className="box">
        <h2 class="ui center aligned dividing header">Software System Engineering</h2>
      </div>
      <br />
      <br />
      <div className="box" id="about">
        <h2 className="ui top attached inverted header">Overview</h2>
        <div className="ui padded text segment"></div>
        <br />
        <h2 className="ui top attached inverted header">Key Objectives</h2>
        <div className="ui padded text segment"></div>
        <h2 className="ui top attached inverted header">Publications</h2>
        <div className="ui padded text segment"></div>
        <h2 className="ui top attached inverted header">People</h2>
        <div className="ui padded text segment">
          <div className="ui medium header">Faculty</div>
          <hr />
          <br />
          <div className="ui medium header">Current Students</div>
          <hr />
          <br />
          <div className="ui medium header">Past Students</div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;
