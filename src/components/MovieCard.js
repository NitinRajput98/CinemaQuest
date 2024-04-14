import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="pr-4 w-48">
      <img className="" src={`${IMAGE_CDN_URL}${posterPath}`}></img>
    </div>
  );
};

export default MovieCard;
