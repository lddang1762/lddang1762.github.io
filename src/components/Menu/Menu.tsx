import React, { useState } from "react";

export default function Menu({ scrollFn, onCollapse, ...props }: { scrollFn: any; onCollapse: any }) {
  const links = ["home", "about me", "experience", "contact"];
  return (
    <menu className="w-40 hidden lg:flex flex items-center justify-center fixed left-0 top-0 h-screen bg-gray-800/20 hover:bg-gray-800 transition-all">
      <div className="text-white text-xl px-5 py-12 ">
        {/* <button onClick={onCollapse}>collapse</button> */}
        {links.map((link, index) => {
          return (
            <a
              className="block capitalize font-medium text-gray-500 hover:text-[#bbff00] py-2"
              key={link}
              href={`#${link}`}
              onClick={() => scrollFn(link)}
            >
              {link}
            </a>
          );
        })}
      </div>
    </menu>
  );
}
