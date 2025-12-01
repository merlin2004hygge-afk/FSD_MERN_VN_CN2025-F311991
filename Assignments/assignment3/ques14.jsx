import React, { useState } from "react";

export default function Q14() {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Mango"]);
  const [newFruit, setNewFruit] = useState("");

  const addFruit = (e) => {
    e.preventDefault();
    if (newFruit.trim() === "") return;
    setFruits([...fruits, newFruit]);
    setNewFruit("");
  };

  const deleteFruit = (index) => {
    const updatedList = fruits.filter((_, i) => i !== index);
    setFruits(updatedList);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Fruit List</h2>

      {/* Add Fruit Form */}
      <form onSubmit={addFruit} style={{ marginBottom: "15px" }}>
        <input
          type="text"
          value={newFruit}
          onChange={(e) => setNewFruit(e.target.value)}
          placeholder="Enter fruit"
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "8px 15px" }}>
          Add
        </button>
      </form>

      {/* Display Fruits */}
      <ul style={{ paddingLeft: "20px" }}>
        {fruits.map((fruit, index) => (
          <li
            key={index}
            style={{
              marginBottom: "8px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {fruit}
            <button
              onClick={() => deleteFruit(index)}
              style={{
                padding: "4px 10px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}