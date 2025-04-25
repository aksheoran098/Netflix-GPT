import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);
  const romComHindiMovies = useSelector(
    (store) => store.movies?.romComHindiMovies
  );
  // Memoize reversed popularMovies to avoid recomputation unless the array changes

  return (
    <div className="  bg-black ">
      <div className="relative pt-2  sm:-mt-10 md:-mt-20 lg:-mt-36 xl:-mt-44 2xl:-mt-52">
        <MovieList title="Now Playing" movies={nowPlayingMovies} />
        <MovieList title="Popular Hindi" movies={popularMovies} />
        <MovieList title="Upcoming Movies" movies={upcomingMovies} />
        <MovieList title="RomCom Hindi" movies={romComHindiMovies} />
        <MovieList title="Top Rated" movies={topRatedMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
