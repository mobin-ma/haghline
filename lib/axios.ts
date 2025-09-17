// lib/axios.ts
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { store } from "@/store/store";
import { logout, setToken } from "@/store/authSlice";
import type { TokenPayload } from "@/store/authThunks"; 


const api = axios.create({
  baseURL: "http://135.125.238.202:9800/api/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});


const refreshClient = axios.create({
  baseURL: "http://135.125.238.202:9800/api/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});


let isRefreshing = false;


let failedQueue: {
  resolve: (value?: unknown) => void;
  reject: (error?: unknown) => void;
  originalRequest: AxiosRequestConfig;
}[] = [];

function processQueue(error: any, token: string | null = null) {
  failedQueue.forEach((p) => {
    if (error) p.reject(error);
    else p.resolve(token);
  });
  failedQueue = [];
}


api.interceptors.request.use(
  (config) => {
    try {
      const state = store.getState();
      const access = state.auth.token?.access; 
      if (access && config && config.headers) {
        config.headers["Authorization"] = `Bearer ${access}`;
      }
    } catch (e) {

    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (
    error: AxiosError & { config?: AxiosRequestConfig & { _retry?: boolean } }
  ) => {
    const originalRequest = error.config;

    if (!originalRequest) return Promise.reject(error);
    if (originalRequest.url?.includes("/users/token/refresh/")) {
      store.dispatch(logout());
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalRequest._retry) {

      originalRequest._retry = true;

      if (isRefreshing) {

        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject, originalRequest });
        })
          .then((token) => {
            if (token && originalRequest.headers) {
              originalRequest.headers["Authorization"] = `Bearer ${token}`;
            }
            return api(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      isRefreshing = true;

      try {

        const state = store.getState();
        const refresh =
          state.auth.token?.refresh ||
          (typeof window !== "undefined"
            ? JSON.parse(localStorage.getItem("token") || "null")?.refresh
            : null);

        if (!refresh) {

          store.dispatch(logout());
          return Promise.reject(error);
        }


        const refreshRes: AxiosResponse<TokenPayload> =
          await refreshClient.post("/users/token/refresh/", { refresh });

        const newTokens = refreshRes.data;

        if (typeof window !== "undefined") {
          localStorage.setItem("token", JSON.stringify(newTokens));
        }

        try {
          store.dispatch(setToken(newTokens));
        } catch (e) {
            return e;
        }

     
        processQueue(null, newTokens.access);

     
        if (originalRequest.headers) {
          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${newTokens.access}`;
        }

        return api(originalRequest);
      } catch (err) {
   
        processQueue(err, null);
        store.dispatch(logout());
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;
