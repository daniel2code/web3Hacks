import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../utils/axiosConfig";

const initialState = {
  data: [],
  error: "",
  loading: false,
  status: null,
};

export const createBlogPost = createAsyncThunk(
  "create-post",

  async (param, thunkAPI) => {
    const { notifications, title, content, description, category_id, image } =
      param;

    const payload = {
      title,
      content,
      description,
      category_id,
      image,
    };

    try {
      const response = await API.post(`/admin/articles/create`, payload);

      notifications("success", "Article published successfully");
      return response?.data;
    } catch (err) {

      notifications("danger", err.response.data.error);
      return thunkAPI.rejectWithValue(err.response.data.message || err.response.data.error);
    }
  }
);

export const createBlogPostSlice = createSlice({
  name: "createBlogPost",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createBlogPost.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(createBlogPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.data;
        state.loading = false;
      })
      .addCase(createBlogPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { clearError } = createBlogPostSlice.actions;
export default createBlogPostSlice.reducer;
