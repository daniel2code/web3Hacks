import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../utils/axiosConfig";

const initialState = {
  data: [],
  error: "",
  loading: false,
  status: null,
};

export const createEvent = createAsyncThunk(
  "create-event",

  async (param, thunkAPI) => {
    const { title, description, cover_image, date, notifications, cb } = param;

    const payload = { title, description, cover_image, date };

    try {
      const response = await API.post(`/admin/events/create`, payload);
      notifications("success", `Event published successfully`);
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

export const createEventSlice = createSlice({
  name: "createEvent",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createEvent.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.data;
        state.loading = false;
      })
      .addCase(createEvent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { clearError } = createEventSlice.actions;
export default createEventSlice.reducer;
