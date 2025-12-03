import { useState } from "react";
import departmentsData from "../data/departmentsData.json";
import "./ContactPage.css";

const ContactPage = () => {
  const initialFormState = {
    name: "",
    email: "",
    department: "",
    phone: "",
    message: ""
  };

  const [formData, setFormData] = useState(initialFormState);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData(initialFormState);
  };

  return (
    <div className="contact-wrapper">

      {/* LEFT SIDE - DETAILS */}
      <div className="contact-left">
        <h2>Send us a message ✉️</h2>
        <p>
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback and questions are important to us.
        </p>

        <div className="info-item">
          <span className="icon">📧</span>
          <p>contact@example.com</p>
        </div>

        <div className="info-item">
          <span className="icon">📞</span>
          <p>+91 98765 43210</p>
        </div>

        <div className="info-item">
          <span className="icon">📍</span>
          <p>Chennai, Tamil Nadu, India</p>
        </div>
      </div>

      {/* RIGHT SIDE - FORM */}
      <div className="contact-right">
        <h3 className="form-title">Get in Touch</h3>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            {departmentsData.map((dept) => (
              <option key={dept.id} value={dept.name}>
                {dept.name}
              </option>
            ))}
          </select>

          <textarea
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-btn">
            Submit Now →
          </button>
        </form>
      </div>

      {/* Submission Output */}
      {submittedData && (
        <div className="submitted-preview">
          <h3>Form Submitted Successfully ✔</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Phone:</strong> {submittedData.phone}</p>
          <p><strong>Department:</strong> {submittedData.department}</p>
          <p><strong>Message:</strong> {submittedData.message}</p>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
