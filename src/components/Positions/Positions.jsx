import React from "react";

const Positions = () => {
  return (
    <div className="open-positions box" id="positions">
      <h1 className="ui horizontal divider header">Open Positions</h1>
      <br />
      <table className="ui celled table">
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
            <td data-label="title">24</td>
            <td data-label="contact">Engineer</td>
          </tr>
          <tr>
            <td data-label="name">Jill</td>
            <td data-label="title">26</td>
            <td data-label="contact">Engineer</td>
          </tr>
          <tr>
            <td data-label="name">Elyse</td>
            <td data-label="title">24</td>
            <td data-label="contact">Designer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Positions;
