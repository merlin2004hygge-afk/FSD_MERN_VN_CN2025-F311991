// UserListWithPagination.jsx
import React, { useEffect, useState } from "react";

export default function UserListWithPagination() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=20")
      .then((res) => res.json())
      .then((data) => {
        if (data.users) {
          setUsers(data.users);
        } else {
          console.error("Unexpected response shape:", data);
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      });
  }, []);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const startIndex = (currentPage - 1) * usersPerPage;
  const visibleUsers = users.slice(startIndex, startIndex + usersPerPage);

  return (
    <div style={{
      maxWidth: "600px",
      margin: "40px auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      border: "1px solid #ddd",
      borderRadius: "8px"
    }}>
      <h2 style={{ textAlign: "center" }}>Users List</h2>

      {visibleUsers.length === 0 ? (
        <p>Loading or no users found...</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {visibleUsers.map((u) => (
            <li key={u.id} style={{
              padding: "10px",
              borderBottom: "1px solid #eee"
            }}>
              <p style={{ margin: "4px 0" }}>
                <strong>{u.firstName} {u.lastName}</strong>
              </p>
              <p style={{ margin: "2px 0", fontSize: "14px" }}>Email: {u.email}</p>
            </li>
          ))}
        </ul>
      )}

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "20px"
      }}>
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          style={{
            padding: "8px 12px",
            border: "1px solid #007bff",
            background: currentPage === 1 ? "#ddd" : "#007bff",
            color: currentPage === 1 ? "#666" : "#fff",
            borderRadius: "4px",
            cursor: currentPage === 1 ? "not-allowed" : "pointer"
          }}
        >
          Prev
        </button>

        <span>Page {currentPage} of {totalPages}</span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          style={{
            padding: "8px 12px",
            border: "1px solid #007bff",
            background: currentPage === totalPages ? "#ddd" : "#007bff",
            color: currentPage === totalPages ? "#666" : "#fff",
            borderRadius: "4px",
            cursor: currentPage === totalPages ? "not-allowed" : "pointer"
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}