import React, { useState } from "react";

export default function LiveUsername() {
  const [username, setUsername] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <label style={{ display: "block", marginBottom: "8px" }}>
        Username:
      </label>

      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          padding: "8px",
          width: "250px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <h3 style={{ marginTop: "20px" }}>
        Entered Username: {username || "(nothing typed yet)"}
      </h3>
    </div>
  );
}
