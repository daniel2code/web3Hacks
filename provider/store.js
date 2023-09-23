// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// // import { getDefaultMiddleware } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";

// const customizedMiddleware = getDefaultMiddleware({
//   serializableCheck: false,
// });

// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ['post'],
// };

// const rootReducer = combineReducers({
//   view: viewSlice,
//   theme: themeSlice,
//   auth: authSlice,
//   post: postSlice,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: {
//     reducer: persistedReducer,
//     devTools: process.env.NODE_ENV !== "production",
//     middleware: [thunk],
//   },
// });

// export const persistor = persistStore(store);
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import viewSlice from "./slices/viewSlice";
import themeSlice from "./slices/themeSlice";
import authSlice from "./slices/authSlice";
import postSlice from "./slices/postsSlice";
import createPostSlice from "./slices/posts/createPost";
import fetchPostSlice from "./slices/posts/fetchPosts";
import updatePostSlice from "./slices/posts/updatePost";
import getSinglePostSlice from "./slices/posts/getSinglePost";
import createEventSlice from "./slices/events/createEvent";
import fetchEventsSlice from "./slices/events/fetchEvents";
import updateEventsSlice from "./slices/events/updateEvents";
import createAdsSlice from "./slices/ads/createAds";
import deleteAdsSlice from "./slices/ads/deleteAds";
import fetchAdsSlice from "./slices/ads/fetchAds";
import postTutSlice from "./slices/tutPost/postTut";
import updateTutSlice from "./slices/tutPost/updateTut";
import fetchTutSlice from "./slices/tutPost/fetchTut";
import deleteTutSlice from "./slices/tutPost/deleteTut";
import updateAdsSlice from "./slices/ads/updateAds";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  blacklist: [],
};

const rootReducer = combineReducers({
  view: viewSlice,
  theme: themeSlice,
  auth: authSlice,
  post: postSlice,
  createPost: createPostSlice,
  fetchPost: fetchPostSlice,
  updatePost: updatePostSlice,
  singlePost: getSinglePostSlice,
  createEvent: createEventSlice,
  fetchEvent: fetchEventsSlice,
  updateEvent: updateEventsSlice,
  createAds: createAdsSlice,
  deleteAds: deleteAdsSlice,
  fetchAds: fetchAdsSlice,
  postTut: postTutSlice,
  updateTut: updateTutSlice,
  fetchTut: fetchTutSlice,
  deleteTut: deleteTutSlice,
  updateAds: updateAdsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export const clearStorage = () => {
  persistor
    .purge()
    .then(() => {
      console.log("Storage cleared");
    })
    .catch((error) => {
      console.log("Error clearing storage:", error);
    });
};

export { store, persistor };
