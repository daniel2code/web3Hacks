import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../utils/axiosConfig";

const initialState = {
  data: [],
  error: "",
  loading: false,
  status: null,
};

export const publishTutorialPost = createAsyncThunk(
  "publish-post",

  async ({ id, cb }, thunkAPI) => {
    try {
      const response = await API.patch(`/admin/tutorials/${id}/publish`);

      cb && cb();
      return response?.data;
    } catch (err) {
      console.log("api error", err);
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const publishTutorialPostSlice = createSlice({
  name: "publishTutorialPost",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(publishTutorialPost.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(publishTutorialPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.data;
        state.loading = false;
      })
      .addCase(publishTutorialPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { clearError } = publishTutorialPostSlice.actions;
export default publishTutorialPostSlice.reducer;
