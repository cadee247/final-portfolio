import React from "react";
import "./index.css";

import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
import Demo from "./components/Demo";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";
import Architecture from "./components/Architecture";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative text-white min-h-screen overflow-x-hidden">
      <Navbar />

      <div id="landing" className="frosted-container">
        <Landingpage />
      </div>

      <div id="about" className="frosted-container">
        <About />
      </div>

      <div id="projects" className="frosted-container">
        <Projects />
      </div>

      <section id="architecture" className="transparent-section">
        <Architecture />
      </section>

      <section id="demo" className="transparent-section">
        <Demo />
      </section>

      <section id="testimonial" className="transparent-section">
        <Testimonial />
      </section>

      <Footer />
    </div>
  );
}

export default App;
