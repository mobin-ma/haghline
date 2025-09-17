import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TypeUser = "individual" | "legal";

interface UserState {
  typeUser: TypeUser;
}

const initialState: UserState = {
  typeUser:
    typeof window !== "undefined"
      ? (localStorage.getItem("typeUser") as TypeUser) ?? "individual"
      : "individual",
};

const typeUserSlice = createSlice({
  name: "typeUser",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TypeUser>) => {
      state.typeUser = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("typeUser", action.payload);
      }
    },
  },
});

export const { setUser } = typeUserSlice.actions;
export default typeUserSlice.reducer;
