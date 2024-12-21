import React from "react";
import FlipCard from "../FlipCard/FlipCard";

const Achievements = () => {
  return (
    <div className="achievements box" id="achievements">
      <h1 className="ui horizontal divider header">Achievements</h1>
      <br /><br />
      <div className="ui cards flip-cards">
        <FlipCard /><FlipCard /><FlipCard /><FlipCard /><FlipCard /><FlipCard /><FlipCard /><FlipCard />
      </div>
      <br />
    </div>
  );
};

export default Achievements;
