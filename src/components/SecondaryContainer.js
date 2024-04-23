import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import SwiperMovie from "./SwiperMovie";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="-mt-52 mx-16 relative z-20">
        {/* <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} /> */}

        <SwiperMovie title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <SwiperMovie title={"Popular"} movies={movies.popularMovies} />
        <SwiperMovie title={"Top Rated"} movies={movies.topRatedMovies} />
        <SwiperMovie title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      </div>
    )
  );
};

export default SecondaryContainer;
