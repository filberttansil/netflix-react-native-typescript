import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../config/api";
import { AuthState, LoginForm, User } from "../../types/authTypes";
import * as SecureStore from "expo-secure-store";
// Initial State
const initialState: AuthState = {
  user: null,
  token: "",
  authenticated: false,
  loading: true,
  error: "",
};

// Async
export const register = createAsyncThunk(
  "auth/register",
  async (formData: User, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL + "/register", { ...formData });
      return response.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (formData: LoginForm, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL + "/login", { ...formData });
      await SecureStore.setItemAsync(
        "access_token",
        JSON.stringify(response.data.access_token)
      );
      return response.data;
    } catch (error: any) {
      if (!error.response) throw error;
      console.log(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

// createSlice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setAuthenticated: (state, action) => {
      state.authenticated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.authenticated = true;
      state.loading = false;
      state.error = "";
    });
  },
});
export const { setAuthenticated } = authSlice.actions;
export const authReducer = authSlice.reducer;
