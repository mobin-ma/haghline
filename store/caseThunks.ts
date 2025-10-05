import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/axios";
import { AxiosError } from "axios";

export type CaseData = {
  id: number;
  title: string;
  category: string;
  description: string;
  attachments: any[];
};

// Interface برای داده‌های پرونده
export interface CaseDataPost {
  title: string;
  category: number;
  description: string;
  hidden_char: string[];
  files: string[];
}

// Interface برای پاسخ API
export interface CaseResponse {
  id: number;
  title: string;
  category: number;
  description: string;
  hidden_char: string[];
  files: string[];
}

// دریافت لیست پرونده‌ها
export const getCases = createAsyncThunk<CaseData[], void>(
  "cases/getCases",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/cases/");
      return response.data;
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.response?.data?.error || "خطای سرور");
      }
      return rejectWithValue("خطای نامشخص");
    }
  }
);

// ایجاد پرونده جدید
export const createCase = createAsyncThunk<
  CaseData,
  CaseDataPost,
  { rejectValue: string }
>("cases/createCase", async (data, { rejectWithValue }) => {
  try {
    const response = await api.post("/cases/", data);
    return response.data;
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      return rejectWithValue(err.response?.data?.error || "خطای سرور");
    }
    return rejectWithValue("خطای نامشخص");
  }
});

// Interface برای Category
export interface Category {
  id: number;
  name: string;
  is_for_legal_entity: boolean;
  children: string;
}

// دریافت لیست دسته‌بندی‌ها
export const getCategories = createAsyncThunk<Category[], void>(
  "cases/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/cases/categories/");
      return response.data;
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.response?.data?.error || "خطای سرور");
      }
      return rejectWithValue("خطای نامشخص");
    }
  }
);

// دریافت پرونده با id
export const getCaseById = createAsyncThunk<CaseData, number>(
  "cases/getCaseById",
  async (caseId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/cases/${caseId}/`);
      return response.data;
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.response?.data?.error || "خطای سرور");
      }
      return rejectWithValue("خطای نامشخص");
    }
  }
);
