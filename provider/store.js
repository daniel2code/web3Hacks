import { configureStore } from "@reduxjs/toolkit";
import viewSlice from "./slices/viewSlice";
import themeSlice from "./slices/themeSlice"
import authSlice from "./slices/authSlice";

const store = configureStore({
  reducer: {
    view: viewSlice,
    theme: themeSlice,
    auth: authSlice,
  },
});

export default store;
