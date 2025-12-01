import React, { useState } from "react";

export default function Q15() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: ""
  });

  // Handle Input Change
  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "400px" }}>
      <h2>Edit Profile</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>Name:</label>
        <br />
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          style={{ padding: "8px", width: "100%" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Email:</label>
        <br />
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          style={{ padding: "8px", width: "100%" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Phone:</label>
        <br />
        <input
          type="text"
          name="phone"
          value={profile.phone}
          onChange={handleChange}
          style={{ padding: "8px", width: "100%" }}
        />
      </div>

      <h3>Profile Preview</h3>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Phone:</strong> {profile.phone}</p>
    </div>
  );
}