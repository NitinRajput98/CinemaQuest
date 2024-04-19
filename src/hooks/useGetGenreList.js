import { useEffect } from "react";
import { setGenreList } from "../utils/genreSlice";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useGetGenreList = () => {
  const dispatch = useDispatch();
  const genreList = useSelector((store) => store.genre.genreList);
  const getGenreList = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?language=en",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(setGenreList(data.genres));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (!genreList) getGenreList();
  }, []);
};

export default useGetGenreList;
