import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/axios";

interface RegisterPayload {
  user_type: "individual" | "legal";
  phone_number: string;
  firs_name?: string;
  last_name?: string;
  company_name?: string;
}

interface RegisterResponse {
  message: string;
}

export const registerUser = createAsyncThunk<
  RegisterResponse,
  RegisterPayload,
  { rejectValue: string }
>("auth/registerUser", async (data, { rejectWithValue }) => {
  try {
    const res = await api.post(
      "users/register/",
      data
    );
    return res.data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data?.message || "خطای سرور");
  }
});

interface LoginPayload {
  user_type: "individual" | "legal";
  phone_number: string;
}

interface LoginResponse {
  token: string;
}

export const loginUser = createAsyncThunk<
  LoginResponse,
  LoginPayload,
  { rejectValue: string }
>("auth/loginUser", async (data, { rejectWithValue }) => {
  try {
    const res = await api.post(
      "users/login/",
      data
    );
    return res.data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data?.message || "خطا در ورود");
  }
});

interface VerifyOtpPayload {
  phone_number: string;
  code: string;
}

export interface TokenPayload {
  access: string;
  refresh: string;
}

export const verifyOtpUser = createAsyncThunk<
  TokenPayload,
  VerifyOtpPayload,
  { rejectValue: string }
>("auth/verifyOtpUser", async (data, { rejectWithValue }) => {
  try {
    const res = await api.post(
      "users/verify-otp/",
      data
    );
    return res.data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data?.message || "خطا در ورود");
  }
});

interface RefreshResponse {
  access: string;
  refresh: string;
}

export const refreshToken = createAsyncThunk<
  RefreshResponse,
  { refresh: string },
  { rejectValue: string }
>("auth/refreshToken", async (data, { rejectWithValue }) => {
  try {
    const res = await api.post(
      "users/token/refresh/",
      data
    );
    return res.data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data?.message || "خطا در تمدید توکن");
  }
});
