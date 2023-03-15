import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",

  initialState: {
    posts: null,
  },
  reducers: {
    updatePosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { updatePosts } = postSlice.actions;
export default postSlice.reducer;
