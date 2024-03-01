import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { MovieState, MovieType } from "../../types/movieTypes";
import axios, { AxiosResponse } from "axios";

const initialState: MovieState = {
  sections: [
    { title: "Top 10 TV Shows In Indonesia", movies: [] },
    { title: "Action", movies: [] },
    { title: "Thriller", movies: [] },
    { title: "Anime", movies: [] },
    { title: "Sci-fi", movies: [] },
  ],
  movies: [],
  loading: false,
  error: undefined,
};
const API = "http://localhost:3000/pub/movies";
export const fetchMovies = createAsyncThunk<MovieType[], void>(
  "movie/fetchMovies",
  async () => {
    const response = await axios.get(API);
    return response.data;
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchMovies.fulfilled,
      (state, action: PayloadAction<MovieType[]>) => {
        state.movies = action.payload;
        state.sections.forEach((section) => {
          return (section.movies = action.payload);
        });
        state.loading = false;
        state.error = "";
      }
    );
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false;
      state.movies = [];
      state.error = action.error.message;
    });
  },
});

export const { setMovies } = movieSlice.actions;

export const selectMovieState = (state: RootState) => {
  return state.movies;
};

export const movieReducer = movieSlice.reducer;
