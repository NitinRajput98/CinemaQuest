import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GPTSearchPage from "./GPTSearchPage";
import useGetGenreList from "../hooks/useGetGenreList";

const Browse = () => {
  const isGPTSearchPage = useSelector((store) => store.config.isGPTSearchPage);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useGetGenreList();
  return (
    <div className="bg-black">
      <Header />
      {!isGPTSearchPage ? (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      ) : (
        <>
          <GPTSearchPage />
        </>
      )}
    </div>
  );
};

export default Browse;
