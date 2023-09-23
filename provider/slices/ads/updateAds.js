import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../utils/axiosConfig";

const initialState = {
  data: [],
  error: "",
  loading: false,
  status: null,
};

export const updateAds = createAsyncThunk(
  "update-event",

  async (param, thunkAPI) => {
    const { name, image, link, description, notifications, cb, id } = param;

    const payload = { name, image, link, description };

    try {
      const response = await API.put(`/admin/ads/${id}/update`, payload);

      return response?.data;
    } catch (err) {
      console.log("api error", err);

      let errText = await Object.values(err.response.data.errors)[0][0];

      notifications("danger", errText);
      return thunkAPI.rejectWithValue(errText);
    }
  }
);

export const updateAdsSlice = createSlice({
  name: "update",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(updateAds.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(updateAds.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.data;
        state.loading = false;
      })
      .addCase(updateAds.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { clearError } = updateAdsSlice.actions;
export default updateAdsSlice.reducer;
