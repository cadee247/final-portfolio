// src/components/Demo.jsx
import React from "react";
import "./Demo.css";

import JWTImg from "../assets/JWT.jpg";
import SoccerImg from "../assets/Soccer.jpg";

const demoData = [
  {
    title: "GraphQL Pair Project",
    link: "https://www.youtube.com/watch?v=uivo-eX-a7Y",
    description: "Collaborative demo app highlighting schema design, backend logic, and teamwork.",
    image: JWTImg,
  },
  {
    title: "JWT Auth Pair Project",
    link: "https://www.youtube.com/watch?v=Bb5CUmfDqWs",
    description: "Tutorial project built with a peer, focusing on secure login flows and route protection.",
    image: JWTImg,
  },
  {
    title: "Shopping Cart SQL Demo",
    link: "https://www.youtube.com/watch?v=9mU0H_AuJ1k&list=PLZAqoTx2Kcfvlz9XfcH42xdfpS4vNV1dP",
    description: "SQL-powered shopping cart app demonstrating database design and queries.",
    image: SoccerImg,
  },

];

function Demo() {
  return (
    <section className="demo-section">
      <h2 className="section-title">Featured Demos</h2>

      <div className="demo-grid">
        {demoData.map((demo, index) => (
          <div key={index} className="demo-card">
            {/* Display image if available */}
            {demo.image && (
              <img
                src={demo.image}
                alt={demo.title}
                className="demo-image"
                loading="lazy" // <-- lazy loading added
              />
            )}
            <h3>{demo.title}</h3>
            <p>{demo.description}</p>
            <a
              href={demo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="demo-btn"
            >
              Watch Demo →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Demo;
