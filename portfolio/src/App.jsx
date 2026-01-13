// src/App.jsx
import React, { useEffect, useRef } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
import Demo from "./components/Demo";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";
import Skills from "./components/Skills";

import Footer from "./components/Footer";
import CertOrbs from "./components/certs"; // matches export default

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const colors = ["#00ffea", "#8a2be2", "#ff00ff", "#39ff14"];

    class Circle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 15 + 10;
        this.phase = Math.random() * Math.PI * 2;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.5 + 0.2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.5 + 0.3;
      }
      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height)
          this.reset();
      }
      draw(ctx) {
        const pulse = 1 + Math.sin(Date.now() / 1500 + this.phase) * 0.2;
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * pulse, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const circles = Array.from({ length: 80 }, () => new Circle());
    let lastTime = 0;
    const throttle = 16; // ~60fps

    function animate(time) {
      if (time - lastTime > throttle) {
        lastTime = time;
        ctx.clearRect(0, 0, width, height);

        circles.forEach((circle) => {
          circle.update();
          circle.draw(ctx);
        });

        for (let i = 0; i < circles.length; i += 2) {
          for (let j = i + 1; j < circles.length; j += 2) {
            const dx = circles[i].x - circles[j].x;
            const dy = circles[i].y - circles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
              ctx.beginPath();
              ctx.moveTo(circles[i].x, circles[i].y);
              ctx.lineTo(circles[j].x, circles[j].y);
              ctx.strokeStyle = circles[i].color;
              ctx.globalAlpha = ((150 - dist) / 150) * 0.5;
              ctx.lineWidth = 1;
              ctx.shadowBlur = 10;
              ctx.shadowColor = circles[i].color;
              ctx.stroke();
            }
          }
        }
      }
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative text-white min-h-screen overflow-x-hidden">
      {/* Neon Network Background */}
      <canvas
        ref={canvasRef}
        id="neonCanvas"
        className="fixed top-0 left-0 w-full h-full -z-50"
      />

      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <div id="landing" className="frosted-container">
        <Landingpage />
      </div>

      <div id="about" className="frosted-container">
        <About />
      </div>

      <div id="projects" className="frosted-container">
        <Projects />
      </div>

   {/* Skill Network Section */}
<section id="Certificates" className="transparent-section">
  <CertOrbs />
</section>

<section id="skills" className="transparent-section">
  <Skills />
</section>

      <section id="demo" className="transparent-section">
        <Demo />
      </section>

   <section id="testimonial" className="transparent-section">
        <Testimonial />
      </section>
    

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
