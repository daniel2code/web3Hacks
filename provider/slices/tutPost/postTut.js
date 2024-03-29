import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../utils/axiosConfig";

const initialState = {
  data: [],
  error: "",
  loading: false,
  status: null,
};

export const createTutorialPost = createAsyncThunk(
  "create-tut-post",

  async (param, thunkAPI) => {
    const {
      title,
      content,
      category_id,
      start_date,
      end_date,
      category,
      image,
      airdropLink,
      date,
      network,
      twitter,
      website,
      medium,
      telegram,
      notifications,
      cb,
    } = param;

    const payload = {
      title,
      content,
      category,
      image,
      airdropLink,
      date,
      network,
      twitter,
      telegram,
      medium,
      website,
      category_id,
      end_date,
      start_date,
    };

    try {
      const response = await API.post(`/admin/tutorials/create`, payload);

      notifications("success", `${category} published successfully`);

      cb();
      return response?.data;
    } catch (err) {
      notifications("danger", Object.values(err.response.data.errors)[0][0]);
      return thunkAPI.rejectWithValue(
        Object.values(err.response.data.errors)[0][0]
      );
    }
  }
);

export const createTutorialPostSlice = createSlice({
  name: "createTutorialPost",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createTutorialPost.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(createTutorialPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.data;
        state.loading = false;
      })
      .addCase(createTutorialPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { clearError } = createTutorialPostSlice.actions;
export default createTutorialPostSlice.reducer;
