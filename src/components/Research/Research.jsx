import React from "react";
import { useNavigate } from "react-router-dom";

const Research = ({ setCurrentPage }) => {
  const navigate = useNavigate();
  const goToResearchPage = () => {
    setCurrentPage('research');
    navigate('/research');
  }

  const array = ['Collaborative Data Processing', 'Internet of Things', 'MultiAgent-Systems', 'Intelligent Transportation Systems', 'Unmanned Vehicular Communication', 'Cyber-physical System', 'Artifical Intelligence', 'Human-centric  Autonomous Intelligent Systems', 'Software System Engineering'];

  return (
    <div className="research-verticals box" id="research">
      <h1 className="ui horizontal divider header">Research</h1>
      <br />
      {array.map((item) => <p onClick={() => goToResearchPage()}><li>{item}</li></p>)}
    </div>
  );
};

export default Research;
