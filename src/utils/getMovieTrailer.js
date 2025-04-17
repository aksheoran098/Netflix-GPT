import { useDispatch } from "react-redux";
import { API_OPTIONS } from "./constants";

export const getMovieTrailerData = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
  const data = await fetch(url, API_OPTIONS);
  const json = await data.json();
  const filterData = json.results.filter((video) => video.type === "Trailer");
  return filterData.length ? filterData[0] : json.results[0];
};
