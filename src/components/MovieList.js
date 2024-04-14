import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-2">
      <h1 className="text-white text-2xl">{title}</h1>
      <div className="flex overflow-x-scroll my-4 ">
        <div className="flex">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
