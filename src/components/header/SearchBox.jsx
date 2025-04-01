import React from "react";
import Typed from "typed.js";

export default function SearchBox() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Search for a movie...",
        "Search for a TV show...",
        "Search for a celebrity...",
      ],
      typeSpeed: 40,
      loop: true,
      attr: "placeholder",
      smartBackspace: false,
      backSpeed: 10,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section className="mt-12">
      <div className="relative">
        <input
          ref={el}
          id="search"
          type="text"
          className="w-full rounded-md border-2 border-gray-800 bg-gray-900 py-3 pl-4 text-lg text-fuchsia-200 caret-fuchsia-500 outline-none placeholder:text-gray-600"
          placeholder=""
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
