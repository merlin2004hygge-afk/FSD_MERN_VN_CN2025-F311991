import React from "react";

// Single Profile Card Component
function ProfileCard({ name, role, image }) {
  return (
    <div
      style={{
        width: "220px",
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        background: "#fff",
        textAlign: "center",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "90px",
          height: "90px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "10px",
        }}
      />
      <h3 style={{ margin: "5px 0" , color: "black" }}>{name}</h3>
      <p style={{ color: "black" }}>{role}</p>
    </div>
  );
}

// Using the component 3 times
export default function App() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <ProfileCard
        name="Aishwarya Sharma"
        role="Senior Frontend Developer"
        image="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
      />

      <ProfileCard
        name="Rahul Verma"
        role="Cloud Solutions Architect"
        image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
      />

      <ProfileCard
        name="Meera Iyer"
        role="Lead UX Designer"
        image="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
      />
    </div>
  );
}
