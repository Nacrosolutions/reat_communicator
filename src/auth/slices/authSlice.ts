import {createSlice} from '@reduxjs/toolkit';

import { type AuthState } from "./authTypes";
import { loginUser } from './authThunks';


const initialState: AuthState = {
  email: null,
  role: null,
  token: localStorage.getItem("token"),
  loading: false,
  error: null,
};


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.email = null;
      state.role = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    // Login pending
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    // Login success
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.token = action.payload.access_token;

      localStorage.setItem("token", action.payload.access_token);
    });

    // Login failed
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Login failed";
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;