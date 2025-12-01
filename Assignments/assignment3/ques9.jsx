import React, { useState, useMemo } from 'react';

/**
 * A functional React component that implements a search bar
 * to filter a list of student names as the user types.
 */
function StudentFilterSearchBar() {
  // 1. Initial Data: The full list of students.
  const studentNames = [
    'Alice Smith',
    'Bob Johnson',
    'Charlie Brown',
    'David Lee',
    'Emily Davis',
    'Frank Miller',
    'Grace Wilson',
    'Henry Thomas',
    'Ivy Martin',
    'Jack White',
  ];

  // 2. State: Holds the current value of the search input field.
  const [searchTerm, setSearchTerm] = useState('');

  // 3. Filtering Logic (Optimized with useMemo)
  // useMemo recalculates the filtered list ONLY when 'searchTerm' changes.
  const filteredStudents = useMemo(() => {
    // If the search term is empty, return the full list.
    if (!searchTerm) {
      return studentNames;
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return studentNames.filter(student =>
      // Check if the student name (converted to lowercase) includes the search term.
      student.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm, studentNames]); // Dependencies for useMemo

  // 4. Event Handler
  const handleSearchChange = (event) => {
    // Update the state with the new value from the input field.
    setSearchTerm(event.target.value);
  };

  // 5. Render Output
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>🔍 Student Search Filter</h2>
      
      {/* Search Input Field */}
      <input
        type="text"
        placeholder="Start typing a student name..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '300px',
          marginBottom: '20px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
      
      {/* Display Filtered Results */}
      <h3>
        Results ({filteredStudents.length} of {studentNames.length})
      </h3>
      
      {filteredStudents.length > 0 ? (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {filteredStudents.map((student, index) => (
            <li 
              key={index} 
              style={{
                padding: '8px 0',
                borderBottom: '1px solid #eee',
                fontSize: '18px'
              }}
            >
              {student}
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ color: 'red' }}>No students match your search.</p>
      )}
    </div>
  );
}

export default StudentFilterSearchBar;