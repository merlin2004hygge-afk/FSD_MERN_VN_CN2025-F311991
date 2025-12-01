import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Products() {
  return (
    <div style={styles.container}>
      <h1>Products Page</h1>
      <p>Select a category below:</p>

      <div style={styles.links}>
        <Link to="electronics" style={styles.link}>Electronics</Link>
        <Link to="fashion" style={styles.link}>Fashion</Link>
      </div>

      {/* Nested route will render here */}
      <div style={{ marginTop: "20px" }}>
        <Outlet />
      </div>
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
  links: { display: "flex", gap: "15px", marginTop: "10px" },
  link: { padding: "8px 15px", background: "#007bff", color: "white", borderRadius: "5px", textDecoration: "none" },
};