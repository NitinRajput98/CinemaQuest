import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const getUpcomingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addUpcomingMovies(data.results));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (!upcomingMovies) getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
