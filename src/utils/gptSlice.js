import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    aiMovieNames: null,
    aiMovieResults: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addAiMovieResults: (state, action) => {
      state.aiMovieNames = action.payload.aiMovieNames;
      state.aiMovieResults = action.payload.aiMovieResults;
    },
  },
});

export const { toggleGptSearchView, addAiMovieResults } = gptSlice.actions;

const gptSliceReduce = gptSlice.reducer;
export default gptSliceReduce;
