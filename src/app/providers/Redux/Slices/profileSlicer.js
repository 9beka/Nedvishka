import { createSlice } from "@reduxjs/toolkit";
import { GET_PROFILE } from "../actions/actions";

const initialState = {
  profile: {},
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
  },
});
export default profileSlicer.reducer;
