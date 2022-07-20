import React from "react";
import { ReactComponent as Email } from "../../icons/email.svg";
import { ReactComponent as Github } from "../../icons/github.svg";
import { ReactComponent as LinkedIn } from "../../icons/linkedin.svg";

export default function Footer() {
  return (
    <div className="w-full text-center pb-6">
      <div className="flex justify-center">
        <a
          className="h-12 flex fill-white mx-5 hover:fill-[#86b504] active:scale-90 hover:scale-110 transition-transform ease-out"
          href="mailto:lddang1762@gmail.com"
        >
          <Email className="h-8 w-8 my-auto" />
        </a>
        <a
          className="h-12 flex fill-white mx-5 hover:fill-[#86b504] active:scale-90 hover:scale-110 transition-transform ease-out"
          href="https://github.com/lddang1762"
          target="_blank"
          rel="noreferrer"
        >
          <Github className="h-8 w-8 my-auto" />
        </a>
        <a
          className="h-12 flex fill-white mx-5 hover:fill-[#86b504] active:scale-90 hover:scale-110 transition-transform ease-out"
          href="https://www.linkedin.com/in/luc-dang/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn className="h-8 w-8 my-auto" />
        </a>
      </div>
      <p className="pt-3 tracking-wide text-sm lg:text-base">Designed and developed by Luc Dang</p>
    </div>
  );
}
