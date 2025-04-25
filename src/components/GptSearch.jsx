import React from "react";
import { useSelector } from "react-redux";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BACKGROUND_IMAGE } from "../utils/constants";

const GptSearch = () => {
  const isVisible = useSelector((state) => state.gpt.showGptSearch);
  if (!isVisible) {
    return;
  }
  return (
    <div className="">
      <div className="fixed -z-10  ">
        <img
          src={BACKGROUND_IMAGE}
          alt="BACKGROUND_IMAGE"
          className=" w-screen h-screen min-w-[250px]    "
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
