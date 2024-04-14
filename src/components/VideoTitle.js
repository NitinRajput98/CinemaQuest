import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-80 pl-20 absolute text-white">
      <h1 className="text-3xl font-extrabold">{title}</h1>
      <p className="w-1/3">{overview}</p>
      <div className="flex">
        {/* <button className="w-50 m-2 px-5 h-12 font-medium text-xl text-black bg-white rounded-sm"> */}
        <div className="flex w-55 m-2 px-5 py-2 ml-0 h-12 font-medium text-xl text-black bg-white rounded-sm justify-between cursor-pointer">
          {" "}
          <img
            className="w-6 h-6 mt-1 m-2"
            src="https://cdn.icon-icons.com/icons2/2226/PNG/512/play_icon_134504.png"
            alt="playicon"
          ></img>
          <p>Play</p>
        </div>
        {/* </button> */}
        <button className="w-50 m-2 px-5 h-12 font-medium text-xl text-white bg-gray-500 bg-opacity-50 rounded-sm">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
