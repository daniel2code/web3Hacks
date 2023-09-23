import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../utils/axiosConfig";

const initialState = {
  data: [],
  error: "",
  loading: false,
  status: null,
};

export const deleteAds = createAsyncThunk(
  "delete-ads",

  async (param, thunkAPI) => {
    const { id, cb } = param;

    try {
      const response = await API.delete(`/admin/ads/${id}/delete`);

      cb()
      return response?.data;
    } catch (err) {
      console.log("api error", err);
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const deleteAdsSlice = createSlice({
  name: "deleteAds",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(deleteAds.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(deleteAds.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.data;
        state.loading = false;
      })
      .addCase(deleteAds.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { clearError } = deleteAdsSlice.actions;
export default deleteAdsSlice.reducer;
