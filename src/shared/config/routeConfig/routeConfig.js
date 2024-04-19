import {AboutPage, MainPage ,AdsPage} from "../../../pages"


export const AppRoutes = {
    MAIN: "main",
    ABOUT: 'about',
    ADS:"ads" ,
}

export const RoutePath = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: '/about' ,
    [AppRoutes.ADS]: '/ads'
}

export const routeConfig = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    },
    [AppRoutes.ADS]: {
        path: RoutePath.ads,
        element: <AdsPage/>
    },

}
