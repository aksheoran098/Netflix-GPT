import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";

const GptMovieSuggestion = () => {
  const { aiMovieNames, aiMovieResults } = useSelector((state) => state.gpt);
  if (!aiMovieNames) return;
  return (
    <div className="p-4 m-4 text-white bg-black/85 grid grid-cols-6 place-content-stretch ">
      {aiMovieResults.flatMap((movies, index) => {
        if (movies.length <= 3)
          return movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ));
        else
          return movies
            .filter((movie) => movie.original_title == aiMovieNames[index])
            .map((movie) => <MovieCard key={movie.id} movie={movie} />);
      })}
    </div>
  );
};

export default GptMovieSuggestion;
