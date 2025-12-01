import React from "react";

export default function Products() {
  return (
    <div style={styles.container}>
      <h1>Products</h1>
      <p>Here we can list our products with a laptop-style layout.</p>
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