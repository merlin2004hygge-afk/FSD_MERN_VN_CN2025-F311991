import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

const DoctorProfile = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await api.get(`/doctors/${id}`);
        setDoctor(res.data);
      } catch (error) {
        console.error("Fetch doctor error:", error);
      }
    };

    fetchDoctor();
  }, [id]); // ✅ correct dependency

  const submitReview = async () => {
    try {
      await api.post(`/doctors/${id}/review`, {
        rating,
        comment,
      });

      alert("Review submitted successfully");
      setRating(5);
      setComment("");

      // refresh doctor data after review
      const res = await api.get(`/doctors/${id}`);
      setDoctor(res.data);
    } catch (error) {
      console.error("Submit review error:", error);
      alert(error.response?.data?.message || "Failed to submit review");
    }
  };

  if (!doctor) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  const avgRating =
    doctor.reviews && doctor.reviews.length > 0
      ? (
          doctor.reviews.reduce((sum, r) => sum + r.rating, 0) /
          doctor.reviews.length
        ).toFixed(1)
      : "No ratings yet";

  return (
    <div style={page}>
      {/* ================= PROFILE CARD ================= */}
      <div style={profileCard}>
        <img
          src={
            doctor.image
              ? `http://localhost:5000${doctor.image}`
              : "https://cdn-icons-png.flaticon.com/512/387/387561.png"
          }
          alt={doctor.name}
          style={avatar}
        />

        <h2>{doctor.name}</h2>
        <p style={specialization}>{doctor.specialization}</p>

        <div style={ratingBox}>
          ⭐ <b>{avgRating}</b>
        </div>

        {doctor.about && (
          <p style={aboutText}>{doctor.about}</p>
        )}
      </div>

      {/* ================= REVIEWS ================= */}
      <section style={section}>
        <h3 style={sectionTitle}>Patient Reviews</h3>

        {doctor.reviews.length === 0 ? (
          <p>No reviews yet</p>
        ) : (
          doctor.reviews.map((r, index) => (
            <div key={index} style={reviewCard}>
              <strong>{r.patient?.name || "Patient"}</strong>
              <p>⭐ {r.rating}</p>
              <p>{r.comment}</p>
            </div>
          ))
        )}
      </section>

      {/* ================= ADD REVIEW ================= */}
      <section style={section}>
        <h3 style={sectionTitle}>Add Your Review</h3>

        <div style={reviewForm}>
          <label>Rating</label>
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            style={input}
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>

          <label>Comment</label>
          <textarea
            rows="4"
            placeholder="Share your experience"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={textarea}
          />

          <button style={primaryBtn} onClick={submitReview}>
            Submit Review
          </button>
        </div>
      </section>
    </div>
  );
};

export default DoctorProfile;

/* ================= STYLES ================= */

const page = {
  backgroundColor: "#f5f7fb",
  minHeight: "100vh",
  padding: "40px 20px",
};

const profileCard = {
  maxWidth: "6000px",
  margin: "0 auto 50px",
  background: "white",
  padding: "30px",
  borderRadius: "16px",
  textAlign: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
};

const avatar = {
  width: "140px",
  height: "140px",
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: "15px",
};

const specialization = {
  color: "#6b7280",
  marginBottom: "10px",
};

const ratingBox = {
  margin: "10px 0",
  fontSize: "18px",
};

const aboutText = {
  marginTop: "15px",
  color: "#374151",
  lineHeight: "1.6",
};

const section = {
  maxWidth: "7000px",
  margin: "0 auto 40px",
};

const sectionTitle = {
  marginBottom: "20px",
  fontSize: "22px",
};

const reviewCard = {
  background: "white",
  padding: "15px",
  borderRadius: "10px",
  marginBottom: "15px",
  boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
};

const reviewForm = {
  background: "white",
  padding: "25px",
  borderRadius: "14px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
};

const input = {
  width: "100%",
  padding: "10px",
  margin: "8px 0 15px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const textarea = {
  width: "100%",
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  marginBottom: "15px",
};

const primaryBtn = {
  padding: "12px 20px",
  backgroundColor: "#1e90ff",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};