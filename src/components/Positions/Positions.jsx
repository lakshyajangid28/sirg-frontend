import React from "react";

const Positions = () => {
  return (
    <div className="box" id="positions">
      <h2 className="ui top attached inverted header">Positions</h2>
      <table className="ui table" id="content-box">
        <thead>
          <tr>
            <th>Vacancy Name</th>
            <th>Title</th>
            <th>Contact Person</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="name">James</td>
            <td data-label="title">Student</td>
            <td data-label="contact">Engineer</td>
          </tr>
          <tr>
            <td data-label="name">Jill</td>
            <td data-label="title">Student</td>
            <td data-label="contact">Engineer</td>
          </tr>
          <tr>
            <td data-label="name">Elyse</td>
            <td data-label="title">Developer</td> 
            <td data-label="contact">Designer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Positions;
