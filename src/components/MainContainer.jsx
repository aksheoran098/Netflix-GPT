import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const mainMovie = useSelector((state) => state.movies?.mainMovie);
  if (!mainMovie) return;

  return (
    <div>
      <VideoTitle mainMovie={mainMovie} />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
