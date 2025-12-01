import React, { useState } from "react";
import axios from "axios";

export default function Q16() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://dummyjson.com/posts/add", {
        title: title,
        body: body,
      })
      .then(() => {
        setMessage("Post Added!");
        setTitle("");
        setBody("");
      })
      .catch(() => {
        setMessage("Error adding post");
      });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "400px" }}>
      <h2>Add Post</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Title:</label>
          <br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ padding: "8px", width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Body:</label>
          <br />
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows="3"
            style={{ padding: "8px", width: "100%" }}
          ></textarea>
        </div>

        <button type="submit" style={{ padding: "8px 15px" }}>
          Submit
        </button>
      </form>

      {message && (
        <p style={{ marginTop: "15px", fontWeight: "bold" }}>{message}</p>
      )}
    </div>
  );
}