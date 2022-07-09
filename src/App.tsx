import React, { useState } from "react";
import "./App.scss";
import Moon from "./icons/moon.png";

import Menu from "./components/Menu";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const [scrollY, setScrollY] = useState(0);
  window.addEventListener("scroll", () => {
    setScrollY(window.scrollY);
  });

  return (
    <>
      <div className="h-custom bg-gradient-to-b from-black to-[#001129] text-white ">
        <div className="stars-fg" style={{ transform: `translateY(-${scrollY * 0.5}px)` }} />
        <div className="stars-mg" style={{ transform: `translateY(-${scrollY * 0.3}px)` }} />
        <div className="stars-bg" style={{ transform: `translateY(-${scrollY * 0.1}px)` }} />
        <img className="mx-auto relative mt-[-350px] rotate-180" src={Moon} alt="moon" />
        <Body />
        {/* <Menu /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
