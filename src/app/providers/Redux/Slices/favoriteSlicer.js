import { createSlice } from "@reduxjs/toolkit";
import { ADD_FAVORITE_ASYNC, GET_FAVORITE_ASYNC } from "../actions/actions";

const initialState = {
  favorite: [],
  error: null,
  loading: false,
};

const favoriteSlicer = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ADD_FAVORITE_ASYNC.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(ADD_FAVORITE_ASYNC.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(ADD_FAVORITE_ASYNC.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload.message : "error";
      });

    builder
      .addCase(GET_FAVORITE_ASYNC.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GET_FAVORITE_ASYNC.fulfilled, (state, action) => {
        state.favorite = action.payload;
        state.loading = false;
      })
      .addCase(GET_FAVORITE_ASYNC.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload.message : "error";
      });
  },
});
export default favoriteSlicer.reducer;
