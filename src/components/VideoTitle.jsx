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
      <div className="h-[100%] w-[50%] pt-[11%]  md:pt-[13%] lg:pt-[15%]  pl-10 bg-gradient-to-r  from-black  text-white ">
        <h1 className="font-bold text-sm sm:text-base md:text-xl lg:text-3xl xl:text-5xl">
          {mainMovie?.title.length <= 40
            ? mainMovie.title
            : mainMovie.title.substring(0, 40) + "..."}
          {console.log(mainMovie?.title.length)}
        </h1>
        <p className="text-sm text-gray-400">
          {mainMovie?.release_date} | ⭐ {mainMovie?.vote_average.toFixed(1)}
        </p>
        <p
          className={` text-xs sm:text-sm   xl:text-base   w-[70%] py-4  max-h-[45%]  overflow-hidden ${
            showMore ? "text-gray-200" : "text-gray-500"
          } `}
        >
          {mainMovie?.overview}
        </p>
        <div className="text-xs  sm:text-sm xl:text-base  mt-2 lg:mt-3 xl:mt-4">
          <button
            className=" rounded-md  sm:rounded-lg cursor-pointer px-2 mx-1 sm:p-2 sm:px-9 font-bold text-black bg-white hover:bg-white/85 transition duration-200 "
            onClick={() => dispatch(setIsPlaying(true))}
          >
            ▶ Play
          </button>
          <button
            className=" sm:rounded-lg cursor-pointer px-2 mx-1 sm:mx-4 sm:p-2 sm:px-5  text-gray-300  bg-gray-500/40 "
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
