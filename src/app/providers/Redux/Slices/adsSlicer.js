import { createSlice } from "@reduxjs/toolkit";
import {
  ADS_POST_ASYNC,
  ADS_GET_OWNERS_ASYNC,
  GET_CONVERTER,
  ADS_GET_CARTS_ASYNC
} from "../actions/actions";

const initialState = {
  myAdsCart: {},
  dataOfAds: [] ,
  loading: false,
  error: null,
  converter: {},
};

const adsSlicer = createSlice({
  name: "ads",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ADS_POST_ASYNC.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(ADS_POST_ASYNC.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(ADS_POST_ASYNC.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Card add failed";
      })

      .addCase(ADS_GET_OWNERS_ASYNC.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(ADS_GET_OWNERS_ASYNC.fulfilled, (state, action) => {
        state.loading = false;
        state.myAdsCart = action.payload;
      })
      .addCase(ADS_GET_OWNERS_ASYNC.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Card add failed";
      })
      .addCase(ADS_GET_CARTS_ASYNC.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(ADS_GET_CARTS_ASYNC.fulfilled, (state, action) => {
        state.loading = false;
        state.dataOfAds = action.payload;
      })
      .addCase(ADS_GET_CARTS_ASYNC.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Card get failed";
      })

      .addCase(GET_CONVERTER.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GET_CONVERTER.fulfilled, (state, action) => {
        state.loading = false;
        state.converter = action.payload;
      })
      .addCase(GET_CONVERTER.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload.message : "Error";
      });
  },
});
export default adsSlicer.reducer;
