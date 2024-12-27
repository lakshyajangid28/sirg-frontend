import React from "react";

const Card = () => {
  return (
    <div className="card">
      <div className="image">
        <img src="src/assets/image.png" />
      </div>
      <div className="content">
        <div className="ui medium header">Elyse</div>
        <div className="meta">
          <p>Faculty</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
