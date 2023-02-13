import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",

  initialState: {
    isAuth: false,
    token: null
  },
  reducers: {
    checkIsAuth: (state ) => {
      state.isAuth = true;
    },
    saveToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { checkIsAuth, saveToken } = authSlice.actions;
export default authSlice.reducer;
