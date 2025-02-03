import React from "react";
import FlipCard from "../FlipCard/FlipCard";

const Achievements = () => {
  return (
    <div className="box" id="achievements">
      <h2 className="ui top attached inverted header">Achievements</h2>
      <div className="ui padded text segment" id="content-box">
        <br />
        <div className="ui cards flip-cards">
          <FlipCard />
          <FlipCard />
          <FlipCard />
          <FlipCard />
          <FlipCard />
          <FlipCard />
          <FlipCard />
          <FlipCard />
        </div>
        <br />
      </div>
    </div>
  );
};

export default Achievements;
