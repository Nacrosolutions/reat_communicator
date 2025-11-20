import { createSlice } from "@reduxjs/toolkit";
import type { UsersState } from "./userTypes";
import  { fetchUsers } from "./userThunks";

const initialState:UsersState={
    users:[],
    loggedInUser:null,
    loading:false,

    error:null
}


export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearUsers(state) {
      state.users = [];
      state.loggedInUser = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;

      // Logged-in user logic:
      if (action.payload.length === 1) {
        state.loggedInUser = action.payload[0]; // normal user
      } else {
        // admin → find themselves
        const authEmail = localStorage.getItem("email");
        state.loggedInUser = action.payload.find(u => u.email === authEmail) || null;
      }
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const { clearUsers } = usersSlice.actions;
export default usersSlice.reducer;