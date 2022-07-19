import React, { useState, useRef } from "react";
import "./App.scss";

import Moon from "./icons/moon.png";
import ParallaxBG from "./components/ParallaxBG";
import Menu from "./components/Menu";
import HeroSection from "./components/Sections/HeroSection.tsx";
import AboutSection from "./components/Sections/AboutSection";
import ExperienceSection from "./components/Sections/ExperienceSection";
import ContactSection from "./components/Sections/ContactSection";
import Footer from "./components/Footer";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    switch (section) {
      case "home":
        homeRef.current?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        break;
      case "about me":
        aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        break;
      case "experience":
        experienceRef.current?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        break;
      case "contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        break;
    }
  };

  const handleCollapse = () => {
    setCollapsed((collapsed) => !collapsed);
  };

  return (
    <div className="relative bg-gradient-to-b from-black via-[#000b1a] to-[#011a3d] text-white ">
      <div>
        <ParallaxBG />
        <img className="moon" src={Moon} alt="moon" />
        <div ref={homeRef}>
          <HeroSection />
        </div>
        <div className={`${collapsed ? "lg:pl-0" : "lg:pl-40"}`}>
          <div className="max-w-screen-xl px-12 lg:px-16 mx-auto">
            <AboutSection ref={aboutRef} scrollFn={scrollToSection} />
            <ExperienceSection ref={experienceRef} />
            <ContactSection ref={contactRef} />
          </div>
        </div>
        <Menu scrollFn={scrollToSection} onCollapse={handleCollapse} />

        <Footer />
      </div>
    </div>
  );
}

export default App;
