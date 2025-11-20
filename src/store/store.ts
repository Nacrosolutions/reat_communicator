import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../auth/slices/authSlice";
import usersReducer from "../components/users/slices/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users:usersReducer
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;