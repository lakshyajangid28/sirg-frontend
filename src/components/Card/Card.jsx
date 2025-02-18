import React from "react";

const Card = ({ people }) => {
  console.log(people.image);
  
  return (
    <div className="ui card">
      <div className="image">
        <img src={people.image} />
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
