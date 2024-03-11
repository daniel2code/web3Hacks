import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../utils/axiosConfig";

const initialState = {
  data: [],
  error: "",
  loading: false,
  status: null,
};

export const publishBlogPost = createAsyncThunk(
  "publish-post",

  async ({ id, cb }, thunkAPI) => {
    try {
      const response = await API.patch(`/admin/articles/${id}/publish`);

      cb && cb();
      return response?.data;
    } catch (err) {
      console.log("api error", err);
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const publishBlogPostSlice = createSlice({
  name: "publishBlogPost",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(publishBlogPost.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(publishBlogPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.data;
        state.loading = false;
      })
      .addCase(publishBlogPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { clearError } = publishBlogPostSlice.actions;
export default publishBlogPostSlice.reducer;
