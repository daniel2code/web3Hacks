import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../utils/axiosConfig";

const initialState = {
  data: [],
  error: "",
  loading: false,
  status: null,
};

export const resendOtp = createAsyncThunk(
  "login-user",

  async (param, thunkAPI) => {
    const { user_id } = param;

    const payload = {
      user_id,
    };

    try {
      const response = await API.post(`/otp/resend`, payload);

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

export const resendOtpSlice = createSlice({
  name: "resendOtp",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(resendOtp.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(resendOtp.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.data;
        state.loading = false;
      })
      .addCase(resendOtp.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { clearError } = resendOtpSlice.actions;
export default resendOtpSlice.reducer;
