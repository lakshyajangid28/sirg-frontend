import React from "react";
import { useNavigate } from "react-router-dom";

const Research = ({ setCurrentPage, setCurrentResearch }) => {
  const navigate = useNavigate();
  const goToResearchPage = () => {
    setCurrentPage("research");
    navigate("/research");
  };

  const array = [
    "Collaborative Data Processing",
    "Internet of Things",
    "Multiagent Systems",
    "Intelligent Transportation System",
    "Unmanned Vehicular Communication",
    "Cyber-physical System",
    "Artificial Intelligence",
    "Human-centric  Autonomous Intelligent Systems",
    "Software System Engineering",
    "Cooperative Communication Protocols",
  ];

  return (
    <div className="box" id="research">
      <h2 className="ui top attached inverted header">Research</h2>
      <div className="ui padded text segment" id="content-box">
        {array.map((item, index) => (
          <p onClick={() => goToResearchPage()} key={index}>
            <i>
              <li>{item}</li>
            </i>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Research;
