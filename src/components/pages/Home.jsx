import React, { useEffect, useState } from "react";
import MoviesListSlider from "../main/MoviesListSlider";
import axios from "axios";
import { apiKey, baseUrl } from "../../ApiConfig";

export default function Home() {
  const [movies, setMovies] = useState([]);

  async function loadMovies() {
    const { data } = await axios.get(`${baseUrl}movie/upcoming?${apiKey}`);

    setMovies(data.results);
  }

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div className="container py-8 md:py-20">
      <div className="mb-6 flex items-baseline gap-8">
        <h2 className="text-2xl font-medium">Trending</h2>
        <ul className="hidden gap-6 text-gray-400 md:flex">
          <li>Today</li>
          <li>This Week</li>
        </ul>
        {/* Mobile select menu */}
        <select className="w-[120px] border-b-2 border-gray-800 bg-gray-950 pb-1 text-gray-300 outline-none focus:outline-amber-400 md:hidden">
          <option value="day">Today</option>
          <option value="week">This Week</option>
        </select>
      </div>
      <MoviesListSlider movies={movies} />

      <div className="mt-16 mb-6 flex items-baseline gap-8">
        <h2 className="text-2xl font-medium">What's Popular</h2>
        <ul className="hidden gap-6 text-gray-400 md:flex">
          <li>Movies</li>
          <li>Series</li>
        </ul>
        {/* Mobile select menu */}
        <select className="w-[100px] border-b-2 border-gray-800 bg-gray-950 pb-1 text-gray-300 outline-none focus:outline-amber-400 md:hidden">
          <option value="day">Movies</option>
          <option value="week">Series</option>
        </select>
      </div>
      <MoviesListSlider movies={movies} />
    </div>
  );
}
