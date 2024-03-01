import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "./features/movie/movieSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});

// Extract return yang di return dari function store.getState menggunakan ReturnType
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
