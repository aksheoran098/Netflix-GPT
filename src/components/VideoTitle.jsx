import React, { useState } from "react";
import { setIsPlaying } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import MoreInfo from "./MoreInfo";

const VideoTitle = () => {
  const [showMore, setShowMore] = useState(false);
  const dispatch = useDispatch();

  const mainMovie = useSelector((state) => state.movies?.mainMovie);
  if (!mainMovie) {
    return;
  }

  return (
    <div className=" absolute w-full aspect-video flex ">
      <div className="h-[100%] w-[50%] pt-[15%]  pl-10 bg-gradient-to-r  from-black  text-white ">
        <h1 className="font-bold text-5xl">{mainMovie?.title}</h1>
        <p className="text-sm text-gray-400">
          {mainMovie?.release_date} | ⭐ {mainMovie?.vote_average.toFixed(1)}
        </p>
        <p
          className={`w-[70%] py-4  max-h-[45%] overflow-hidden ${
            showMore ? "text-gray-200" : "text-gray-500"
          } `}
        >
          {mainMovie?.overview}
        </p>
        <div>
          <button
            className="rounded-lg cursor-pointer p-2 px-9 font-bold text-black bg-white hover:bg-white/85 "
            onClick={() => dispatch(setIsPlaying(true))}
          >
            ▶ Play
          </button>
          <button
            className=" rounded-lg cursor-pointer mx-4 p-2 px-5  text-gray-300  bg-gray-500/40 "
            onClick={() => setShowMore(!showMore)}
          >
            ⓘ {showMore ? "Hide" : "More"} Info
          </button>
        </div>
      </div>
      {showMore && <MoreInfo mainMovie={mainMovie} />}
    </div>
  );
};

export default VideoTitle;
