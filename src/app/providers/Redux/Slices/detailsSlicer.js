import { createSlice } from "@reduxjs/toolkit";
import { CARD_DETAIL_GET_ASYNC } from "../actions/actions";

const initialState = {
  detail: {},
  detailId: "",
  loading: false,
  error: null,
};

const detailsSlicer = createSlice({
  name: "details",
  initialState,
  reducers: {
    ADD_DETAILID(state, action) {
      state.detailId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(CARD_DETAIL_GET_ASYNC.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(CARD_DETAIL_GET_ASYNC.fulfilled, (state, action) => {
        state.detail = action.payload;
        state.loading = false;
      })
      .addCase(CARD_DETAIL_GET_ASYNC.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Card add failed";
      });
  },
});

export const { ADD_DETAILID } = detailsSlicer.actions;
export default detailsSlicer.reducer;
