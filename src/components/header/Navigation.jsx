import React from "react";
import Logo from "./Logo";

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center">
        <Logo />
        <ul className="ml-16 hidden gap-8 uppercase md:flex">
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
      <div>
        <ul className="hidden gap-8 uppercase md:flex">
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a
              className="rounded-4xl bg-fuchsia-600 px-5 py-3 font-medium hover:bg-fuchsia-500"
              href="#"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
