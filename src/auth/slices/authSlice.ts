import { createSlice } from "@reduxjs/toolkit";
import { type AuthState, type UserRole } from "./authTypes";
import { loginUser, signUpUser } from "./authThunks";

const storedRole = localStorage.getItem("role") as UserRole | null;

const initialState: AuthState = {
  email: localStorage.getItem("email"),
  role: storedRole,
  name: null,
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
      localStorage.removeItem("email");
      localStorage.removeItem("role");
    },
  },

  extraReducers: (builder) => {
    // -------------------------
    // LOGIN
    // -------------------------
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;

      // update redux state
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.token = action.payload.access_token;

      // persist auth info
      localStorage.setItem("token", action.payload.access_token);
      localStorage.setItem("email", action.payload.email);
      localStorage.setItem("role", action.payload.role);
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Login failed";
    });

    // -------------------------
    // SIGNUP
    // Normal user → signup → auto login
    // Admin creating user → DO NOT overwrite admin session
    // -------------------------

    builder.addCase(signUpUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.loading = false;

      const existingToken = localStorage.getItem("token");

      // 🟦 If admin is logged in, DO NOT overwrite their session
      if (existingToken) {
        // Admin created a new user → do nothing to auth state
        return;
      }

      // 🟩 Self-signup → login the newly created user
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.token = action.payload.access_token;

      localStorage.setItem("token", action.payload.access_token);
      localStorage.setItem("email", action.payload.email);
      localStorage.setItem("role", action.payload.role);
    });

    builder.addCase(signUpUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Signup failed";
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
