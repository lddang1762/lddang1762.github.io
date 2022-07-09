import React from "react";
import { ReactComponent as Email } from "../../icons/email.svg";
import { ReactComponent as Github } from "../../icons/github.svg";
import { ReactComponent as LinkedIn } from "../../icons/linkedin.svg";

export default function Footer() {
  return (
    <div className="w-full text-center">
      <div className="flex justify-center">
        <a
          className="h-12 fill-white mx-5 hover:fill-orange-500 hover:scale-110 transition-transform ease-out"
          href="mailto:lddang1762@gmail.com"
        >
          <Email className="h-12" />
        </a>
        <a
          className="h-12 fill-white mx-5 hover:fill-orange-500 hover:scale-110 transition-transform ease-out"
          href="https://github.com/lddang1762"
          target="_blank"
          rel="noreferrer"
        >
          <Github className="h-12" />
        </a>
        <a
          className="h-12 fill-white mx-5 hover:fill-orange-500 hover:scale-110 transition-transform ease-out"
          href="https://www.linkedin.com/in/luc-dang/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn className="h-12" />
        </a>
      </div>
      <p className="pt-5">Designed and developed by Luc Dang</p>
    </div>
  );
}
