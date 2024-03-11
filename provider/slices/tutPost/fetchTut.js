import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../utils/axiosConfig";

const initialState = {
  data: [],
  error: "",
  loading: false,
  status: null,
};

export const fetchAdminTuts = createAsyncThunk(
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

export const fetchAdminTutsSlice = createSlice({
  name: "fetchAdminTuts",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminTuts.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchAdminTuts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.data;
        state.loading = false;
      })
      .addCase(fetchAdminTuts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { clearError } = fetchAdminTutsSlice.actions;
export default fetchAdminTutsSlice.reducer;
