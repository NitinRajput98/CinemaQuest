import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addSearchResults } from "../utils/configSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsLoading } from "../utils/configSlice";
import Loader from "./Loader";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.config.isLoading);
  const searchInput = useRef(null);
  const handleSearch = () => {
    dispatch(toggleIsLoading());
    getMovieData(searchInput.current.value);
  };

  const getMovieData = async (searchString) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchString}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    const data = await response.json();
    dispatch(addSearchResults(data.results));
    dispatch(toggleIsLoading());
  };

  return (
    <div className="flex items-center space-x-2 mx-auto w-[70%]">
      {/* This div arranges the button and the search bar in a row with space between them */}
      <div className="flex items-center pl-4 pr-2 py-2 bg-white border border-gray-300 rounded-full w-[90%]">
        <svg
          className="w-5 h-5 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          className="px-2 py-1 w-full text-black focus:outline-none  text-lg"
          autoFocus
          onKeyDown={(e) => {
            if (e.key !== "Enter") return;
            handleSearch();
          }}
          type="text"
          ref={searchInput}
          placeholder="Type here to search..."
        />
      </div>
      {isLoading ? (
        <div className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-52 text-xl h-14 animate-pulse">
          <Loader
            styles={"animate-spin rounded-full w-8 h-8 border-b-2 border-white"}
          />
        </div>
      ) : (
        <button
          className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-52 text-xl h-14"
          onClick={handleSearch}
        >
          Search
        </button>
      )}
    </div>
  );
};

export default GPTSearchBar;
