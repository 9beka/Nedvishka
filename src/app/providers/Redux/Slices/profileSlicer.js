import { createSlice } from "@reduxjs/toolkit";
import {
  GET_PROFILE,
  UPDATE_IMAGE_PROFILE,
  DELETE_IMAGE_PROFILE,
} from "../actions/actions";

const initialState = {
  profile: {},
  error: null,
  loading: false,
  delete_loading: false,
};

const profileSlicer = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GET_PROFILE.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GET_PROFILE.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.loading = false;
      })
      .addCase(GET_PROFILE.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload.message : "error";
      });

    builder
      .addCase(UPDATE_IMAGE_PROFILE.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(UPDATE_IMAGE_PROFILE.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(UPDATE_IMAGE_PROFILE.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload.message : "error";
      });

    builder
      .addCase(DELETE_IMAGE_PROFILE.pending, (state) => {
        state.delete_loading = true;
        state.error = null;
      })
      .addCase(DELETE_IMAGE_PROFILE.fulfilled, (state, action) => {
        state.delete_loading = false;
        state.profile = action.payload;
      })
      .addCase(DELETE_IMAGE_PROFILE.rejected, (state, action) => {
        state.delete_loading = false;
        state.error = action.payload ? action.payload.message : "error";
      });
  },
});
export default profileSlicer.reducer;
