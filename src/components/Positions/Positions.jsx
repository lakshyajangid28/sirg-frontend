import React from "react";
import { openPositions } from "../../util/util";

const Positions = () => {
  return (
    <div className="box" id="positions">
      <h2 className="ui top attached inverted bold header">Positions</h2>
      <table className="ui table" id="content-box">
        <thead>
          <tr>
            <th>Vacancy Name</th>
            <th>Title</th>
            <th>Contact Person</th>
          </tr>
        </thead>
        <tbody>
          {openPositions.map((ele) => {
            return (
              <tr key={ele.id}>
                <td data-label="name">{ele.vacancy_name}</td>
                <td data-label="title">{ele.title}</td>
                <td data-label="contact">{ele.contact_person}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Positions;
