import React, { useEffect, useState } from "react";

export default function Q11() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div style={{ padding: "30px", backgroundColor: "#f5f6fa", minHeight: "100vh" }}>
      <h2 style={{ marginBottom: "20px", color: "#333" }}>Products</h2>

      {products.map((p) => (
        <div
          key={p.id}
          style={{
            background: "white",
            padding: "15px 20px",
            borderRadius: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            marginBottom: "15px",
            borderLeft: "5px solid #007BFF"
          }}
        >
          <p style={{ fontSize: "18px", fontWeight: "600", margin: "5px 0" }}>
            {p.title}
          </p>
          <p style={{ margin: "4px 0", color: "#555" }}>Price: ₹{p.price}</p>
          <p style={{ margin: "4px 0", color: "#777" }}>Brand: {p.brand}</p>
        </div>
      ))}
    </div>
  );
}