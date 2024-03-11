import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../utils/axiosConfig";

const initialState = {
  data: [],
  error: "",
  loading: false,
  status: null,
};

export const verifyUser = createAsyncThunk(
  "verify-user",

  async (param, thunkAPI) => {
    const { user_id, code, cb } = param;

    const payload = {
      user_id,
      code,
    };

    try {
      const response = await API.post(`/otp/verify`, payload);

      cb();
      //   notifications("success", "Article published successfully");
      return response?.data;
    } catch (err) {
      notifications("danger", err.response.data.error);
      return thunkAPI.rejectWithValue(
        err.response.data.message || err.response.data.error
      );
    }
  }
);

export const verifyUserSlice = createSlice({
  name: "verifyUser",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(verifyUser.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(verifyUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.data;
        state.loading = false;
      })
      .addCase(verifyUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { clearError } = verifyUserSlice.actions;
export default verifyUserSlice.reducer;
