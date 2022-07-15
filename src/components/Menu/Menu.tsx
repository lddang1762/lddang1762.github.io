import React from "react";

export default function Menu({ scrollFn, ...props }: { scrollFn: any }) {
  const links = ["about me", "experience", "contact"];
  return (
    <div className="sticky top-2/4 left-[7.5%] w-min text-white text-3xl p-6 rounded-lg bg-[#152439]/25 ">
      {links.map((link, index) => {
        return (
          <a
            className="block capitalize text-gray-400 hover:text-white py-2"
            key={link}
            href={`#${link}`}
            onClick={() => scrollFn(index + 1)}
          >
            {link}
          </a>
        );
      })}
    </div>
  );
}
