import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import viewSlice from "./slices/viewSlice";
import themeSlice from "./slices/themeSlice";
import authSlice from "./slices/authSlice";
import postSlice from "./slices/postsSlice"

// const customizedMiddleware = getDefaultMiddleware({
//   serializableCheck: false,
// });

const persistConfig = {
  key: "root",
  storage,
  blacklist: ['post'],
};

const rootReducer = combineReducers({
  view: viewSlice,
  theme: themeSlice,
  auth: authSlice,
  post: postSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
  },
});

export const persistor = persistStore(store);
export default store;
