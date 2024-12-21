import React from "react";

const Project = () => {
  return (
    <div className="projects box" id="project">
      <h1 className="ui horizontal divider header">Projects</h1>
      <br />
      <h2>B. Tech.</h2>
      <div className="btech box ">
        <p>
          <li>Collaborative Deployment Strategy for Hybrid Computation in the IoT Environment</li>
        </p>
        <p>
          <li>Smart Waste Management Unit with Automated Waste Segregation</li>
        </p>
        <p>
          <li>StockEase: LNMIIT Stores Management Portal</li>
        </p>
        <p>
          <li>Art Style: Identification, Conversion and Plagiarism Detection</li>
        </p>
      </div>
      <br />
      <h2>LUSIP</h2>
      <div className="lusip box ">
        <p>
          <li>Academic Management Portal for PhD</li>
        </p>
        <p>
          <li>Employee Leave Management Portal</li>
        </p>
        <p>
          <li>Game-theoretic Approach to Drone-based Communication</li>
        </p>
      </div>
      <br />
      <h2>Others</h2>
      <div className="others box ">
        <p>
          <li>Avtaran: LNMIIT Birthday Felicitation Application</li>
        </p>
      </div>
    </div>
  );
};

export default Project;
