import React, { useState } from "react";
import './../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(""); // Success message or error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission logic (e.g., an API call).
    // Set success message here (you can replace with API logic later)
    setFormStatus("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" }); // Clear form after submit
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>Feel free to reach out, or you can connect via LinkedIn!</p>
      
      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
          />
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>

      {/* LinkedIn Button */}
      <div className="linkedin-container">
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="linkedin-btn">
          Connect on LinkedIn
        </a>
      </div>

      {/* Form Status */}
      {formStatus && <p className="form-status">{formStatus}</p>}
    </div>
  );
};

export default Contact;
