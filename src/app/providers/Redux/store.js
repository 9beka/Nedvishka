import { configureStore } from "@reduxjs/toolkit";
import rangePriceSlicer from "./Slices/rangePriceSlicer";
import authSlicer from "./Slices/authSlicer";
import alertSlicer from "./Slices/alertSlicer";
import adsSlicer from "./Slices/adsSlicer";
import profileSlicer from "./Slices/profileSlicer";
import favoriteSlicer from "./Slices/favoriteSlicer";
export const store = configureStore({
  reducer: {
    rangeOfPrice: rangePriceSlicer,
    auth: authSlicer,
    alert: alertSlicer,
    ads: adsSlicer,
    profile: profileSlicer,
    favorite: favoriteSlicer,
  },
});
