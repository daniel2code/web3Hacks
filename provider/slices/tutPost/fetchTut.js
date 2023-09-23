import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../utils/axiosConfig";

const initialState = {
  data: [],
  error: "",
  loading: false,
  status: null,
};

export const fetchEvents = createAsyncThunk(
  "fetch-tutorial",

  async (param, thunkAPI) => {
    try {
      const response = await API.get(`/admin/tutorials`);

      return response?.data;
    } catch (err) {
      console.log("api error", err);
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const fetchEventsSlice = createSlice({
  name: "fetchEvents",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.data;
        state.loading = false;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { clearError } = fetchEventsSlice.actions;
export default fetchEventsSlice.reducer;
