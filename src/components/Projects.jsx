// src/components/Projects.jsx
import React from "react";
import "./Projects.css";

// Import project images
import DoggyWorldImg from "../assets/doggyworld.png";


import EldomaineImg from "../assets/Eldomaine.png";
import EventAIImg from "../assets/Eventai.png";
import SkineticImg from "../assets/skinetic.png";
const projectData = [
  {
    title: "DOGGY WORLD (WEBSITE)",
    description:
      'A React-based website built with JSX to showcase pet products. The site features product listings, an FAQ section to answer common customer questions, and a contact page for inquiries. Designed with a clean, responsive layout, it emphasizes accessibility and easy navigation for visitors.',
    link: "https://doggy-world.onrender.com/",
    image: DoggyWorldImg,
  },
  {
    title: "ELDOMAINE HIGH SCHOOL (WEBSITE)",
    description: "A React-based website built with JSX to serve as an online presence for Eldomaine High School. The site showcases school announcements, academic programs, and extracurricular activities. It also includes an FAQ section for parents and students, as well as a contact page for inquiries. Designed with a responsive layout, the project emphasizes clarity, accessibility, and easy navigation for the school community.",
    link: "https://eldomainesecondaryschool.netlify.app/",
    image: EldomaineImg,
  },

  {
    title: "Skinetic App (MERN)",
    description:
      "Full-stack MERN application Skinetic builds your perfect routine in seconds. Just pick your product, skin type, and time of the day, and it reveals exactly how the product benefits your skin.",
    link: "https://skinetic-1-duza.onrender.com/n",
    image: SkineticImg,
  },

  {
    title: "Event AI",
    description:
      "A chatbot that provides information about upcoming events in Johannesburg, filtered by category (e.g., music, tech, cooking).",
    link: "https://event-ai-8i7r.onrender.com",
   image: EventAIImg,
  },

];

function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projectData.map((proj, index) => (
          <div key={index} className="project-card">
            {proj.image && (
              <img
                src={proj.image}
                alt={proj.title}
                className="project-image"
                loading="lazy" // lazy load for better performance
                decoding="async" // optional, improves performance
              />
            )}
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="project-buttons">
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                View Project →
              </a>
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn github-btn"
                >
                  GitHub Repo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;