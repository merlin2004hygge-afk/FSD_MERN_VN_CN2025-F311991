import { useEffect, useState } from "react";
import api from "../api/axios";
import "../styles/card.css";

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await api.get("/appointments/doctor");
      setAppointments(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/appointments/${id}/status`, { status });
      fetchAppointments();
    } catch (err) {
      alert("Failed to update appointment");
    }
  };

  return (
    <div style={page}>
      {/* HEADER */}
      <header style={header}>
        <h1>Doctor Dashboard</h1>
        <p style={subtitle}>Your scheduled patient appointments</p>
      </header>

      {/* APPOINTMENTS */}
      <section style={section}>
        {appointments.length === 0 ? (
          <p style={emptyText}>No appointments available</p>
        ) : (
          appointments.map((app) => (
            <div key={app._id} style={card}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="patient"
                style={avatar}
              />

              <div style={info}>
                <h3>{app.patient?.name || "Patient"}</h3>
                <p>
                  <strong>Date:</strong> {app.date}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span
                    style={{
                      color:
                        app.status === "approved"
                          ? "#16a34a"
                          : app.status === "cancelled"
                          ? "#dc2626"
                          : "#eab308",
                    }}
                  >
                    {app.status || "pending"}
                  </span>
                </p>
              </div>

              {app.status === "pending" && (
                <div style={actions}>
                  <button
                    style={approveBtn}
                    onClick={() => updateStatus(app._id, "approved")}
                  >
                    Approve
                  </button>
                  <button
                    style={rejectBtn}
                    onClick={() => updateStatus(app._id, "cancelled")}
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default DoctorDashboard;

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
  margin: "0 auto",
};

const emptyText = {
  textAlign: "center",
  color: "#6b7280",
  fontSize: "16px",
};

const card = {
  background: "white",
  borderRadius: "14px",
  padding: "20px",
  marginBottom: "20px",
  display: "flex",
  alignItems: "center",
  gap: "20px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
};

const avatar = {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  objectFit: "cover",
};

const info = {
  flex: 1,
};

const actions = {
  display: "flex",
  gap: "10px",
};

const approveBtn = {
  padding: "10px 16px",
  backgroundColor: "#16a34a",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const rejectBtn = {
  padding: "10px 16px",
  backgroundColor: "#dc2626",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};