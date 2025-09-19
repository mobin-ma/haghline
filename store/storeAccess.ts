import type { AppStore } from "./store";

let _store: AppStore;

export const setStore = (store: AppStore) => {
  _store = store;
};

export const getStore = () => _store;
