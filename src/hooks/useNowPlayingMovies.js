import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.nowPlayingMovies);
  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addNowPlayingMovies(data.results));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (!nowPlayingMovies) getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
