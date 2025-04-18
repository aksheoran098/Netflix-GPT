import { useDispatch } from "react-redux";
import {
  addMainMovie,
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    dispatch(addMainMovie(json.results[0]));
    dispatch(addNowPlayingMovies(json.results));
  };

  const getPopularMovies = async () => {
    const url =
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc&with_original_language=hi";
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };

  const getTopRatedMovies = async () => {
    const url = "https://api.themoviedb.org/3/movie/top_rated?page=1";
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  const getUpcomingMovies = async () => {
    const url = "https://api.themoviedb.org/3/movie/upcoming?page=1";
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
    getPopularMovies();
    getTopRatedMovies();
    getUpcomingMovies();
  }, []);
};

export default useMovies;
