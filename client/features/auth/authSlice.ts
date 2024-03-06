import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../config/api";

// Types
export interface AuthState {
  user: User | null;
  token: string;
  authenticated: boolean;
  loading: boolean;
  error: string | undefined;
}
export interface User {
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
}
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
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

export const login = createAsyncThunk("auth/login", async () => {
  try {
  } catch (error) {
    console.error(error);
  }
});
export const logout = createAsyncThunk("auth/logout", async () => {
  try {
  } catch (error) {
    console.error(error);
  }
});

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
      state.user = null;

      state.error = action.error.message;
    });
  },
});
export const {} = authSlice.actions;
export const authReducer = authSlice.reducer;
