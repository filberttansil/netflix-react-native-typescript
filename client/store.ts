import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "./features/movie/movieSlice";
import { authReducer } from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    auth: authReducer,
  },
});

// Extract return yang di return dari function store.getState menggunakan ReturnType
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
