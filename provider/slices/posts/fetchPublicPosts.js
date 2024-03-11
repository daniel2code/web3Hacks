import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../utils/axiosConfig";

const initialState = {
  data: [],
  error: "",
  loading: false,
  status: null,
};

export const fetchPublicBlogPosts = createAsyncThunk(
  "fetch-public-posts",

  async ({ url }, thunkAPI) => {
    try {
      const response = await API.get(`${url}`);

      return response?.data;
    } catch (err) {
      console.log("api error", err);
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const fetchPublicBlogPostsSlice = createSlice({
  name: "fetchPublicBlogPosts",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPublicBlogPosts.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchPublicBlogPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.data;
        state.loading = false;
      })
      .addCase(fetchPublicBlogPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { clearError } = fetchPublicBlogPostsSlice.actions;
export default fetchPublicBlogPostsSlice.reducer;
