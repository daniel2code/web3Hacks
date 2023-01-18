import { createSlice } from "@reduxjs/toolkit";

export const viewSlice = createSlice({
  name: "view",

  initialState: {
    view: "list",
  },
  reducers: {
    listView: (state) => {
      state.view = "list";
    },
    gridView: (state) => {
      state.view = "grid";
    },
  },
});

export const { listView, gridView } = viewSlice.actions;
export default viewSlice.reducer;
