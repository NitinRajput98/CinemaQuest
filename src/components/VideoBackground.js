import React from "react";
import { useSelector } from "react-redux";
import useGetVideosData from "../hooks/useGetVideosData";

const VideoBackground = ({ movieID }) => {
  useGetVideosData(movieID);
  const movieTrailerID = useSelector((store) => store.movies.movieTrailerID);

  return (
    <div className="">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${movieTrailerID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${movieTrailerID}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
