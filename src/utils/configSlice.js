import { createSlice } from "@reduxjs/toolkit";

const config = createSlice({
  name: "config",
  initialState: {
    isGPTSearchPage: false,
    searchResults: null,
    isLoading: false,
  },
  reducers: {
    toggleGPTSearchPage: (state) => {
      state.isGPTSearchPage = !state.isGPTSearchPage;
    },
    addSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    toggleIsLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { toggleGPTSearchPage, addSearchResults, toggleIsLoading } =
  config.actions;
export default config.reducer;
