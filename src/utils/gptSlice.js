import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    aiMovieNames: null,
    aiMovieResults: null,
    isGptLoading: false,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addAiMovieResults: (state, action) => {
      state.aiMovieNames = action.payload.aiMovieNames;
      state.aiMovieResults = action.payload.aiMovieResults;
      state.isGptLoading = false;
    },
    setIsGptLoading: (state, action) => {
      state.isGptLoading = action.payload;
    },
  },
});

export const { toggleGptSearchView, addAiMovieResults, setIsGptLoading } =
  gptSlice.actions;

const gptSliceReduce = gptSlice.reducer;
export default gptSliceReduce;
