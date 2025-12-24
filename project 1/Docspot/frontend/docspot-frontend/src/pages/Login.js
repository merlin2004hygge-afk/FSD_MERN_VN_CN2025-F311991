import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", { email, password });
      login(res.data);

      if (res.data.user.role === "patient") navigate("/patient");
      if (res.data.user.role === "doctor") navigate("/doctor");
      if (res.data.user.role === "admin") navigate("/admin");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={container}>
      <div style={card}>
        <h2 style={title}>Login</h2>
        <form onSubmit={submitHandler} style={form}>
          <input
            style={input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            style={input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button style={button} type="submit">Login</button>
        </form>
        <p style={signupText}>
          Don't have an account?{" "}
          <span
            style={signupLink}
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

// ----- Styles -----
const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#f0f4f8",
};

const card = {
  width: "350px",
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
  transition: "0.3s",
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

export default Login;
