import React, { forwardRef, HTMLProps } from "react";

const ContactSection = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>((props, ref) => {
  const header = "CONTACT";
  return (
    <div className="mb-24" ref={ref}>
      <div className="text-center lg:text-left">
        {header.split("").map((char, index) => (
          <header key={index} className="section inline text-5xl md:text-6xl lg:text-7xl tracking-widest font-light">
            {char}
          </header>
        ))}
      </div>
      <p className="tracking-wide">asdf</p>
    </div>
  );
});

export default ContactSection;
