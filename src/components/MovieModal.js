import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";
import {
  PlayIcon,
  UserAddIcon,
  ThumbUpIcon,
  ArrowCircleDownIcon,
} from "@heroicons/react/outline";
import { useSelector } from "react-redux";

const MovieModal = ({ movie, onClose }) => {
  const genreList = useSelector((store) => store.genre.genreList);
  if (!movie) return null;

  return (
    <div className="fixed inset-0  flex justify-center items-center p-4 transition duration-300 ease-in-out transform scale-200">
      <div className="bg-black  rounded-lg shadow-lg max-w-60 ">
        <img
          src={`${IMAGE_CDN_URL}${movie.backdrop_path}`}
          alt={movie.title}
          className="w-[100%] h-36 object-cover rounded-tl-lg rounded-tr-lg"
        />
        <div className="flex justify-between text-white p-2">
          <div className="flex justify-between">
            <PlayIcon className="w-5" />
            <UserAddIcon className="w-5" />
            <ThumbUpIcon className="w-5" />
          </div>
          <div>
            <ArrowCircleDownIcon className="w-5" />
          </div>
        </div>

        <h2 className="font-bold text-white text-2xl mb-2 p-2">
          {movie.title}
        </h2>
        <div className="flex justify-between p-2">
          <p className="text-green-700">Rating: {movie.vote_average}</p>
          <p className="text-white">{movie.release_date}</p>
        </div>
        <p className="text-white p-2">
          {genreList &&
            genreList
              .filter((item) => {
                if (movie.genre_ids.includes(item.id)) {
                  return item.name;
                }
              })
              .map((obj) => obj.name)
              .join(" • ")}
        </p>
      </div>
    </div>
  );
};

export default MovieModal;
