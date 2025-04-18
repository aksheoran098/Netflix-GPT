import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

import { useDispatch, useSelector } from "react-redux";
import { addMainMovie, addTrailerVideo } from "../utils/moviesSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { useInView } from "react-intersection-observer";

const MovieCard = ({ movie }) => {
  if (!movie.poster_path) return;

  const dispatch = useDispatch();
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const clickHandler = async () => {
    dispatch(addMainMovie(movie));

    if (showGptSearch) {
      dispatch(toggleGptSearchView());
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  return (
    <div
      className=" text-white min-w-48  mx-2 mb-4 border-zinc-400 cursor-pointer  overflow-hidden "
      onClick={clickHandler}
      ref={ref}
    >
      {inView && (
        <img
          src={IMG_CDN_URL + movie.poster_path}
          alt="Movie Card"
          className="object-cover w-full md:h-[250px] border-[1px] rounded-xl"
        />
      )}
      <p className="  truncate ">{movie.title}</p>
    </div>
  );
};

export default MovieCard;
