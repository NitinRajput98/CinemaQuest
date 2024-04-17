import { useSelector } from "react-redux";
import { IMAGE_CDN_URL } from "../utils/constants";

const GPTSearchResultsContainer = () => {
  const isLoading = useSelector((store) => store.config.isLoading);
  const movies = useSelector((store) => store.config.searchResults);
  return (
    <>
      {!isLoading ? (
        <div className="flex flex-wrap bg-black w-[95%] m-auto mt-4 h-screen">
          {
            movies &&
              // <div className="flex flex-wrap bg-black w-[95%] border-2 border-white m-auto h-screen">
              // {
              movies.map((movie) => {
                if (movie.poster_path)
                  return (
                    <div className="p-2 w-40 bg-black">
                      <img
                        className="rounded-lg"
                        src={`${IMAGE_CDN_URL}${movie.poster_path}`}
                      ></img>
                    </div>
                  );
              })
            // }
            // </div>
          }
        </div>
      ) : (
        <div className="animate-pulse p-2 flex-wrap bg-black flex">
          <div className="animate-pulse flex flex-wrap bg-black w-[95%] m-auto mt-4 h-screen">
            <div className="w-40 p-2 m-2 h-52 bg-slate-800 rounded-lg"></div>
            <div className="w-40 p-2 m-2 h-52 bg-slate-800 rounded-lg"></div>
            <div className="w-40 p-2 m-2 h-52 bg-slate-800 rounded-lg"></div>
            <div className="w-40 p-2 m-2 h-52 bg-slate-800 rounded-lg"></div>
            <div className="w-40 p-2 m-2 h-52 bg-slate-800 rounded-lg"></div>
            <div className="w-40 p-2 m-2 h-52 bg-slate-800 rounded-lg"></div>
            <div className="w-40 p-2 m-2 h-52 bg-slate-800 rounded-lg"></div>
            <div className="w-40 p-2 m-2 h-52 bg-slate-800 rounded-lg"></div>
            <div className="w-40 p-2 m-2 h-52 bg-slate-800 rounded-lg"></div>
            <div className="w-40 p-2 m-2 h-52 bg-slate-800 rounded-lg"></div>
            <div className="w-40 p-2 m-2 h-52 bg-slate-800 rounded-lg"></div>
            <div className="w-40 p-2 m-2 h-52 bg-slate-800 rounded-lg"></div>
            <div className="w-40 p-2 m-2 h-52 bg-slate-800 rounded-lg"></div>
            <div className="w-40 p-2 m-2 h-52 bg-slate-800 rounded-lg"></div>
            <div className="w-40 p-2 m-2 h-52 bg-slate-800 rounded-lg"></div>
            <div className="w-40 p-2 m-2 h-52 bg-slate-800 rounded-lg"></div>
            <div className="w-40 p-2 m-2 h-52 bg-slate-800 rounded-lg"></div>
            <div className="w-40 p-2 m-2 h-52 bg-slate-800 rounded-lg"></div>
            <div className="w-40 p-2 m-2 h-52 bg-slate-800 rounded-lg"></div>
            <div className="w-40 p-2 m-2 h-52 bg-slate-800 rounded-lg"></div>
            <div className="w-40 p-2 m-2 h-52 bg-slate-800 rounded-lg"></div>
            <div className="w-40 p-2 m-2 h-52 bg-slate-800 rounded-lg"></div>
            <div className="w-40 p-2 m-2 h-52 bg-slate-800 rounded-lg"></div>
            <div className="w-40 p-2 m-2 h-52 bg-slate-800 rounded-lg"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default GPTSearchResultsContainer;
