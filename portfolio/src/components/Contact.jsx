import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section frosted-container">
      <h2 className="text-glow">Contact Me</h2>
      <p>
        I’d love to hear from you! Reach out via email or connect on LinkedIn and GitHub.
      </p>

      <div className="contact-buttons">
        <a href="mailto:cadee@example.com" className="contact-btn">Email Me</a>
        <a
          href="https://www.linkedin.com/in/cadeerousseau"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/cadeerousseau"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;
