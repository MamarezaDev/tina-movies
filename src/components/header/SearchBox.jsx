import React from "react";

export default function SearchBox() {
  return (
    <section className="mt-12">
      <div className="relative">
        <input
          type="text"
          className="w-full rounded-md border-2 border-gray-800 bg-gray-900 py-3 pl-4 text-lg text-fuchsia-200 caret-fuchsia-500 outline-none placeholder:text-gray-600"
          placeholder="Search for a movie, TV show or a celebrity you are looking for..."
        />
        <svg
          className="absolute top-1/2 right-4 -translate-y-1/2 fill-fuchsia-200"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </div>
    </section>
  );
}
