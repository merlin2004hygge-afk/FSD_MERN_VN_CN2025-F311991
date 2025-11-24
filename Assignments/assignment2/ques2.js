let marks = 78;
let age = 17;

// Determine grade
let grade;
if (marks >= 90) grade = "A";
else if (marks >= 75) grade = "B";
else if (marks >= 50) grade = "C";
else grade = "F";

console.log("Marks:", marks, "Grade:", grade);

// Adult or Minor
let status = (age >= 18) ? "Adult" : "Minor";
console.log("Age:", age, "Status:", status);
