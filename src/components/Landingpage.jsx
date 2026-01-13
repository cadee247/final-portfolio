import React, { useState, useEffect, useRef } from "react";
import "./Landingpage.css";

function Landingpage() {

  // Intro stays WHITE
  const introText = "Heello there 👋, I'm ";

  // Name gets GRADIENT
  const nameText = "Caadee Rousseau.";

  const [typedIntro, setTypedIntro] = useState("");
  const [typedName, setTypedName] = useState("");
  const cursorRef = useRef(null);

  // Typing effect
  useEffect(() => {
    let introIndex = 0;
    let nameIndex = 0;
    const speed = 75;

    const timer = setInterval(() => {
      if (introIndex < introText.length) {
        setTypedIntro((prev) => prev + introText.charAt(introIndex));
        introIndex++;
      } else if (nameIndex < nameText.length) {
        setTypedName((prev) => prev + nameText.charAt(nameIndex));
        nameIndex++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, []);

  // Blinking cursor
  useEffect(() => {
    const cursor = cursorRef.current;
    let visible = true;

    const blink = setInterval(() => {
      if (cursor) cursor.style.opacity = visible ? "0" : "1";
      visible = !visible;
    }, 500);

    return () => clearInterval(blink);
  }, []);

  return (
    <div className="landing-container">
      <div className="landing-box">

        <h1 className="landing-title">
          {typedIntro}
          <span className="sparkle-name">{typedName}</span>
          <span ref={cursorRef} className="cursor">|</span>
        </h1>

        <p className="landing-subtext">
          Full-Stack Developer • MERN • Java • Python
        </p>

        <p className="landing-desc">
          I build clean, modern, and scalable applications with personality.
        </p>
      </div>

      <div className="contact-box">
        <h3 className="contact-title">Let's Connect</h3>
        <div className="contact-btns">
          <a href="mailto:cadee.dev@outlook.com" className="cool-btn">Email</a>
          <a href="https://www.linkedin.com/in/cadee-rousseau-bb59bb382" className="cool-btn" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="tel:+27791983027" className="cool-btn">Call</a>
          <a href="/cv/Cadee_Rousseau_Resume.pdf" className="cool-btn" target="_blank" rel="noreferrer">CV</a>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
