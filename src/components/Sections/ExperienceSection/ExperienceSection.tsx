import React, { forwardRef, HTMLProps } from "react";
import "../Sections.scss";
import Timeline from "../../Timeline";

const ExperienceSection = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>((props, ref) => {
  const header = "EXPERIENCE";
  return (
    <div className="mb-24" ref={ref}>
      <div className="flex text-center lg:text-left">
        {header.split("").map((char, index) => (
          <header key={index} className="section inline text-5xl md:text-6xl lg:text-7xl tracking-widest font-light">
            {char}
          </header>
        ))}
      </div>
      <Timeline />
    </div>
  );
});

export default ExperienceSection;
