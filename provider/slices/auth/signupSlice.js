import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../utils/axiosConfig";
import { notifications } from "../../../utils/notificationBar";

const initialState = {
  data: [],
  error: "",
  loading: false,
  status: null,
};

export const signupUser = createAsyncThunk(
  "signup-user",
  async (param, thunkAPI) => {
    console.log("fireddddddddddddddddddddddddddd");
    const { email, password, first_name, password_confirmation, cb } = param;

    const payload = {
      first_name,
      last_name,
      email,
      password,
      password_confirmation,
    };


    try {
      const response = await API.post(`/auth/email/register`, payload);

      //   notifications("success", "Article published successfully");
      console.log(response);
      cb();
      return response?.data;
    } catch (err) {
      notifications("danger", err.response.data.message);
      return thunkAPI.rejectWithValue(
        err.response.data.message || err.response.data.message
      );
    }
  }
);

export const signupUserSlice = createSlice({
  name: "signupUser",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.data;
        state.loading = false;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { clearError } = signupUserSlice.actions;
export default signupUserSlice.reducer;
