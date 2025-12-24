import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "patient",
    specialization: "",
    about: "",
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      await api.post("/auth/register", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Registered successfully. Please wait for admin approval.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div style={container}>
      <div style={card}>
        <h2 style={title}>Register</h2>

        <form onSubmit={submitHandler} style={form}>
          <input
            style={input}
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            style={input}
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            style={input}
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <select
            style={input}
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>

          {formData.role === "doctor" && (
            <>
              <input
                style={input}
                name="specialization"
                placeholder="Specialization"
                value={formData.specialization}
                onChange={handleChange}
                required
              />

              <textarea
                style={{ ...input, height: "80px" }}
                name="about"
                placeholder="About yourself"
                value={formData.about}
                onChange={handleChange}
                required
              />

              <input
                style={input}
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                required
              />
            </>
          )}

          <button style={button} type="submit">
            Register
          </button>
        </form>

        <p style={signupText}>
          Already have an account?{" "}
          <span style={signupLink} onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

// ----- Styles (UNCHANGED) -----
const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#f0f4f8",
};

const card = {
  width: "400px",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  backgroundColor: "#fff",
  textAlign: "center",
};

const title = {
  color: "#1E90FF",
  marginBottom: "20px",
};

const form = {
  display: "flex",
  flexDirection: "column",
};

const input = {
  padding: "12px",
  margin: "10px 0",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const button = {
  padding: "12px",
  marginTop: "15px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#1E90FF",
  color: "#fff",
  fontSize: "16px",
  cursor: "pointer",
};

const signupText = {
  marginTop: "15px",
  fontSize: "14px",
  color: "#555",
};

const signupLink = {
  color: "#1E90FF",
  cursor: "pointer",
  fontWeight: "bold",
};

export default Register;
