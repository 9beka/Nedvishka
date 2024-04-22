import React from "react";
import { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { routeConfig } from "../../../../shared/config/routeConfig/routeConfig";
import PrivateRoutes from "../../../../shared/helpers/PrivateRoutes/PrivateRoutes";
import RegisterPage from "../../../../pages/RegisterPage/ui/RegisterPage";
import { useSelector } from "react-redux";
import LoginPage from "../../../../pages/LoginPage/ui/LoginPage";

const AppRouter = () => {
   const { token } = useSelector((state) => state.auth);

   return (
       <Suspense fallback={<div>Loading...</div>}>
          <Routes>
             <Route element={<PrivateRoutes />}>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route key={path} path={path} element={element} />
                ))}
             </Route>

              {!token && <Route path={'/login'} element={<LoginPage />} />}

              {!token && <Route path={'/register'} element={<RegisterPage />} />}
             {token && <Route path={'/register'} element={<Navigate to="/" replace />} />}
          </Routes>
       </Suspense>
   );
};

export default AppRouter;
