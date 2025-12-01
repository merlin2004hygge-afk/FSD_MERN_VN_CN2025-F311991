import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Q17() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [message, setMessage] = useState("");

  // Fetch user on mount
  useEffect(() => {
    axios.get("https://dummyjson.com/users/1")
      .then((res) => {
        setUser({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          email: res.data.email,
        });
      })
      .catch(() => setMessage("Error loading user"));
  }, []);

  // Handle update
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        "https://dummyjson.com/users/1",
        user,
        { headers: { "Content-Type": "application/json" } }
      );

      setMessage("Updated Successfully!");
    } catch (err) {
      setMessage("Update Failed!");
    }
  };

  return (
    <div style={styles.box}>
      <h2>Edit User</h2>

      <form onSubmit={handleUpdate} style={styles.form}>
        <input
          style={styles.input}
          type="text"
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />

        <input
          style={styles.input}
          type="text"
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />

        <input
          style={styles.input}
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <button style={styles.btn} type="submit">Update</button>
      </form>

      {message && <p style={styles.msg}>{message}</p>}
    </div>
  );
}

const styles = {
  box: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "8px",
    background: "#fff",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  btn: {
    padding: "10px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  msg: {
    marginTop: "10px",
    textAlign: "center",
    fontWeight: "bold",
  },
};