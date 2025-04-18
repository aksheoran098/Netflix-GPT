import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: { nowPlayingMovies: null },
  reducers: {
    addMainMovie: (state, action) => {
      state.mainMovie = action.payload;
    },
    addTrailerVideo: (state, action) => {
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
} = moviesSlice.actions;
const moviesReducer = moviesSlice.reducer;
export default moviesReducer;
