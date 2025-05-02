import React from "react";
import { Link } from "react-router-dom";

export default function Logo({ setIsMenuOpen }) {
  return (
    <Link
      to="/"
      onClick={() => {
        setIsMenuOpen(false);
        document.querySelector("#menu").className = "menu icon right-1";
      }}
    >
      <h1 className="text-3xl font-semibold tracking-widest uppercase">
        <span className="text-fuchsia-500">Tina</span>Movies
      </h1>
      <p className="text-center font-light text-gray-600">Film Review</p>
    </Link>
  );
}
