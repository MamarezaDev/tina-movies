import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import MovieCard from "../common/MovieCard";

const images = [
  "https://static.cdn.asset.filimo.com/flmt/mov_150250_187816.jpg",
  "https://static.cdn.asset.filimo.com/flmt/mov_146702_156504.jpg",
  "https://static.cdn.asset.filimo.com/flmt/mov_srl_30352_359-b.jpg",
  "https://static.cdn.asset.filimo.com/flmt/mov_srl_30442_323-b.jpg",
  "https://static.cdn.asset.filimo.com/flmt/mov_153502_270256.jpg",
];

export default function HeaderSlider({ setBg }) {
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
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <a
              href="#"
              onMouseEnter={() => {
                document.getElementById("bg").style.opacity = "0.2";

                setTimeout(() => {
                  document.getElementById("bg").style.opacity = "1";
                  setBg(img);
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
              <MovieCard img={img} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
