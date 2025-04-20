import { API_OPTIONS } from "../utils/constants";

const setTrailer = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
  const data = await fetch(url, API_OPTIONS);
  const json = await data.json();
  const filterData = json.results.filter((video) => video.type === "Trailer");

  let trailer = filterData.length ? filterData[0] : json.results[0];
  if (!trailer) {
    trailer = { key: "O0pLvZwZKkI" };
  }
  return trailer;
};

export default setTrailer;
