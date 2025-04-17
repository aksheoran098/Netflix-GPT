import React from "react";
import { setIsPlaying } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const VideoTitle = ({ title, overview }) => {
  const dispatch = useDispatch();
  return (
    <div className="pt-[20%] px-18  absolute bg-gradient-to-r from-black text-white w-full aspect-video">
      <h1 className="font-bold text-5xl">{title}</h1>
      <p className="w-[35%] py-4 text-gray-300/70 max-h-[50%] overflow-hidden">
        {overview}
      </p>
      <div>
        <button
          className="rounded-lg cursor-pointer p-2 px-9 font-bold text-black bg-white hover:bg-white/85 "
          onClick={() => dispatch(setIsPlaying(true))}
        >
          ▶ Play
        </button>
        <button className=" rounded-lg cursor-pointer mx-4 p-2 px-5  text-gray-300  bg-gray-500/40 ">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
