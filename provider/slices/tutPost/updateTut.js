import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../utils/axiosConfig";

const initialState = {
  data: [],
  error: "",
  loading: false,
  status: null,
};

export const updateTutorialPost = createAsyncThunk(
  "update-tut-post",

  async (param, thunkAPI) => {
    const {
      title,
      content,
      description,
      category,
      image,
      airdropLink,
      date,
      network,
      endDate,
      facebook,
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
      description,
      category,
      image,
      description,
      airdropLink,
      date,
      network,
      endDate,
      facebook,
      twitter,
      telegram,
      medium,
      website,
    };

    try {
      const response = await API.put(
        `/admin/tutorials/${title}/update`,
        payload
      );

      notifications("success", `${category} updated successfully`);

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

export const updateTutorialPostSlice = createSlice({
  name: "updateTutorialPost",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(updateTutorialPost.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(updateTutorialPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.data;
        state.loading = false;
      })
      .addCase(updateTutorialPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { clearError } = updateTutorialPostSlice.actions;
export default updateTutorialPostSlice.reducer;
