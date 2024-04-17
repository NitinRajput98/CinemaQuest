import React from "react";
import { useSelector } from "react-redux";
import useGetVideosData from "../hooks/useGetVideosData";

const VideoBackground = ({ movieID }) => {
  useGetVideosData(movieID);
  const movieTrailerID = useSelector((store) => store.movies.movieTrailerID);
  return (
    <div className="">
      {movieTrailerID ? (
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${movieTrailerID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${movieTrailerID}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      ) : (
        <div className="animate-pulse">
          <div className="w-full aspect-video bg-gray-600"></div>
        </div>
      )}
    </div>
  );
};

export default VideoBackground;
