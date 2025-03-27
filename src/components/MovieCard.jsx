import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className=" min-w-36 md:min-w-48 mx-2 flex h-[250px] border-zinc-400 border-[2px] rounded-xl overflow-hidden">
      <img
        src={IMG_CDN_URL + posterPath}
        alt="Movie Card"
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default MovieCard;
