import React, { useState } from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const menuItems = [
  { path: "/movies", text: "MOVIES" },
  { path: "/tv", text: "TV SHOWS" },
  { path: "/people", text: "PEOPLE" },
  { path: "/more", text: "MORE" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function activeClass({ isActive }) {
    return isActive
      ? "text-fuchsia-400"
      : "transition-all duration-100 hover:text-fuchsia-200";
  }

  return (
    <>
      <nav className="flex items-center justify-between bg-gray-900 p-4 md:container md:items-baseline md:bg-transparent">
        <div className="flex items-baseline">
          <Logo setIsMenuOpen={setIsMenuOpen} />
          <ul className="ml-6 hidden gap-5 text-sm md:flex lg:ml-16 lg:gap-8 lg:text-base">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} className={activeClass}>
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-5 text-sm uppercase lg:gap-8 lg:text-base">
            <li>
              <NavLink
                to="/login"
                className="transition-all duration-100 hover:text-fuchsia-200"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                className="rounded-md bg-linear-to-r from-fuchsia-600 to-pink-600 px-5 py-3 font-medium transition-all duration-200 hover:from-fuchsia-500"
                to="/signup"
              >
                Sign Up
              </NavLink>
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
          {menuItems.map((item) => (
            <li
              key={item.path}
              onClick={() => {
                setIsMenuOpen(false);
                document.querySelector("#menu").className = "menu icon right-1";
              }}
            >
              <NavLink to={item.path} className={activeClass}>
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>

        <div>
          <ul className="mt-5 flex justify-center gap-5 border-t-1 border-gray-700 pt-9 uppercase">
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink
                className="rounded-md bg-linear-to-r from-fuchsia-600 to-pink-600 px-4 py-3 font-medium"
                to="/signup"
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
