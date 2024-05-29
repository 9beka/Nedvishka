import { lazy } from "react";
import {
  AllAdsPage,
  DetailsPage,
  FavoritePage,
  MyAdsPage,
} from "../../../pages";

const AboutPage = lazy(() => import("../../../pages/AboutPage/AboutPage"));
const AdsPage = lazy(() => import("../../../pages/AdsPage/AdsPage"));

export const AppRoutes = {
  MYADS: "myAds",
  ABOUT: "about",
  ADS: "ads",
  ALLADS: "allAds",
  DETAILS: "details",
  FAVORITE: "favorite",
};

export const RoutePath = {
  [AppRoutes.MYADS]: "/myAds",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.ADS]: "/ads",
  [AppRoutes.ALLADS]: "/allAds",
  [AppRoutes.DETAILS]: "/details/:id",
  [AppRoutes.FAVORITE]: "/favorite",
};

export const routeConfig = {
  [AppRoutes.MYADS]: {
    path: RoutePath.myAds,
    element: <MyAdsPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.ADS]: {
    path: RoutePath.ads,
    element: <AdsPage />,
  },
  [AppRoutes.ALLADS]: {
    path: RoutePath.allAds,
    element: <AllAdsPage />,
  },
  [AppRoutes.DETAILS]: {
    path: RoutePath.details,
    element: <DetailsPage />,
  },
  [AppRoutes.FAVORITE]: {
    path: RoutePath.favorite,
    element: <FavoritePage />,
  },
};
