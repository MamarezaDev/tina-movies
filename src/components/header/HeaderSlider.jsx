import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import MovieCard from "../common/MovieCard";
import { apiKey, baseUrl, imgBaseUrl } from "../../ApiConfig";
import axios from "axios";

export default function HeaderSlider({ setBg }) {
  const [movies, setMovies] = useState([]);

  async function loadMovies() {
    const { data } = await axios.get(`${baseUrl}movie/popular?${apiKey}`);

    setMovies(data.results);
  }

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <section className="mt-10">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
        loop
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              onMouseEnter={() => {
                document.getElementById("bg").style.opacity = "0.2";

                setTimeout(() => {
                  document.getElementById("bg").style.opacity = "1";
                  setBg(`${imgBaseUrl}w780/${movie.backdrop_path}`);
                }, 200);
              }}
              onMouseLeave={() => {
                document.getElementById("bg").style.opacity = "0.2";
                setTimeout(() => {
                  document.getElementById("bg").style.opacity = "1";
                  setBg("/bg.jpg");
                }, 200);
              }}
            >
              <MovieCard movie={movie} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
