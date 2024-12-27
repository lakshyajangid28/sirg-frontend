import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ currentPage, setCurrentPage }) => {
  const navigate = useNavigate();

  const goToHome = () => {
    setCurrentPage("home");
    navigate("/");
  };

  return (
    <div className="ui top demo horizontal inverted sidebar labeled icon menu visible">
      {currentPage == "home" ? (
        <>
          <a className="item" href="#about">
            About
          </a>
          <a className="item" href="#research">
            Research
          </a>
          <a className="item" href="#people">
            People
          </a>
          <a className="item" href="#project">
            Project
          </a>
          <a className="item" href="#achievements">
            Achievements
          </a>
          <a className="item" href="#publications">
            Publications
          </a>
          <a className="item" href="#positions">
            Positions
          </a>
          <a className="item" href="#teaching">
            Teaching
          </a>
          <a className="item" href="#contact">
            Contact
          </a>
        </>
      ) : (
        <>
          <a className="item" onClick={goToHome}>
            Go to home page
          </a>
        </>
      )}
    </div>
  );
};

export default Navbar;
