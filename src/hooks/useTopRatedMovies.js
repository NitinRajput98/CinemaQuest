import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addTopRatedMovies(data.results));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
