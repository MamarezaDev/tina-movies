import React from "react";

export default function MovieCard({ img }) {
  return (
    <div className="group relative aspect-[2/3] overflow-hidden rounded-md">
      <img className="h-full w-full object-cover" src={img} alt="movie-name" />
      <div className="absolute top-0 flex h-full w-full flex-col justify-end gap-1 bg-linear-to-b from-transparent via-transparent to-black/85 p-6 group-hover:to-black/90">
        <h3 className="text-xl drop-shadow-[0px_0px_4px_#000000b0] transition-all duration-100 group-hover:text-amber-400">
          Lorem, ipsum.
        </h3>
        <div className="flex items-center gap-3">
          <span className="fill-amber-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </span>
          <span className="text-md">
            <span className="text-xl">8</span> / 10
          </span>
        </div>
      </div>
    </div>
  );
}
