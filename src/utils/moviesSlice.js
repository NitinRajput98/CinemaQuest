import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailerID: null,
  },
  reducers: {
    addNowPlaingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailerID: (state, action) => {
      state.movieTrailerID = action.payload;
    },
  },
});

export const { addNowPlaingMovies, addMovieTrailerID } = moviesSlice.actions;
export default moviesSlice.reducer;
