import React from "react";
import "./HeroSection.scss";
export default function HeroSection() {
  const greeting = "GREETINGS,";
  return (
    <div className="flex items-center justify-center gap-8 p-12 mb-32 h-screen text-[#bbff00]">
      <div>
        {greeting.split("").map((char, index) => (
          <header key={index} className="typewriter inline text-6xl sm:text-7xl md:text-9xl tracking-widest font-light">
            {char}
          </header>
        ))}
      </div>
    </div>
  );
}
