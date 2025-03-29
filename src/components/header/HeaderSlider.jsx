import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

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
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{ delay: 2000 }}
        loop
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <a href="#">
              <img
                onMouseOver={(e) => {
                  document.getElementById("bg").style.opacity = "0.2";

                  setTimeout(() => {
                    document.getElementById("bg").style.opacity = "1";
                    setBg(e.target.src);
                  }, 200);
                }}
                onMouseLeave={() => {
                  document.getElementById("bg").style.opacity = "0.2";
                  setTimeout(() => {
                    document.getElementById("bg").style.opacity = "1";
                    setBg("/bg.jpg");
                  }, 200);
                }}
                className="rounded-md"
                src={image}
                alt="movie"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
