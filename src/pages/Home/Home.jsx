import React, {useEffect} from "react";
import About from "../../components/About/About";
import Research from "../../components/Research/Research";
import People from "../../components/People/People";
import Project from "../../components/Project/Project";
import Achievements from "../../components/Achievements/Achievements";
import Publications from "../../components/Publications/Publications";
import Positions from "../../components/Positions/Positions";
import Teaching from "../../components/Teaching/Teaching";

const Home = ({ setCurrentPage, setCurrentResearch, setCurrentPeople }) => {

  useEffect(() => {
    setCurrentPage('home');
  }, []);

  return (
    <div className="home">
      <About /><br /><br /><br />
      <Research setCurrentResearch={setCurrentResearch} setCurrentPage={setCurrentPage} /><br /><br /><br />
      <People setCurrentResearch={setCurrentPeople} setCurrentPage={setCurrentPage} /><br /><br /><br />
      <Project /><br /><br /><br />
      <Achievements /><br /><br /><br />
      <Publications /><br /><br /><br />
      <Positions /><br /><br /><br />
      <Teaching /><br /><br />
    </div>
  );
};

export default Home;
