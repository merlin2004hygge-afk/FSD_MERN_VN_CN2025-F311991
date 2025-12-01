import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Products from "../pages/Products.jsx";
import Electronics from "../pages/Electronics.jsx";
import Fashion from "../pages/Fashion.jsx";

export default function App() {
  return (
    <Router>
      {/* Header / Navbar */}
      <header style={styles.header}>
        <div style={styles.logo}>Laptop App</div>
        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/products" style={styles.link}>Products</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
          {/* Products Nested Routes */}
          <Route path="/products" element={<Products />}>
            <Route path="electronics" element={<Electronics />} />
            <Route path="fashion" element={<Fashion />} />
          </Route>
        </Routes>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        © 2025 Laptop Style App
      </footer>
    </Router>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 50px",
    backgroundColor: "#007bff",
    color: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
  logo: { fontSize: "20px", fontWeight: "bold" },
  nav: { display: "flex", gap: "25px" },
  link: { color: "#fff", textDecoration: "none", fontWeight: "bold", fontSize: "16px" },
  main: { minHeight: "80vh", padding: "40px 80px", backgroundColor: "#f0f2f5" },
  footer: { textAlign: "center", padding: "15px", backgroundColor: "#007bff", color: "white" },
};