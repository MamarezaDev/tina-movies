import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiKey, baseUrl, imgBaseUrl } from "../../ApiConfig";

export default function Movie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  async function loadMovie() {
    const { data } = await axios.get(`${baseUrl}movie/${id}?${apiKey}`);
    setMovie(data);
  }

  useEffect(() => {
    loadMovie();
  }, [id]);

  return (
    <div className="container md:-translate-y-64">
      {movie ? (
        <div className="mx-auto w-full md:m-0">
          <h3 className="text-2xl">{`${movie.title} ${movie.release_date.slice(0, 4)}`}</h3>
          <img
            className="w-full rounded-md md:w-80"
            src={`${imgBaseUrl}w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ) : (
        <p className="text-center text-gray-600">loading...</p>
      )}
    </div>
  );
}
