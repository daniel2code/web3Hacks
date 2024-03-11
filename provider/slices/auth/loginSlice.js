import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../utils/axiosConfig";
import { notifications } from "../../../utils/notificationBar";

const initialState = {
  data: [],
  error: "",
  loading: false,
  status: null,
  userData: null,
};

export const loginUser = createAsyncThunk(
  "login-user",

  async (param, thunkAPI) => {
    const { email, password } = param;

    const payload = {
      email,
      password,
    };

    try {
      const response = await API.post(`/auth/email/login`, payload);

      //   notifications("success", "Article published successfully");
      localStorage.setItem("token", data?.data?.token);
      window.location.href("/dashboard/home");
      return response?.data;
    } catch (err) {
      notifications("danger", err.response.data.message);
      return thunkAPI.rejectWithValue(
        err.response.data.message || err.response.data.message
      );
    }
  }
);

export const loginUserSlice = createSlice({
  name: "loginUser",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = "";
    },

    saveUserData: (state, { payload }) => {
      state.userData = payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.data;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { clearError, saveUserData } = loginUserSlice.actions;
export default loginUserSlice.reducer;
