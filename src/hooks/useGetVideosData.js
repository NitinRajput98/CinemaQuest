import { addMovieTrailerID } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useGetVideosData = (movieID) => {
  const dispatch = useDispatch();
  const movieTrailerID = useSelector((store) => store.movies.movieTrailerID);
  const getVideosData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,
        API_OPTIONS
      );
      const data = await response.json();
      const movieTrailers = data.results.filter(
        (obj) => obj.type === "Trailer"
      );
      const movieTrailerObj = movieTrailers
        ? movieTrailers[0]
        : data.results[0];
      dispatch(addMovieTrailerID(movieTrailerObj.key));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!movieTrailerID) getVideosData();
  }, []);
};

export default useGetVideosData;
