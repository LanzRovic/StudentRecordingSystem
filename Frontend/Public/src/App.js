import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css"; // Import CSS file

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (name, course) => {

    const newStudent = { id: students.length + 1, name, course };
    setStudents([...students, newStudent]);

    console.log("Student added:", newStudent);
  };

  return (
    <div className="container">
      <h1>Student Recording System</h1>

      {/* Display the image */}
      <div className="image-container">
        <img src="/Costanilla.jpg" alt="Student" className="Costanilla-image" /> 
      </div>

      <StudentForm addStudent={addStudent} />
      <StudentList students={students} />
      </div>
  );
};

export default App;