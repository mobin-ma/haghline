import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import typeUserSlice from "./typeUserSlice"
import { setStore } from "./storeAccess";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    type: typeUserSlice,
  },
});

setStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
