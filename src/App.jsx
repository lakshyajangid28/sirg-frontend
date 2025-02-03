import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ResearchPage from "./pages/ResearchPage/ResearchPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState('');
  const [currentResearch, setCurrentResearch] = useState({});
  return (
    <div className="app">
        <BrowserRouter>
          <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} /><br /><br /><br />
          <h1 className="ui huge center aligned header">
            Symbiotic Intelligence Research Group (SIRG)
          </h1>
          <br /><br />
          <Routes>
            <Route path="/" element={<Home setCurrentResearch={setCurrentResearch} setCurrentPage={setCurrentPage} />} />
            <Route path="/research" element={<ResearchPage currentResearch={currentResearch} setCurrentPage={setCurrentPage} />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
