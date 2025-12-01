import React from "react";

// Child Component
function ChildComponent({ showAlert }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <button
        onClick={showAlert}
        style={{
          padding: "8px 15px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Click Me (Child)
      </button>
    </div>
  );
}

// Parent Component
export default function ParentComponent() {
  const showAlert = () => {
    alert("Hello! This alert came from the parent component.");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Parent & Child Example</h2>
      <ChildComponent showAlert={showAlert} />
    </div>
  );
}
