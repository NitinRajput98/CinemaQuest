import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import configReducer from "./configSlice";
import genreReducer from "./genreSlice";
import genreSlice from "./genreSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    config: configReducer,
    genre: genreSlice,
  },
});

export default appStore;
