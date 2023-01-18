import { configureStore } from "@reduxjs/toolkit";
import viewSlice from "./slices/viewSlice";
import themeSlice from "./slices/themeSlice"

const store = configureStore({
  reducer: {
    view: viewSlice,
    theme: themeSlice,
  },
});

export default store;
