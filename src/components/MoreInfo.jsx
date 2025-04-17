import React from "react";
import MoreInfoRow from "./MoreInfoRow";
import { GENERE_LIST, LANGUAGE_LIST } from "../utils/constants";

const MoreInfo = ({ mainMovie }) => {
  const {
    original_title,
    release_date,
    original_language,
    genre_ids,
    popularity,
    vote_count,
    vote_average,
    adult,
  } = mainMovie;

  const genres = genre_ids.map((id) => GENERE_LIST[id]).join(", ");
  const language = LANGUAGE_LIST[original_language];

  return (
    <div className=" h-[100%]  w-[50%] pt-[15%] bg-gradient-to-l from-black/90 text-white  ">
      <h2 className="text-xl font-semibold mb-4 text-center">More Info</h2>
      <ul className="text-sm text-gray-200 space-y-2">
        <MoreInfoRow label="Original Title" value={original_title} />
        <MoreInfoRow label="Released On" value={release_date} />
        <MoreInfoRow label="Language" value={language} />
        <MoreInfoRow label="Genres" value={genres} />
        <MoreInfoRow label="Votes" value={vote_count} />
        <MoreInfoRow label="Rating" value={vote_average.toFixed(1) + " ⭐"} />
        <MoreInfoRow label="Popularity" value={popularity} />

        <MoreInfoRow label="Adult" value={adult ? "Yes" : "No"} />
      </ul>
    </div>
  );
};

export default MoreInfo;
