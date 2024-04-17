import { configureStore } from "@reduxjs/toolkit";
import rangePriceSlicer from "./Slices/rangePriceSlicer";
export const store = configureStore({
  reducer: {
    rangeOfPrice: rangePriceSlicer,
    
  },
});
