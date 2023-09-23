import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../utils/axiosConfig";

const initialState = {
  data: [],
  error: "",
  loading: false,
  status: null,
};

export const updateBlogPost = createAsyncThunk(
  "update-post",

  async (param, thunkAPI) => {
    try {
      const response = await API.put(`/admin/articles/create`, param);

      return response?.data;
    } catch (err) {
      console.log("api error", err);
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const updateBlogPostSlice = createSlice({
  name: "updateBlogPost",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(updateBlogPost.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(updateBlogPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.data;
        state.loading = false;
      })
      .addCase(updateBlogPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { clearError } = updateBlogPostSlice.actions;
export default updateBlogPostSlice.reducer;
