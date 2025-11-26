import React from "react";
import "./certs.css";

// Skill Icons
import reactIcon from "../assets/icons8-react-100.png";
import jsIcon from "../assets/icons8-javascript-100.png";
import mongoIcon from "../assets/icons8-mongodb-100.png";
import nodeIcon from "../assets/icons8-nodejs-100.png";
import pythonIcon from "../assets/icons8-python-100.png";
import htmlIcon from "../assets/icons8-html-100.png";
import sqlIcon from "../assets/icons8-postgresql-100.png"; // SQL icon

// PDF Certificates
import reactCert from "../assets/certs/Cadee Rousseau  React.pdf";
import jsCert from "../assets/certs/Cadee Rousseau  MERN Stack.pdf";
import mongoCert from "../assets/certs/Cadee Rousseau  SQL.pdf";
import nodeCert from "../assets/certs/Cadee Rousseau  Node.js.pdf";
import pythonCert from "../assets/certs/python cert.pdf";
import htmxCert from "../assets/certs/htmx cert.pdf";
import introCert from "../assets/certs/intro.pdf";

const certs = [
  { name: "React", icon: reactIcon, certLink: reactCert, color: "#61dafb" },
  { name: "JavaScript", icon: jsIcon, certLink: jsCert, color: "#f7df1e" },
  { name: "MERN", icon: mongoIcon, certLink: mongoCert, color: "#4db33d" },
  { name: "Node.js", icon: nodeIcon, certLink: nodeCert, color: "#3c873a" },
  { name: "Python", icon: pythonIcon, certLink: pythonCert, color: "#3673a5" },
  { name: "HTMX", icon: htmlIcon, certLink: htmxCert, color: "gray" },
  { name: "SQL", icon: sqlIcon, certLink: mongoCert, color: "#336791" },
];

function CertOrbs() {
  return (
    <section className="skill-orbs-section">
      <h2 className="section-title">Certifications</h2>

      <div className="orb-grid">
        {certs.map((c, i) => (
          <div
            key={i}
            className="orb"
            style={{ "--orbColor": c.color, animationDelay: `${i * 0.3}s` }}
          >
            <div className="orb-aura"></div>
            <div className="orb-particles"></div>

            {/* Lazy-loaded icon */}
            <img src={c.icon} alt={c.name} className="orb-icon" loading="lazy" />

            <div className="orb-label">{c.name}</div>

            {c.certLink && (
              <a
                href={c.certLink}
                className="orb-button"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CertOrbs;
