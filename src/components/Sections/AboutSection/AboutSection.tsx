import React, { forwardRef, HTMLProps } from "react";
import "../Sections.scss";
import Orbit from "../../Orbit";

interface SectionProps extends HTMLProps<HTMLDivElement> {
  scrollFn: (section: string) => void;
}

const AboutSection = forwardRef<HTMLDivElement, SectionProps>(({ scrollFn, ...props }, ref) => {
  const header = "ABOUT ME";
  return (
    <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-8 mb-32" ref={ref}>
      <div>
        {header.split("").map((char, index) => (
          <header key={index} className="section inline text-5xl md:text-6xl lg:text-7xl tracking-widest font-light">
            {char}
          </header>
        ))}

        {/* <div className="divider w-full mt-2 mb-4 text-3xl" /> */}

        <p className="tracking-wide">
          Welcome to the personal website of <span className="text-[#ff8900] font-medium">Luc Dang.</span>
        </p>
        <p className="tracking-wide my-5">
          I am a graduate of California State University with a BS in Computer Science. <br />
          Currently, I am working as a software engineer with heavy interest in web development and UI/UX design.
          Outside of development I am passionate about music and getting better at drumming.
        </p>
        <p className="tracking-wide">
          I am always excited for new opportunities in the web development space, so if you have any in mind, please{" "}
          <button className="text-[#ff8900] font-medium" onClick={() => scrollFn("contact")}>
            contact me!
          </button>
        </p>
      </div>
      <div className="relative min-w-[250px] lg:min-w-[500px] min-h-[500px]">
        <Orbit />
      </div>
    </div>
  );
});

export default AboutSection;
