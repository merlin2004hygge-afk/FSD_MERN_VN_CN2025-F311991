import React from "react";

const students = [
  { name: "Aishwarya", dept: "CSE", year: "3rd Year" },
  { name: "Rahul", dept: "ECE", year: "2nd Year" },
  { name: "Meera", dept: "IT", year: "4th Year" },
  { name: "Suresh", dept: "ME", year: "1st Year" },
];

export default function StudentCards() {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "15px" }}>Student List</h2>

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {students.map((stu, index) => (
          <div
            key={index}
            style={{
              width: "200px",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              background: "black",
            }}
          >
            <h3>{stu.name}</h3>
            <p>Department: {stu.dept}</p>
            <p>Year: {stu.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
