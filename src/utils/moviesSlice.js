import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: { nowPlayingMovies: null, mainMovie: null },
  reducers: {
    addMainMovie: (state, action) => {
      console.log("mainMovie added in ----------- Store");

      state.mainMovie = action.payload;
    },
    addTrailerVideo: (state, action) => {
      console.log("Trailer state updated ------------Store ");

      state.trailerVideo = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addRomComHindiMovies: (state, action) => {
      state.romComHindiMovies = action.payload;
    },

    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addMainMovie,
  setIsPlaying,
  addRomComHindiMovies,
} = moviesSlice.actions;
const moviesReducer = moviesSlice.reducer;
export default moviesReducer;
