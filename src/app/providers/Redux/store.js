import { configureStore } from "@reduxjs/toolkit";
import rangePriceSlicer from "./Slices/rangePriceSlicer";
import authSlicer from "./Slices/authSlicer";
export const store = configureStore({
  reducer: {
    rangeOfPrice: rangePriceSlicer,
    auth: authSlicer
  },
});
