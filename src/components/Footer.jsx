import React from "react";

function Footer() {
  return (
    <footer className="relative text-white text-center py-6 bg-black/70 backdrop-blur-lg border-t border-[#5b19f3]/40 shadow-[0_0_25px_rgba(91,25,243,0.4)]">
      <p className="text-sm tracking-wide opacity-90">
        © {new Date().getFullYear()} Cadee Rousseau • Full-Stack Developer
      </p>

      {/* Glowing line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-[#5b19f3] to-transparent blur-sm"></div>
    </footer>
  );
}

export default Footer;
