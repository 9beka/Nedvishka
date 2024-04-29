import { configureStore } from "@reduxjs/toolkit";
import rangePriceSlicer from "./Slices/rangePriceSlicer";
import authSlicer from "./Slices/authSlicer";
import alertSlicer from "./Slices/alertSlicer";
import adsSlicer from "./Slices/adsSlicer";
export const store = configureStore({
  reducer: {
    rangeOfPrice: rangePriceSlicer,
    auth: authSlicer,
    alert:alertSlicer,
    ads:adsSlicer
  },
});
