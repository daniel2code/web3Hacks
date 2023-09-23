import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../utils/axiosConfig";

const initialState = {
  data: [],
  error: "",
  loading: false,
  status: null,
};

export const deleteTuts = createAsyncThunk(
  "delete-ads",

  async (param, thunkAPI) => {
    const { title, cb } = param;

    try {
      const response = await API.delete(`/admin/tutorials/${title}/delete`);
      cb();
      return response?.data;
    } catch (err) {
      console.log("api error", err);
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const deleteTutsSlice = createSlice({
  name: "deleteTuts",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(deleteTuts.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(deleteTuts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.data;
        state.loading = false;
      })
      .addCase(deleteTuts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { clearError } = deleteTutsSlice.actions;
export default deleteTutsSlice.reducer;
