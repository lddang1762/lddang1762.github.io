import React from "react";

export default function Menu() {
  const links = ["about", "experience", "education", "contact"];
  return (
    <div className="sticky top-2/4 left-[7.5%] w-min text-white text-3xl p-6 rounded-lg bg-[#152439]/25 ">
      {links.map((link) => {
        return (
          <a className="block capitalize text-gray-400 hover:text-white py-2" key={link} href={`#${link}`}>
            {link}
          </a>
        );
      })}
    </div>
  );
}
