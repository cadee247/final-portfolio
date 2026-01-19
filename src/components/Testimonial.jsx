// src/components/Testimonials.jsx
import React, { useState } from "react";
import "./Testimonial.css";
import PKImg from "../assets/PK.jpg";
import CCImg from "../assets/CC.jpg";
import PPImg from "../assets/PP.jpg";
import DWImg from "../assets/DW.jpg";

// Testimonial data
const testimonialsData = [
  {
    name: "Pierre K",
    role: "Developer",
    image: PKImg,
    text: "Cadee Rousseau is a highly diligent and technically focused developer who consistently delivers well-structured, maintainable solutions. Her strong work ethic, reliability, and calm, collaborative mindset make her a trusted and impactful team member. Cadee’s professionalism and thoughtful communication elevate every project she’s part of, making her an exceptional asset to any team.",
  },
  {
    name: "Courtney C",
    role: "Designer",
    image: CCImg,
    text: "Working with Cadee was a pleasure. His attention to detail and code quality is top-notch.",
  },
  {
    name: "Phomello P",
    role: "Client",
    image: PPImg,
    text: "I’ve had the privilege of being colleagues with Cadee Rousseau at Code College, and I can confidently say she is an exceptional individual. Her creativity and dedication stand out in every project. Not only does she manage heavy workloads with ease, but she also pursues personal projects with remarkable passion and skill.In team settings, Cadee is collaborative, reliable, and always carries her share of responsibility. When opportunities arise, she steps up as a natural leader, guiding the team with clarity and confidence. Her ability to balance teamwork and independent work makes her a true asset to any group.Working with Cadee has always been a pleasure, and I wholeheartedly recommend her for any endeavor she chooses to pursue.",
  },
  {
    name: "Doggy World",
    role: "Client",
    image: DWImg,
    text: "Cadee consistently delivers projects that exceed expectations. Her React skills are impressive.",
  },
];

const roles = ["All", "Client", "Designer", "Developer"];

function Testimonials() {
  const [selectedRole, setSelectedRole] = useState("All");

  // Filter testimonials based on selected role
  const filteredTestimonials =
    selectedRole === "All"
      ? testimonialsData
      : testimonialsData.filter((t) => t.role === selectedRole);

  return (
    <section className="testimonials-section">
      <h2 className="section-title">Testimonials</h2>

      {/* Role Filter Buttons */}
      <div className="filter-buttons">
        {roles.map((role) => (
          <button
            key={role}
            className={`filter-btn ${
              selectedRole === role ? "active" : ""
            }`}
            onClick={() => setSelectedRole(role)}
          >
            {role}
          </button>
        ))}
      </div>

      <div className="testimonials-grid">
        {filteredTestimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <img
              src={t.image}
              alt={t.name}
              className="testimonial-image"
              loading="lazy" // lazy loading added
              decoding="async" // optional for performance
            />
            <h3>{t.name}</h3>
            <p className="role">{t.role}</p>
            <p className="testimonial-text">"{t.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
