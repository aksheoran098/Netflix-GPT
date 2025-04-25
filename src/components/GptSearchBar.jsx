import React, { useState } from "react";
import geminiSearch from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  addAiMovieResults,
  setGptSearchText,
  setIsGptLoading,
} from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const gptSearchText = useSelector((state) => state.gpt.gptSearchText);
  const isLoading = useSelector((state) => state.gpt.isGptLoading);

  const [searchText, setSearchText] = useState(gptSearchText);

  const searchMovieTMDB = async (movie) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&page=1`;
    return fetch(url, API_OPTIONS)
      .then((res) => res.json())
      .then((data) => data.results)
      .catch((error) => console.log("TMDN API FAILED HERE :", error));
  };

  const handleGptSearchClick = async (e) => {
    e.preventDefault();
    console.log("clicked...");

    dispatch(setGptSearchText(searchText));
    dispatch(setIsGptLoading(true));

    const aiMovieNames = await geminiSearch(searchText);

    const aiMovieResults = await Promise.all(aiMovieNames.map(searchMovieTMDB));

    dispatch(addAiMovieResults({ aiMovieNames, aiMovieResults }));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        action=""
        className="w-1/2 grid grid-cols-12 bg-black text-white  "
        onSubmit={handleGptSearchClick}
      >
        <input
          type="text"
          placeholder="What would you like to watch today?"
          className=" col-span-9 m-3 p-2 bg-white text-black"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className={` bg-red-600  col-span-3 m-3 ml-0 rounded-lg  cursor-pointer 
            ${isLoading ? "opacity-50 cursor-not-allowed" : " "}`}
          disabled={isLoading}
        >
          {isLoading ? "Searching..." : "Search"}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
