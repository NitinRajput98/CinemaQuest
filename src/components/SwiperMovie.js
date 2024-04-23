// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IMAGE_CDN_URL } from "../utils/constants";
import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const SwiperMovie = ({ title, movies }) => {
  return (
    <div className="mx-2">
      <h1 className="text-white text-2xl my-4">{title}</h1>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={7}
        navigation={true}
      >
        {movies &&
          movies.map((movie, index) => (
            <SwiperSlide
              key={movie.id}
              virtualIndex={index}
              className="w-44 h-56 rounded-3xl transition duration-100 ease-in-out transform hover:scale-105 hover:rounded-lg"
            >
              <img
                src={`${IMAGE_CDN_URL}${movie.poster_path}`}
                alt={movie.title}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SwiperMovie;
