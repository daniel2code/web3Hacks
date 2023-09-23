import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../utils/axiosConfig";

const initialState = {
  data: [],
  error: "",
  loading: false,
  status: null,
};

export const createAds = createAsyncThunk(
  "create-ads",

  async (param, thunkAPI) => {
    const { name, image, link, description, notifications, cb } = param;

    const payload = { name, image, link, description };

    try {
      const response = await API.post(`/admin/ads/create`, payload);

      notifications("success", "Successfully Posted Ad");
      cb();
      return response?.data;
    } catch (err) {
      console.log("api error", err);

      let errText = await Object.values(err.response.data.errors)[0][0];

      notifications("danger", errText);
      return thunkAPI.rejectWithValue(errText);
    }
  }
);

export const createAdsSlice = createSlice({
  name: "createAds",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createAds.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(createAds.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.data;
        state.loading = false;
      })
      .addCase(createAds.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { clearError } = createAdsSlice.actions;
export default createAdsSlice.reducer;
