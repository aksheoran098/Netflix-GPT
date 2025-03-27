import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  return (
    <div className="  bg-black ">
      <div className="relative -mt-[15%]">
        <MovieList title="Now Playing" movies={nowPlayingMovies} />
        <MovieList title="Trending" movies={popularMovies} />
        {/* <MovieList title="Popular" movies={nowPlayingMovies} />
        <MovieList title="Upcoming Movies" movies={nowPlayingMovies} />
        <MovieList title="Horror" movies={nowPlayingMovies} /> */}
      </div>
    </div>
  );
};

export default SecondaryContainer;
