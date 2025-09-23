import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  registerUser,
  loginUser,
  verifyOtpUser,
  TokenPayload,
  refreshToken,
  getUserInfo,
  updateUserInfo,
  UserInfo,
} from "./authThunks";

export type AuthMode = "login" | "signup";

interface AuthState {
  mode: AuthMode;
  loading: boolean;
  success: boolean;
  error: string | null;
  token?: TokenPayload;
  userInfo?: UserInfo;
  userInfoLoading: boolean;
  userInfoError: string | null;
}

const tokenString =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

const initialState: AuthState = {
  mode: "login",
  loading: false,
  success: false,
  error: null,
  token:
    tokenString && tokenString !== "undefined"
      ? JSON.parse(tokenString)
      : undefined,
  userInfo: undefined,
  userInfoLoading: false,
  userInfoError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<AuthMode>) => {
      state.mode = action.payload;
    },
    toggleMode: (state) => {
      state.mode = state.mode === "login" ? "signup" : "login";
    },
    setLocalError: (state, action) => {
      state.error = action.payload;
    },
    clearMessages: (state) => {
      state.error = null;
      state.success = false;
    },
    setToken: (state, action: PayloadAction<TokenPayload | undefined>) => {
      state.token = action.payload;
      if (typeof window !== "undefined") {
        if (action.payload)
          localStorage.setItem("token", JSON.stringify(action.payload));
        else localStorage.removeItem("token");
      }
    },
    logout: (state) => {
      state.token = undefined;
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "خطا در ثبت نام";
      });

    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "خطا در ورود";
      });

    builder
      .addCase(verifyOtpUser.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(verifyOtpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.token = action.payload;
        if (typeof window !== "undefined") {
          localStorage.setItem("token", JSON.stringify(action.payload));
        }
      })
      .addCase(verifyOtpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "خطا در ورود";
      });

    builder
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.token = action.payload;
        if (typeof window !== "undefined") {
          localStorage.setItem("token", JSON.stringify(action.payload));
        }
      })
      .addCase(refreshToken.rejected, (state) => {
        state.token = undefined;
        if (typeof window !== "undefined") {
          localStorage.removeItem("token");
        }
      });

    // User Info reducers
    builder
      .addCase(getUserInfo.pending, (state) => {
        state.userInfoLoading = true;
        state.userInfoError = null;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.userInfoLoading = false;
        state.userInfo = action.payload;
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.userInfoLoading = false;
        state.userInfoError = action.payload || "خطا در دریافت اطلاعات کاربر";
      });

    builder
      .addCase(updateUserInfo.pending, (state) => {
        state.userInfoLoading = true;
        state.userInfoError = null;
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.userInfoLoading = false;
        state.userInfo = action.payload;
      })
      .addCase(updateUserInfo.rejected, (state, action) => {
        state.userInfoLoading = false;
        state.userInfoError = action.payload || "خطا در به‌روزرسانی اطلاعات کاربر";
      });
  },
});

export const {
  setMode,
  toggleMode,
  setLocalError,
  logout,
  clearMessages,
  setToken,
} = authSlice.actions;
export default authSlice.reducer;
