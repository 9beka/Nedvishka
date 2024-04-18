import {AboutPage, MainPage} from "../../../pages"


export const AppRoutes = {
    MAIN: "main",
    ABOUT: 'about'
}

export const RoutePath = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: '/about'
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

}
