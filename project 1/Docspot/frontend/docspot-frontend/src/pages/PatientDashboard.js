import { useEffect, useState } from "react";
import api from "../api/axios";
import "../styles/card.css";

const PatientDashboard = () => {
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [date, setDate] = useState("");

  useEffect(() => {
    fetchDoctors();
    fetchAppointments();
  }, []);

  const fetchDoctors = async () => {
    try {
      const res = await api.get("/doctors");
      setDoctors(res.data);
    } catch (err) {
      console.error("Fetch doctors error:", err);
    }
  };

  const fetchAppointments = async () => {
    try {
      const res = await api.get("/appointments/patient");
      setAppointments(res.data);
    } catch (err) {
      console.error("Fetch appointments error:", err);
    }
  };

  const bookAppointment = async () => {
    if (!date || !selectedDoctor) {
      alert("Select doctor and date");
      return;
    }

    try {
      await api.post("/appointments", {
        doctorId: selectedDoctor._id,
        date,
      });

      alert("Appointment booked");
      setSelectedDoctor(null);
      setDate("");
      fetchAppointments();
    } catch (err) {
      alert("Failed to book appointment");
    }
  };

  return (
    <div style={page}>
      {/* ================= HEADER ================= */}
      <div style={header}>
        <h1>Patient Dashboard</h1>
        <p>Book appointments with trusted doctors</p>
      </div>

      {/* ================= DOCTORS ================= */}
      <section style={section}>
        <h2 style={sectionTitle}>Available Doctors</h2>

        {doctors.length === 0 ? (
          <p>No doctors available</p>
        ) : (
          <div style={grid}>
            {doctors.map((doc) => (
              <div key={doc._id} style={doctorCard}>
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
                <p style={specialization}>{doc.specialization}</p>

                <button
                  style={primaryBtn}
                  onClick={() => setSelectedDoctor(doc)}
                >
                  Book Appointment
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ================= BOOKING PANEL ================= */}
      {selectedDoctor && (
        <section style={bookingBox}>
          <h3>
            Booking with <span>{selectedDoctor.name}</span>
          </h3>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={dateInput}
          />

          <div style={{ marginTop: "15px" }}>
            <button style={primaryBtn} onClick={bookAppointment}>
              Confirm
            </button>
            <button
              style={secondaryBtn}
              onClick={() => setSelectedDoctor(null)}
            >
              Cancel
            </button>
          </div>
        </section>
      )}

      {/* ================= APPOINTMENTS ================= */}
      <section style={section}>
        <h2 style={sectionTitle}>Your Appointments</h2>

        {appointments.length === 0 ? (
          <p>No appointments yet</p>
        ) : (
          <div style={grid}>
            {appointments.map((app) => (
              <div key={app._id} style={appointmentCard}>
                <img
                  src={
                    app.doctor?.image
                      ? `http://localhost:5000${app.doctor.image}`
                      : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  }
                  alt="doctor"
                  style={avatarSmall}
                />

                <div>
                  <h4>{app.doctor?.name}</h4>
                  <p>Date: {app.date}</p>
                  <p>Status: <b>{app.status}</b></p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default PatientDashboard;

/* ================= STYLES ================= */

const page = {
  padding: "30px",
  backgroundColor: "#f5f7fb",
  minHeight: "100vh",
};

const header = {
  background: "linear-gradient(135deg, #1e90ff, #4facfe)",
  color: "white",
  padding: "30px",
  borderRadius: "12px",
  marginBottom: "40px",
};

const section = {
  marginBottom: "50px",
};

const sectionTitle = {
  fontSize: "26px",
  marginBottom: "25px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gap: "25px",
};

const doctorCard = {
  background: "white",
  padding: "25px",
  borderRadius: "14px",
  textAlign: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
};

const appointmentCard = {
  background: "white",
  padding: "20px",
  borderRadius: "14px",
  display: "flex",
  alignItems: "center",
  gap: "15px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
};

const avatar = {
  width: "110px",
  height: "110px",
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: "15px",
};

const avatarSmall = {
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  objectFit: "cover",
};

const specialization = {
  color: "#6b7280",
  marginBottom: "15px",
};

const bookingBox = {
  background: "white",
  padding: "25px",
  borderRadius: "14px",
  maxWidth: "450px",
  margin: "0 auto 50px",
  textAlign: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
};

const dateInput = {
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  width: "100%",
};

const primaryBtn = {
  padding: "12px 20px",
  backgroundColor: "#1e90ff",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const secondaryBtn = {
  padding: "12px 20px",
  marginLeft: "10px",
  backgroundColor: "#e5e7eb",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};