import React from "react";
import products from "./Data.json"; // Adjust path if needed

const Ques10 = () => {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", padding: "20px" }}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            width: "200px",
            boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p style={{ fontWeight: "bold", color: "green" }}>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Ques10;
