import React from "react";
import "./../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Your Name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Your Email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" placeholder="Your Message" required></textarea>

        <button type="submit">Send</button>
      </form>
      <div className="contact-links">
        <p>Email: yourname@example.com</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
