import React from "react";
import "./Architecture.css";
import AuthImg from "../assets/authswagger.png";
import RoombookingImg from "../assets/roombooking.png";
import FoodorderImg from "../assets/foodorder.png";

const HotelManagementSystem = () => {
  const techStack = [
    "Java",
    "Spring Boot",
    "Swagger/OpenAPI",
    "OpenFeign",
    "Eureka",
    "PostgreSQL",
    "Docker",
  ];

  return (
    <section className="architecture-section">
      <h2 className="section-title">🏨 Hotel Management System</h2>

      <p>
        Distributed microservice architecture handling authentication,
        room booking, and food ordering. Requests flow through the API
        Gateway, services register with Eureka, and data is persisted
        in PostgreSQL.
      </p>

      <div className="tech-stack">
        {techStack.map((tech) => (
          <span key={tech} className="badge">
            {tech}
          </span>
        ))}
      </div>

      {/* Architecture Flow */}
      <div className="architecture-flow">

        {/* Client */}
        <div className="flow-node">
          <div className="orb" style={{ "--orbColor": "#3b82f6" }}>
          
            <span className="orb-label">Client</span>
          </div>
        </div>

        <div className="vertical-line" />

        {/* API Gateway */}
        <div className="flow-node">
          <div className="orb" style={{ "--orbColor": "#eab308" }}>
            {/* <img src="" alt="API Gateway" className="orb-img" /> */}
            <span className="orb-label">API Gateway</span>
            <small>:8080</small>
          </div>
        </div>

        <div className="vertical-line" />

        {/* Eureka */}
        <div className="flow-node">
          <div className="orb" style={{ "--orbColor": "#a855f7" }}>
            {/* <img src="/images/eureka.png" alt="Eureka" className="orb-img" /> */}
            <span className="orb-label">Eureka Registry</span>
            <small>:8761</small>
          </div>
        </div>

        <div className="vertical-line" />

        {/* Microservices */}
        <div className="services-row">

          <div className="orb" style={{ "--orbColor": "#10b981" }}>
             <img src={AuthImg} alt="Auth Service" className="orb-img" />
            <span className="orb-label">Auth Service</span>
            <small>JWT :8066</small>
          </div>

          <div className="orb" style={{ "--orbColor": "#3b82f6" }}>
            <img src={RoombookingImg} alt="Room Booking" className="orb-img" />
            <span className="orb-label">Room Booking</span>
            <small>:8062</small>
          </div>

          <div className="orb" style={{ "--orbColor": "#f97316" }}>
            <img src={FoodorderImg} alt="Food Order" className="orb-img" />
            <span className="orb-label">Food Order</span>
            <small>:8083</small>
          </div>

        </div>

        <div className="vertical-line" />

        {/* Database */}
        <div className="flow-node">
          <div className="orb" style={{ "--orbColor": "#6b7280" }}>
            {/* <img src="/images/postgresql.png" alt="PostgreSQL" className="orb-img" /> */}
            <span className="orb-label">PostgreSQL</span>
            <small>Persistent Storage</small>
          </div>
        </div>

      </div>

      <p className="footer-note">
        Inter-service communication via <strong>OpenFeign</strong> •
        Containerized with <strong>Docker</strong> •
        Documented using <strong>Swagger/OpenAPI</strong>
      </p>

      <div className="github-wrapper">
        <a
          href="https://github.com/LindokuhleYende/HotelManagementSystem"
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          View Full Source Code →
        </a>
      </div>
    </section>
  );
};

export default HotelManagementSystem;