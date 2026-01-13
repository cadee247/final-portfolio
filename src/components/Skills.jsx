// src/components/Skills.jsx
import React from "react";
import "./Skills.css";

// Skill Icons
import reactIcon from "../assets/icons8-react-100.png";
import jsIcon from "../assets/icons8-javascript-100.png";
import mongoIcon from "../assets/icons8-mongodb-100.png";
import nodeIcon from "../assets/icons8-nodejs-100.png";
import pythonIcon from "../assets/icons8-python-100.png";
import htmlIcon from "../assets/icons8-html-100.png";
import sqlIcon from "../assets/icons8-postgresql-100.png";
import JavaIcon from "../assets/icons8-java-100.png";
import SpringbootIcon from "../assets/icons8-spring-boot-100.png";
import DockerIcon from "../assets/icons8-docker-100.png";
import gitIcon from "../assets/icons8-github-100.png";
import graphqlIcon from "../assets/icons8-graphql-100.png";
import firebaseIcon from "../assets/icons8-firebase-100.png";
// Skills grouped by category
const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", icon: jsIcon, color: "#f7df1e" },
      { name: "Python", icon: pythonIcon, color: "#3673a5" },
      { name: "Java", icon: JavaIcon, color: "#e76f00" }, // added Java
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: mongoIcon, color: "#4db33d" },
      { name: "SQL", icon: sqlIcon, color: "#336791" },
    ],
  },
  {
    category: "Frameworks / Libraries",
    skills: [
      { name: "React", icon: reactIcon, color: "#61dafb" },
      { name: "Node.js", icon: nodeIcon, color: "#3c873a" },
      { name: "HTMX", icon: htmlIcon, color: "gray" },
      { name: "Spring Boot", icon: SpringbootIcon, color: "#6db33f" }, // added Spring Boot
      { name: "GraphQL", icon: graphqlIcon, color: "#e535ab" }, // added GraphQL
    ],
  },
    {
    category: "DevOps / Tools", // ✅ new category
    skills: [
      { name: "Docker", icon: DockerIcon, color: "#0db7ed" }, // official Docker blue
      { name: "GitHub", icon: gitIcon, color: "purple" },
      { name: "Firebase", icon: firebaseIcon, color: "#ffca28" }, // Firebase yellow
    ],
  },

 
  
];

export default function Skills() {
  return (
    <div className="skill-orbs-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-columns">
        {skillCategories.map((group, i) => (
          <div key={i} className="skills-column">
            <h3 className="column-title">{group.category}</h3>
            {group.skills.map((s, j) => (
              <div
                key={j}
                className="orb"
                style={{ "--orbColor": s.color, animationDelay: `${j * 0.3}s` }}
              >
                <div className="orb-aura"></div>
                <div className="orb-particles"></div>
                <img
                  src={s.icon}
                  alt={s.name}
                  className="orb-icon"
                  loading="lazy"
                  decoding="async"
                />
                <div className="orb-label">{s.name}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}