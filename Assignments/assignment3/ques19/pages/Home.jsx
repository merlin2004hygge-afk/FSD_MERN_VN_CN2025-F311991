import React from "react";

export default function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to Home Page</h1>
      <p>This is a laptop-friendly layout with full-width content.</p>
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