import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import typeUserSlice from "./typeUserSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    type: typeUserSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
