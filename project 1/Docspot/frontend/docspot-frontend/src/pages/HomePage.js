import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

const HomePage = () => {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async (query = "") => {
    try {
      setLoading(true);
      const url = query ? `/doctors?search=${query}` : "/doctors";
      const res = await api.get(url);
      setDoctors(res.data);
    } catch (error) {
      console.error("Fetch doctors error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchDoctors(search);
  };

  return (
    <div style={page}>
      {/* NAVBAR */}
      <nav style={navbar}>
        <h2 style={logo}>Doc<span style={{ color: "#1e90ff" }}>Spot</span></h2>
        <div>
          <Link to="/login" style={navLink}>Login</Link>
          <Link to="/register" style={navBtn}>Register</Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={hero}>
        <h1>Your Health, Our Priority</h1>
        <p>Search by doctor name or specialization</p>

        <div style={searchBox}>
          <input
            style={searchInput}
            placeholder="e.g. Cardiology, John"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button style={searchBtn} onClick={handleSearch}>
            Search
          </button>
        </div>
      </section>

      {/* DOCTORS */}
      <section style={section}>
        <h2 style={sectionTitle}>Available Doctors</h2>

        {loading ? (
          <p style={{ textAlign: "center" }}>Loading...</p>
        ) : doctors.length === 0 ? (
          <p style={{ textAlign: "center" }}>No doctors found</p>
        ) : (
          <div style={grid}>
            {doctors.map((doc) => (
              <div key={doc._id} style={card}>
                <img
                  src={
                    doc.image
                      ? `http://localhost:5000${doc.image}`
                      : "https://cdn-icons-png.flaticon.com/512/387/387561.png"
                  }
                  alt={doc.name}
                  style={avatar}
                />

                <h3>{doc.name}</h3>
                <p style={spec}>{doc.specialization}</p>

                <Link to={`/doctor/${doc._id}`} style={viewBtn}>
                  View Profile
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer style={footer}>
        <p>© 2025 DocSpot. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

/* ================= STYLES ================= */

const page = {
  fontFamily: "Poppins, sans-serif",
  backgroundColor: "#f5f7fb",
};

const navbar = {
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 40px",
  background: "#fff",
  boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
};

const logo = { fontSize: "30px", fontWeight: "700" };

const navLink = {
  marginRight: "20px",
  textDecoration: "none",
  color: "#374151",
};

const navBtn = {
  background: "#1e90ff",
  color: "#fff",
  padding: "8px 16px",
  borderRadius: "6px",
  textDecoration: "none",
};

const hero = {
  textAlign: "center",
  padding: "80px 20px",
  background: "linear-gradient(135deg, #1e90ff, #4facfe)",
  color: "#fff",
};

const searchBox = {
  marginTop: "25px",
  display: "flex",
  justifyContent: "center",
  gap: "10px",
};

const searchInput = {
  padding: "12px",
  width: "250px",
  borderRadius: "6px",
  border: "none",
};

const searchBtn = {
  padding: "12px 20px",
  borderRadius: "6px",
  background: "#111827",
  color: "#fff",
  border: "none",
};

const section = { padding: "60px 40px" };

const sectionTitle = {
  textAlign: "center",
  fontSize: "32px",
  marginBottom: "40px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
  gap: "30px",
};

const card = {
  background: "#fff",
  borderRadius: "12px",
  padding: "25px",
  textAlign: "center",
  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
};

const avatar = {
  width: "110px",
  height: "110px",
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: "15px",
};

const spec = { color: "#6b7280", marginBottom: "15px" };

const viewBtn = {
  padding: "10px 18px",
  background: "#1e90ff",
  color: "#fff",
  borderRadius: "6px",
  textDecoration: "none",
};

const footer = {
  textAlign: "center",
  padding: "20px",
  background: "#111827",
  color: "#d1d5db",
};
