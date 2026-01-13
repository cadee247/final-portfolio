import React from "react";
import { FaLightbulb, FaBrain, FaRocket, FaCompass, FaComments, FaUsers, FaBullseye } from "react-icons/fa";
import "./About.css";

function About() {
  return (
    <div className="section-container py-12 px-6 md:px-12 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-glow text-center">
        About Me
      </h2>

      <p className="text-lg md:text-xl text-white/90 mb-6 text-center max-w-3xl">
        Hi, I’m <span className="gradient-name">Cadee Rousseau</span> — a passionate software developer with hands-on experience from Code College. I thrive on building clean, modern, and scalable applications that solve real-world problems.
      </p>

      <p className="text-lg md:text-xl text-white/90 mb-6 text-center max-w-3xl">
        Beyond coding, I enjoy experimenting with new frameworks, improving my UI/UX skills, and turning complex ideas into simple, elegant solutions. Every project is an opportunity to learn, grow, and leave a lasting impact.
      </p>

      {/* Personality Icon Tags */}
      <div className="icon-tags flex flex-wrap gap-4 justify-center mt-6">
        <div className="icon-tag"><FaLightbulb /> Curious</div>
        <div className="icon-tag"><FaBrain /> Creative Thinker</div>
        <div className="icon-tag"><FaRocket /> Innovator</div>
        <div className="icon-tag"><FaCompass /> Explorer</div>
        <div className="icon-tag"><FaComments /> Clear Communicator</div>
        <div className="icon-tag"><FaUsers /> Team Player</div>
        <div className="icon-tag"><FaBullseye /> Goal-oriented</div>
      </div>
    </div>
  );
}

export default About;
