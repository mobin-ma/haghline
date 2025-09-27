import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import typeUserReducer from "./typeUserSlice";
import caseReducer from "./caseSlice";
import { setStore } from "./storeAccess";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    type: typeUserReducer,
    cases: caseReducer,
  },
});

setStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
