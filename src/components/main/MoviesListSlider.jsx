import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../common/MovieCard";

// Import Swiper styles
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
          pagination: false,
          slidesPerView: 3,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        768: {
          pagination: false,
          slidesPerView: 4,
          spaceBetween: 10,
        },
        // when window width is >= 640px
        1024: {
          pagination: false,
          slidesPerView: 6,
          spaceBetween: 20,
        },
      }}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <MovieCard movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
