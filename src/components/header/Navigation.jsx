import React, { useState } from "react";
import Logo from "./Logo";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between bg-gray-900 p-4 md:container md:items-baseline md:bg-transparent">
        <div className="flex items-baseline">
          <Logo />
          <ul className="ml-6 hidden gap-5 text-sm uppercase md:flex lg:ml-16 lg:gap-8 lg:text-base">
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">TV Shows</a>
            </li>
            <li>
              <a href="#">People</a>
            </li>
            <li>
              <a href="#">More</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-5 text-sm uppercase lg:gap-8 lg:text-base">
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a
                className="rounded-md bg-linear-to-r from-fuchsia-600 to-pink-600 px-5 py-3 font-medium transition-all duration-200 hover:from-fuchsia-500"
                href="#"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
        {/* Open and close button */}
        <div className="md:hidden">
          <div
            className="scale-180"
            onClick={() => {
              document.querySelector("#menu").classList.toggle("menu");
              document.querySelector("#menu").classList.toggle("close");
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <div id="menu" className="menu icon right-1"></div>
          </div>
        </div>
      </nav>
      {/* Mobile navigation bar here */}
      <div
        className={`overflow-hidden border-gray-700 bg-gray-900 text-center uppercase transition-all duration-300 md:hidden ${isMenuOpen ? "h-70 border-t-1 py-5" : "h-[0px] border-0 py-0"}`}
      >
        <ul className="flex flex-col gap-4">
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">TV Shows</a>
          </li>
          <li>
            <a href="#">People</a>
          </li>
          <li>
            <a href="#">More</a>
          </li>
        </ul>

        <div>
          <ul className="mt-5 flex justify-center gap-5 border-t-1 border-gray-700 pt-9 uppercase">
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a
                className="rounded-md bg-linear-to-r from-fuchsia-600 to-pink-600 px-4 py-3 font-medium"
                href="#"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
