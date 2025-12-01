import React from "react";

export default function About() {
  return (
    <div style={styles.container}>
      <h1>About Us</h1>
      <p>Learn more about this laptop-style React application.</p>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "black",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
};