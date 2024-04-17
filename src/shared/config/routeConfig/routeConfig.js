import { MainPage } from "../../../pages/MainPage"


export const AppRoutes = {
   MAIN: "main" ,
}

export const RoutePath= {
   [AppRoutes.MAIN]: "/" ,
}

export const routeConfig ={
   [AppRoutes.MAIN] :{
      path:RoutePath.main ,
      element : <MainPage/>
   } ,
 
}