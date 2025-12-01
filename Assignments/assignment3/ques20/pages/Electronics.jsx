import React from "react";

export default function Electronics() {
  return (
    <div style={styles.card}>
      <h2>Electronics</h2>
      <p>Here are our electronics products: laptops, phones, headphones, and more.</p>
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