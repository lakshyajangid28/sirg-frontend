import React from "react";
import './FlipCard.css';

const FlipCard = () => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        {/* Front side of the card */}
        <div className="flip-card-front">
          <img
            src="https://via.placeholder.com/300"
            alt="Front"
            className="ui image"
          />
        </div>

        {/* Back side of the card */}
        <div className="flip-card-back">
          <h3>Card Title</h3>
          <p>This is the content revealed when the card flips.</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
