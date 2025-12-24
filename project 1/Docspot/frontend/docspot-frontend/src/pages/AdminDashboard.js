import { useEffect, useState } from "react";
import api from "../api/axios";
import "../styles/card.css";

const AdminDashboard = () => {
  const [pendingDoctors, setPendingDoctors] = useState([]);
  const [approvedDoctors, setApprovedDoctors] = useState([]);

  useEffect(() => {
    fetchPendingDoctors();
    fetchApprovedDoctors();
  }, []);

  const fetchPendingDoctors = async () => {
    try {
      const res = await api.get("/doctors/pending");
      setPendingDoctors(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchApprovedDoctors = async () => {
    try {
      const res = await api.get("/doctors");
      setApprovedDoctors(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const approveDoctor = async (id) => {
    try {
      await api.put(`/doctors/approve/${id}`);
      fetchPendingDoctors();
      fetchApprovedDoctors();
    } catch (err) {
      alert("Failed to approve doctor");
    }
  };

  const deleteDoctor = async (id) => {
    if (!window.confirm("Are you sure you want to remove this doctor?")) return;

    try {
      await api.delete(`/doctors/delete/${id}`);
      fetchPendingDoctors();
      fetchApprovedDoctors();
    } catch (err) {
      alert("Failed to remove doctor");
    }
  };

  return (
    <div style={page}>
      {/* HEADER */}
      <header style={header}>
        <h1>Admin Dashboard</h1>
        <p style={subtitle}>Manage doctor registrations</p>
      </header>

      {/* PENDING DOCTORS */}
      <section style={section}>
        <h2 style={sectionTitle}>Pending Approvals</h2>

        {pendingDoctors.length === 0 ? (
          <p style={empty}>No pending doctors</p>
        ) : (
          pendingDoctors.map((doc) => (
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

              <div style={info}>
                <h3>{doc.name}</h3>
                <p>{doc.specialization}</p>
              </div>

              <button
                style={approveBtn}
                onClick={() => approveDoctor(doc._id)}
              >
                Approve
              </button>
            </div>
          ))
        )}
      </section>

      {/* APPROVED DOCTORS */}
      <section style={section}>
        <h2 style={sectionTitle}>Approved Doctors</h2>

        {approvedDoctors.length === 0 ? (
          <p style={empty}>No approved doctors</p>
        ) : (
          approvedDoctors.map((doc) => (
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

              <div style={info}>
                <h3>{doc.name}</h3>
                <p>{doc.specialization}</p>
              </div>

              <button
                style={deleteBtn}
                onClick={() => deleteDoctor(doc._id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default AdminDashboard;

/* ================= STYLES ================= */

const page = {
  minHeight: "100vh",
  backgroundColor: "#f5f7fb",
  padding: "30px",
};

const header = {
  background: "linear-gradient(135deg, #1e90ff, #4facfe)",
  color: "white",
  padding: "30px",
  borderRadius: "12px",
  marginBottom: "40px",
};

const subtitle = {
  color: "#6b7280",
  marginTop: "6px",
};

const section = {
  maxWidth: "900px",
  margin: "0 auto 50px",
};

const sectionTitle = {
  marginBottom: "20px",
};

const empty = {
  textAlign: "center",
  color: "#6b7280",
};

const card = {
  background: "white",
  borderRadius: "14px",
  padding: "20px",
  marginBottom: "15px",
  display: "flex",
  alignItems: "center",
  gap: "20px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
};

const avatar = {
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  objectFit: "cover",
};

const info = {
  flex: 1,
};

const approveBtn = {
  padding: "10px 18px",
  backgroundColor: "#16a34a",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const deleteBtn = {
  padding: "10px 18px",
  backgroundColor: "#dc2626",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};