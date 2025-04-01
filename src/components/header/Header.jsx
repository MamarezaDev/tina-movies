import React, { useState } from "react";
import Navigation from "./Navigation";
import SearchBox from "./SearchBox";
import Socials from "./Socials";
import HeaderSlider from "./HeaderSlider";

export default function Header() {
  const [bg, setBg] = useState("/bg.jpg");

  return (
    <header
      className="relative h-auto pb-8 md:h-screen md:py-12"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(3, 7, 18, 0.98), rgba(3, 7, 18, 0.94), rgba(56, 3, 59, 0.92), rgba(3, 7, 18, 0.94))`,
      }}
    >
      <img
        id="bg"
        className="absolute top-0 -z-1 h-full w-full object-cover object-center transition-all duration-200"
        src={bg}
        alt="bg"
      />
      <Navigation />
      <div className="container">
        <SearchBox />
        <Socials />
        <HeaderSlider setBg={setBg} />
      </div>
    </header>
  );
}
