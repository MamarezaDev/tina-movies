import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../common/MovieCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function MoviesListSlider({ movies }) {
  return (
    <Swiper
      pagination={(true, { clickable: true })}
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      loop
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        // when window width is >= 640px
        1024: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
      }}
    >
      {movies.map((movies, i) => (
        <SwiperSlide key={i}>
          <a href="#">
            <MovieCard img={movies} />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
