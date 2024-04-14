import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addPopularMovies(data.results));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
