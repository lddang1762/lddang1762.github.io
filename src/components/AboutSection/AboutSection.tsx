import React, { forwardRef, HTMLProps } from "react";
import "./AboutSection.scss";
import Orbit from "../Orbit";

interface SectionProps extends HTMLProps<HTMLDivElement> {
  scrollFn: (section: number) => void;
}

const AboutSection = forwardRef<HTMLDivElement, SectionProps>(({ scrollFn, ...props }, ref) => {
  const greeting = "GREETINGS,";
  return (
    <div className="flex mx-auto w-4/5 gap-8 mb-32" ref={ref}>
      <div className="lg:basis-3/5">
        {greeting.split("").map((char, index) => (
          <header key={index} className="typewriter inline text-5xl tracking-widest font-light">
            {char}
          </header>
        ))}

        <div className="h-[2px] w-3/4 bg-gradient-to-r from-gray-400 mt-8 mb-5" />
        <p className="text-xl tracking-wide font-light">Welcome to the personal website of Luc Dang.</p>
        <p className="text-xl tracking-wide font-light my-5">
          I am a graduate of California State University with a BS in Computer Science. <br />
          Currently, I am working as a software engineer with heavy interest in web development and UI/UX design.
          Outside of development I am passionate about music and getting better at drumming.
        </p>
        <p className="text-xl tracking-wide font-light">
          I am always excited for new opportunities in the web development space, so if you have any in mind, please{" "}
          <button className="text-orange-500 font-medium" onClick={() => scrollFn(3)}>
            contact me!
          </button>
        </p>
        <div className="h-[2px] w-3/4 bg-gradient-to-r from-gray-400 mt-5 mb-2" />
      </div>
      <div className="relative lg:flex lg:basis-2/5 justify-center items-center">
        <Orbit />
      </div>
    </div>
  );
});

export default AboutSection;
