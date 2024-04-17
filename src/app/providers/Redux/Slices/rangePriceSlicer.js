import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const ChangePrice = createAsyncThunk(
  "price/ChangePrice",
  async (price, { rejectWithValue, dispatch }) => {
    console.log(price, "FROM rangePriceSlicer");
    dispatch(setPrice(price));
  }
);
const initialState = {
  rangePrice: [0, 200000],
};
const rangePriceSlicer = createSlice({
  name: "RangePrice",
  initialState,
  reducers: {
    setPrice: (state, action) => {
      state.rangePrice = action.payload;
    },
  },
});

export const { setPrice } = rangePriceSlicer.actions;
export default rangePriceSlicer.reducer;
