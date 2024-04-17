import { IMAGE_CDN_URL } from "../utils/constants";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline"; // Correct import for icons
import React, { useRef, useState } from "react";
import MovieModal from "./MovieModal";
const MovieList = ({ title, movies }) => {
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const scrollRef = useRef(null);
  const hoverTimeout = useRef(null);

  const handleMouseEnter = (movie) => {
    // Clear any existing timeouts to prevent unwanted modal pop-ups
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
    }
    // Set a new timeout to open the modal after 1 second
    hoverTimeout.current = setTimeout(() => {
      setHoveredMovie(movie);
    }, 1500); // 1000 milliseconds = 1 second
  };

  const handleMouseLeave = () => {
    // Clear the timeout if the user moves the mouse away before 1 second
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
    }
    setHoveredMovie(null);
  };

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="px-2">
      <h1 className="text-white text-2xl">{title}</h1>
      <div className="flex items-center space-x-2 overflow-hidden">
        <button
          onClick={() => scroll(-200)}
          className="p-2 rounded-full bg-black bg-opacity-0 hover:bg-gradient-to-r from-zinc-900 focus:outline-none focus:ring-2 focus:ring-black"
        >
          <ChevronLeftIcon className="h-6 w-6 text-red-700" />
        </button>
        <div
          ref={scrollRef}
          className="flex  scroll-smooth scrollbar-hide whitespace-nowrap overflow-x-hidden"
          // style={{ width: "80vw" }}
          // Limiting the view width
        >
          {movies &&
            movies.map((movie, index) => (
              <div
                key={index}
                className="inline-block p-2 mr-2 min-w-52 cursor-pointer overflow-hidden rounded-lg"
                onMouseEnter={() => handleMouseEnter(movie)}
                onMouseLeave={handleMouseLeave}
                // style={{ minWidth: "160px" }}
              >
                {/* Ensuring each card has a minimum width */}
                <img
                  src={`${IMAGE_CDN_URL}${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full rounded-lg transition duration-100 ease-in-out transform hover:scale-105"
                />
              </div>
            ))}
        </div>
        <button
          onClick={() => scroll(200)}
          className="p-2 rounded-full bg-black bg-opacity-0 hover:bg-gradient-to-r from-zinc-900 focus:outline-none focus:ring-2 focus:ring-black"
        >
          <ChevronRightIcon className="h-6 w-6 text-red-700" />
        </button>
        {hoveredMovie && (
          <MovieModal
            movie={hoveredMovie}
            onClose={() => setHoveredMovie(null)}
          />
        )}
      </div>
    </div>
  );
};

export default MovieList;
