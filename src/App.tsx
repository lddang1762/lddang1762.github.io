import React, { useState, useRef } from "react";
import "./App.scss";
import Moon from "./icons/moon.png";
import Menu from "./components/Menu";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  const [scrollY, setScrollY] = useState(0);
  window.addEventListener("scroll", () => {
    setScrollY(window.scrollY);
  });

  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: number) => {
    switch (section) {
      case 1:
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case 2:
        experienceRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case 3:
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  return (
    <div className="relative  bg-gradient-to-b from-black to-[#001129] text-white ">
      <div>
        <div className="stars-fg" style={{ transform: `translateY(-${scrollY * 0.6}px)` }} />
        <div className="stars-mg" style={{ transform: `translateY(-${scrollY * 0.3}px)` }} />
        <div className="stars-bg" style={{ transform: `translateY(-${scrollY * 0.1}px)` }} />
        <img className="moon mx-auto" src={Moon} alt="moon" />
        {/* <div className="absolute right-16 top-[45vh]">
          <Menu />
        </div> */}
        <div className="py-32">
          <AboutSection ref={aboutRef} scrollFn={scrollToSection} />
          <ExperienceSection ref={experienceRef} />
          <ContactSection ref={contactRef} />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
