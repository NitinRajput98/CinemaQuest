import { createSlice } from "@reduxjs/toolkit";

const genreSlice = createSlice({
  name: "genre",
  initialState: {
    genreList: null,
  },
  reducers: {
    setGenreList: (state, action) => {
      state.genreList = action.payload;
    },
  },
});

export const { setGenreList } = genreSlice.actions;

export default genreSlice.reducer;
