import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  console.log("main container");

  return (
    <div>
      <VideoTitle />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
