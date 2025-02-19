import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import axios from "axios";
import { people } from "../../util/util";

const People = () => {
  const [faculty, setFaculty] = useState([]);
  const [students, setStudents] = useState([]);

  // Fetch people data from backend
  useEffect(() => {
    const facultyMembers = people.filter(
      (person) => person.category.toLowerCase() === "faculty"
    );
    const studentMembers = people.filter(
      (person) => person.category.toLowerCase() === "student"
    );
    setFaculty(facultyMembers);
    setStudents(studentMembers);
  }, []);

  return (
    <div className="box" id="people">
      <h2 className="ui top attached inverted bold header">People</h2>
      <div className="ui padded text segment" id="content-box">
        {/* Faculty Section */}
        <div className="ui large bold header">Faculty</div>
        <hr />
        <br />
        <div className="faculty">
          <div className="ui link cards">
            {faculty.length > 0 ? (
              faculty.map((person) => <Card key={person.id} person={person} />)
            ) : (
              <p>No faculty members found.</p>
            )}
          </div>
        </div>
        <br />

        {/* Student Section */}
        <div className="ui large bold header">Research Students</div>
        <hr />
        <br />
        <div className="students">
          <div className="ui link cards">
            {students.length > 0 ? (
              students.map((person) => <Card key={person.id} person={person} />)
            ) : (
              <p>No students found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
