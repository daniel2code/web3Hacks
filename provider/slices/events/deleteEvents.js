import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../utils/axiosConfig";

const initialState = {
  data: [],
  error: "",
  loading: false,
  status: null,
};

export const deleteEvents = createAsyncThunk(
  "delete-event",

  async (param, thunkAPI) => {
    const { title, cb } = param;

    try {
      const response = await API.delete(`/admin/events/${title}/delete`);
      cb();
      return response?.data;
    } catch (err) {
      console.log("api error", err);
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const deleteEventsSlice = createSlice({
  name: "deleteEvents",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(deleteEvents.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(deleteEvents.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.data;
        state.loading = false;
      })
      .addCase(deleteEvents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { clearError } = deleteEventsSlice.actions;
export default deleteEventsSlice.reducer;
