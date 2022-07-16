import React, { forwardRef, HTMLProps } from "react";
import "../Sections.scss";

const ExperienceSection = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>((props, ref) => {
  const header = "EXPERIENCE";
  return (
    <div className="flex items-center justify-center gap-8 mb-32" ref={ref}>
      <div>
        {header.split("").map((char, index) => (
          <header key={index} className="section inline text-5xl md:text-6xl lg:text-7xl tracking-widest font-light">
            {char}
          </header>
        ))}

        {/* <div className="divider w-full mb-4 text-3xl" /> */}

        <p className="tracking-wide">asdf</p>
      </div>
    </div>
  );
});

export default ExperienceSection;
