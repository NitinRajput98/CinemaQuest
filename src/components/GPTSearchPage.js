import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTSearchResultsContainer from "./GPTSearchResultsContainer";

const GPTSearchPage = () => {
  return (
    <div className="w-full h-full text-white pt-[6%] text-center bg-black">
      <div className="mx-auto max-w-2xl text-center p-4">
        <h2 className="text-4xl font-bold text-gray-50">
          Discover Your Next Favorite Movie
        </h2>
        <p className="text-gray-300 mt-2">
          Looking for your next movie to watch? Just type a genre, favorite
          actor, director, or even a mood into the search bar below and discover
          a plethora of films suited to your taste. Start your movie adventure
          now!
        </p>
      </div>

      <GPTSearchBar />
      <GPTSearchResultsContainer />
    </div>
  );
};

export default GPTSearchPage;
