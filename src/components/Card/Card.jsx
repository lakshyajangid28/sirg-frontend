import React from "react";

const Card = () => {
  return (
    <div className="ui card">
      <div className="image">
        <img src="src/assets/image.png" />
      </div>
      <div className="content">
        <div className="ui medium header">Name</div>
        <div className="meta">
          Designation
          <br />
          Department
        </div>
      </div>
    </div>
  );
};

export default Card;
