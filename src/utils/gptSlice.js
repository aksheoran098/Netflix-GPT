import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    aiMovieNames: null,
    aiMovieResults: null,
    isGptLoading: false,
    gptSearchText: "",
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      console.log("toogleGPTview updated ---------- State");

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
    setGptSearchText: (state, action) => {
      state.gptSearchText = action.payload;
    },
  },
});

export const {
  toggleGptSearchView,
  addAiMovieResults,
  setIsGptLoading,
  setGptSearchText,
} = gptSlice.actions;

const gptSliceReduce = gptSlice.reducer;
export default gptSliceReduce;
