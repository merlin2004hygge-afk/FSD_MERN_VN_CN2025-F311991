import React from "react";

export default function Fashion() {
  return (
    <div style={styles.card}>
      <h2>Fashion</h2>
      <p>Here are our fashion products: t-shirts, jeans, jackets, and accessories.</p>
    </div>
  );
}

const styles = {
  card: {
    padding: "20px",
    background: "black",
    borderRadius: "8px",
  },
};