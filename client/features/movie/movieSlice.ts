import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { GenreType, MovieState, MovieType } from "../../types/movieTypes";

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
  genres: [],
  loading: false,
  error: undefined,
};
const API = "http://localhost:3000/pub/";
export const fetchMovies = createAsyncThunk("movie/fetchMovies", async () => {
  try {
    const response = await axios.get(API + "movies");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
export const fetchGenres = createAsyncThunk("movie/fetchGenres", async () => {
  try {
    const response = await axios.get(API + "/genres");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    filterMoviesByCategory: (state, action) => {
      const filteredMovies = state.movies.filter(
        (movie) => movie.genreId === action.payload
      );
      setMovies(filteredMovies);
    },
  },
  extraReducers: (builder) => {
    // Fetch Movies
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
    // Fetch Genres
    builder.addCase(fetchGenres.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(fetchGenres.rejected, (state, action) => {
      state.genres = [];
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export const { setMovies, filterMoviesByCategory } = movieSlice.actions;

export const selectMovieState = (state: RootState) => {
  return state.movies;
};

export const movieReducer = movieSlice.reducer;
