import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useTrailerVideoInfo = () => {
  const movieId = useSelector((state) => state.movies?.mainMovie?.id);
  if (!movieId) return;
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    let trailer = filterData.length ? filterData[0] : json.results[0];
    if (!trailer) {
      trailer = { key: "O0pLvZwZKkI" };
    }
    console.log(trailer);

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, [movieId]);
};

export default useTrailerVideoInfo;
