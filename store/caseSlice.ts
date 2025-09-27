import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CaseData, getCases, createCase, Category, getCategories } from "./caseThunks";

interface CaseState {
    cases: CaseData[];
    categories: Category[];
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: CaseState = {
    cases: [],
    categories: [],
    loading: false,
    success: false,
    error: null,
};

const caseSlice = createSlice({
    name: "cases",
    initialState,
    reducers: {
        setCase: (state, action: PayloadAction<CaseState>) => {
            state = action.payload;
        },
        setCreateCase: (state, action: PayloadAction<CaseState>) => {
            state = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCases.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(getCases.fulfilled, (state, action) => {
                state.loading = false;
                state.cases = action.payload;
                state.success = true;
            })
            .addCase(getCases.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || "خطا در دریافت پرونده";
            })
            .addCase(createCase.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(createCase.fulfilled, (state, action) => {
                state.loading = false;
                state.cases = [...state.cases, action.payload];
                state.success = true;
            })
            .addCase(createCase.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || "خطا در ثبت پرونده";
            })
            // Categories
            .addCase(getCategories.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
                state.success = true;
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || "خطا در دریافت دسته‌بندی‌ها";
            })
    },
});

export const { setCase } = caseSlice.actions;
export default caseSlice.reducer;