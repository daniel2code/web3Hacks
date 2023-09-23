import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../utils/axiosConfig";

const initialState = {
  data: [],
  error: "",
  loading: false,
  status: null,
};

export const updateEvent = createAsyncThunk(
  "update-event",

  async (param, thunkAPI) => {
    const { title, cover_image, description, date } = param;

    const payload = {
      title,
      cover_image,
      description,
      date,
    };

    try {
      const response = await API.put(`/admin/events/${title}/update`, payload);

      return response?.data;
    } catch (err) {
      console.log("api error", err);

      let errText = await Object.values(err.response.data.errors)[0][0];

      notifications("danger", errText);
      return thunkAPI.rejectWithValue(errText);
    }
  }
);

export const updateEventSlice = createSlice({
  name: "updateEvent",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(updateEvent.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(updateEvent.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.data;
        state.loading = false;
      })
      .addCase(updateEvent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { clearError } = updateEventSlice.actions;
export default updateEventSlice.reducer;
