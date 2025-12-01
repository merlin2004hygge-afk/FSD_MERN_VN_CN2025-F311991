import React, { useEffect, useState } from "react";

export default function Q12() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => {
        setData(result.products);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Product List</h2>

      {/* Loading */}
      {loading && <p>Loading…</p>}

      {/* Error */}
      {error && <p>Error loading data</p>}

      {/* Show data only when loading is false and error is false */}
      {!loading &&
        !error &&
        data.map((item) => (
          <div key={item.id} style={{ marginBottom: "10px" }}>
            <p>Name: {item.title}</p>
            <p>Price: ₹{item.price}</p>
            <p>Brand: {item.brand}</p>
            <hr />
          </div>
        ))}
    </div>
  );
}