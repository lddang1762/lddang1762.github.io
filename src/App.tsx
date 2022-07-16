import React, { useRef } from "react";
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
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    switch (section) {
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

  return (
    <div className="relative bg-gradient-to-b from-black to-[#001129] text-white ">
      <div>
        <ParallaxBG />
        <img className="moon" src={Moon} alt="moon" />
        <Menu scrollFn={scrollToSection} />
        <HeroSection />
        <div className="lg:pl-40 ">
          <div className="px-6 lg:px-16">
            <AboutSection ref={aboutRef} scrollFn={scrollToSection} />
            <ExperienceSection ref={experienceRef} />
            <ContactSection ref={contactRef} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
