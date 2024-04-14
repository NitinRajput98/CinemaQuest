import { useEffect } from "react";
import { addNowPlaingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addNowPlaingMovies(data.results));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
