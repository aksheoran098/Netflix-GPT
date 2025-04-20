import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

import { useDispatch, useSelector } from "react-redux";
import { addMainMovie, addTrailerVideo } from "../utils/moviesSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { useInView } from "react-intersection-observer";
import setTrailer from "../hooks/setTrailer";

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

    const trailer = await setTrailer(movie.id);
    dispatch(addTrailerVideo(trailer));

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
      className=" text-white min-w-40  mx-2 mb-4 border-zinc-400 cursor-pointer  overflow-hidden "
      onClick={clickHandler}
      ref={ref}
    >
      {inView && (
        <img
          src={IMG_CDN_URL + movie.poster_path}
          alt="Movie Card *Can't load Image* TMDB Free trial Rate Limit Exceeded"
          className="object-cover w-full h-[85%]  rounded-lg"
        />
      )}
      <p className="  truncate ">{movie.title}</p>
    </div>
  );
};

export default MovieCard;
