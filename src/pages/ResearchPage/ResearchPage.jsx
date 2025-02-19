import React from "react";
import { useParams } from "react-router-dom";
import { research } from "../../util/util";

const ResearchPage = () => {
  const { id } = useParams();
  const currentResearch = research.find((item) => item.id === parseInt(id));

  return (
    <div className="research-page">
      <div className="box">
        <h2 className="ui center aligned dividing bold header">
          {currentResearch.name}
        </h2>
      </div>
      <br />
      <br />
      <div className="box" id="about">
        <h2 className="ui top attached inverted bold header">Overview</h2>
        <div className="ui padded text segment" id="content-box">
          <p>{currentResearch.overview}</p>
        </div>
        <br />
        <h2 className="ui top attached inverted bold header">Key Objectives</h2>
        <div className="ui padded text segment" id="content-box">
          {currentResearch.key_objectives.map((item) => {
            return (
              <p>
                <li key={currentResearch.id}>{item}</li>
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;
