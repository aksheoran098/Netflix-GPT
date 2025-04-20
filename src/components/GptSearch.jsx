import React from "react";
import { useSelector } from "react-redux";
import GptSearchBar from "./gptSearchBar";
import GptMovieSuggestion from "./gptMovieSuggestion";
import { BACKGROUND_IMAGE } from "../utils/constants";

const GptSearch = () => {
  console.log("GPT loaded");

  const isVisible = useSelector((state) => state.gpt.showGptSearch);
  if (!isVisible) {
    return;
  }
  return (
    <div className="">
      <div className="fixed -z-10  ">
        <img src={BACKGROUND_IMAGE} alt="BACKGROUND_IMAGE" className="" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
