import React from "react";
import { Link } from "react-router-dom";
import { research } from "../../util/util";

const Research = ({ setCurrentPage }) => {
  const goToResearchPage = () => {
    setCurrentPage("research");
  };

  return (
    <div className="box" id="research">
      <h2 className="ui top attached inverted header">Research</h2>
      <div className="ui padded text segment" id="content-box">
        {research.map((item, index) => (
          <Link to={`/research/${item.id}`} key={index}>
            <p onClick={() => goToResearchPage()}>
              <i>
                <li>{item.name}</li>
              </i>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Research;
