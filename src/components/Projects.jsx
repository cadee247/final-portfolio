// src/components/Projects.jsx
import React from "react";
import "./Projects.css";

// Import project images
import SkineticImg from "../assets/Skinetic.jpg";
import BlogImg from "../assets/Blog.jpg";
import HTMXImg from "../assets/HTMX.jpg";
import PythonImg from "../assets/Python.jpg";
import ExpenseImg from "../assets/Expense.jpg";
import SoccerImg from "../assets/Soccer.jpg";

const projectData = [
  {
    title: "🚀 HTMX To-Do List",
    description:
      'A dynamic task board where users can create, move, and organize tasks across columns like "To Do," "In Progress," and "Done." Built with HTMX for live updates without page reloads.',
    link: "https://imaginative-alpaca-3f6649.netlify.app/",
    image: HTMXImg,
  },
  {
    title: "Guessing Game (Python)",
    description: "Fun number guessing game built with Python + Flask.",
    link: "https://guessing-gamer.onrender.com/",
    image: PythonImg,
  },
  {
    title: "Blog Platform (Node.js)",
    description: "Minimal blog engine powered by Node.js and Express.",
    link: "https://blog-post-9dik.onrender.com/",
    image: BlogImg,
  },
  {
    title: "Expense Tracker (React + Firebase)",
    description:
      "Built with React and Firebase. Tracks personal expenses in real-time with authentication and Firestore sync.",
    link: "https://golden-queijadas-554e24.netlify.app/signin",
    image: ExpenseImg,
  },
  {
    title: "Skinetic App (MERN)",
    description:
      "Full-stack MERN application Skinetic builds your perfect routine in seconds. Just pick your product, skin type, and time of the day, and it reveals exactly how the product benefits your skin.",
    link: "https://skinetic-1-duza.onrender.com/n",
    image: SkineticImg,
  },
  {
    title: "Soccer League Application Backend Demo(Java)",
    description: "Back-end demonstration of a Java application.",
    link: "https://youtu.be/HfArUwUTXbk",
    image: SoccerImg,
  },
  {
    title: "Spring-boot REST API Demo",
    description:
      "Spring Back-end app, exposing a REST API. Tested and documented with Swagger, Insomnia, and the H2 console.",
    link: "https://youtu.be/zkZedrUMF_Y?si=2nPN-r_ciqM8VGQg",
    image: SoccerImg,
  },
  {
    title: "Task manager",
    description:
      'The app includes authentication, allowing users to add and manage tasks that are incomplete or need to be completed.',
    link: "https://www.youtube.com/playlist?list=PLZAqoTx2KcfvSvWWzVSapr4Yy_9NV7Rto",
    github: "https://github.com/cadee247/Web-Developer-Bootcamp",
    image: HTMXImg,
  },
  {
    title: "Event AI",
    description:
      "A chatbot that provides information about upcoming events in Johannesburg, filtered by category (e.g., music, tech, cooking).",
    link: "https://www.youtube.com/playlist?list=PLZAqoTx2KcfssF5_o1qA26c4VrAoPHrrU",
    github: "https://github.com/cadee247/Java-Developer-Bootcamp",
    image: HTMXImg,
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