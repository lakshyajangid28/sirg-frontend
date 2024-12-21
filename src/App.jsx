import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ResearchPage from "./pages/ResearchPage/ResearchPage";
import PeoplePage from "./pages/PeoplePage/PeoplePage";
import Contact from "./components/Contact/Contact";

const App = () => {
  const [currentPage, setCurrentPage] = useState('');
  const [currentResearch, setCurrentResearch] = useState({});
  const [currentPeople, setCurrentPeople] = useState({});

  return (
    <div className="app">
      <div className="content-wrapper">
        <BrowserRouter>
          <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} /><br /><br /><br /><br />
          <Routes>
            <Route path="/" element={<Home setCurrentResearch={setCurrentResearch} setCurrentPeople={setCurrentPeople} setCurrentPage={setCurrentPage} />} />
            <Route path="/research" element={<ResearchPage currentResearch={currentResearch} setCurrentPage={setCurrentPage} />} />
            <Route path="/people" element={<PeoplePage currentPeople={currentPeople} setCurrentPage={setCurrentPage} />}/>
          </Routes>
        </BrowserRouter>
      </div>
      <br />
      <Contact />
    </div>
  );
};

export default App;
