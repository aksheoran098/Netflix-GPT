import React, { useMemo } from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);
  // Memoize reversed popularMovies to avoid recomputation unless the array changes

  return (
    <div className="  bg-black ">
      <div className="relative -mt-[15%]">
        <MovieList title="Now Playing" movies={nowPlayingMovies} />
        <MovieList title="Popular Hindi" movies={popularMovies} />
        <MovieList title="Upcoming Movies" movies={upcomingMovies} />
        <MovieList title="Top Rated" movies={topRatedMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
