import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { HashLoader } from "react-spinners";

const GptMovieSuggestion = () => {
  const isLoading = useSelector((state) => state.gpt.isGptLoading);
  const aiMovieNames = useSelector((state) => state.gpt?.aiMovieNames);
  const aiMovieResults = useSelector((state) => state.gpt?.aiMovieResults);
  if (!aiMovieNames && !isLoading) return;
  return (
    <div className="p-4 m-4 text-white bg-black/85 grid grid-cols-6 place-content-stretch ">
      {isLoading ? (
        <div className="  col-span-6 flex justify-center items-center min-h-[60vh]  ">
          <HashLoader color="#d77005" size={80} speedMultiplier={2} />
        </div>
      ) : (
        aiMovieResults.flatMap((movies, index) => {
          if (movies.length <= 5) {
            return movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ));
          } else {
            return movies
              .filter((movie) => movie.title == aiMovieNames[index])
              .map((movie) => <MovieCard key={movie.id} movie={movie} />);
          }
        })
      )}
    </div>
  );
};

export default GptMovieSuggestion;
