import React, { forwardRef, HTMLProps } from "react";

const ContactSection = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>((props, ref) => {
  return (
    <div className="flex mx-auto w-4/5 mb-32" ref={ref}>
      <div className="basis-3/5">
        <header className="text-5xl tracking-widest font-light">CONTACT</header>
        <div className="h-[2px] w-3/4 bg-gradient-to-r from-gray-400 mt-8 mb-5" />
        <p className="text-xl tracking-wide font-light">Welcome to the personal website of Luc Dang.</p>
        <p className="text-xl tracking-wide font-light my-5">
          I am a graduate of California State University with a BS in Computer Science. <br />
          Outside of development, I am passionate about music and getting better at drumming. Currently, I am working as
          a software engineer with heavy interest in web development and UI/UX design.
        </p>
        <p className="text-xl tracking-wide font-light">
          Currently, I am working as a software engineer with heavy interest in web development and UI/UX design.
        </p>
        <div className="h-[2px] w-3/4 bg-gradient-to-r from-gray-400 mt-5 mb-2" />
      </div>
      <div className="relative flex basis-2/5 justify-center items-center"></div>
    </div>
  );
});

export default ContactSection;
