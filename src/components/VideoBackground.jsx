import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieTrailerData } from "../utils/getMovieTrailer";
import { addTrailerVideo, setIsPlaying } from "../utils/moviesSlice";
import useMainMovieVideo from "../hooks/useMovieTrailer";

const VideoBackground = ({}) => {
  useMainMovieVideo();
  const fullScreenFrame = useRef(null);
  const isPlaying = useSelector((state) => state.movies?.isPlaying);
  const trailerVideo = useSelector((state) => state.movies?.trailerVideo);
  const dispatch = useDispatch();

  // Making "fullScreenFrame" in Full Screen Mode
  useEffect(() => {
    if (isPlaying && fullScreenFrame.current) {
      const requestFullscreen =
        fullScreenFrame.current.requestFullscreen ||
        fullScreenFrame.current.mozRequestFullScreen ||
        fullScreenFrame.current.webkitRequestFullscreen ||
        fullScreenFrame.current.msRequestFullscreen;

      if (requestFullscreen) {
        requestFullscreen.call(fullScreenFrame.current);
      }
    }
  }, [isPlaying]);

  // exiting fullScreen on clicking ESCAPE
  useEffect(() => {
    // set isPlaying : false if any of fullScreen is not in use
    const handleFullscreenChange = () => {
      const isFullscreen =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;

      if (!isFullscreen) {
        // Run your custom code here
        dispatch(setIsPlaying(false));
      }
    };
    // browser-specific events that fire when fullscreen state changes.
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      //       When the component unmounts or isPlaying changes (because useEffect depends on it), this cleanup function:
      // Removes all the previously attached event listeners.
      // This prevents memory leaks or multiple event listeners being attached at once, which can cause bugs.
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullscreenChange
      );
    };
  }, []);

  return (
    trailerVideo && (
      <div ref={fullScreenFrame}>
        {isPlaying ? (
          <>
            <iframe
              allowFullScreen
              className=" fixed top-0 left-0 w-full h-full z-50   "
              src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&controls=1&fs=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
            ></iframe>
            <button
              onClick={() => {
                if (document.fullscreenElement) {
                  document.exitFullscreen();
                }
              }}
              className=" z-[10000001] absolute bottom-4 right-4 bg-black/60 text-white px-4 py-2 rounded"
            >
              Exit Fullscreen
            </button>
          </>
        ) : (
          <iframe
            className=" aspect-video  w-full   "
            src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        )}
      </div>
    )
  );
};

export default VideoBackground;
