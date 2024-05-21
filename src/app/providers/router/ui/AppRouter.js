import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { routeConfig } from "../../../../shared/config/routeConfig/routeConfig";
import PrivateRoutes from "../../../../shared/helpers/PrivateRoutes/PrivateRoutes";
import { useSelector } from "react-redux";
import { MyLoader } from "../../../../shared/ui";

const LoginPage = lazy(() =>
  import("../../../../pages/LoginPage/ui/LoginPage")
);
const RegisterPage = lazy(() =>
  import("../../../../pages/RegisterPage/ui/RegisterPage")
);
const MainPage = lazy(() => import("../../../../pages/MainPage/ui/MainPage"));
const NotFoundPage = lazy(() =>
  import("../../../../pages/NotFoundPage/NotFoundPage")
);

const AppRouter = () => {
  const { token } = useSelector((state) => state.auth);

  return (
    <Routes>
      <Route
        element={
          <Suspense fallback={<MyLoader />}>
            <PrivateRoutes />
          </Suspense>
        }
      >
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
      <Route
        path={"/"}
        element={
          <Suspense fallback={<MyLoader />}>
            <MainPage />
          </Suspense>
        }
      />

      <Route
        path={"/login"}
        element={
          !token ? (
            <Suspense fallback={<MyLoader />}>
              <LoginPage />
            </Suspense>
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route
        path={"/register"}
        element={
          !token ? (
            <Suspense fallback={<MyLoader />}>
              <RegisterPage />
            </Suspense>
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route path={"*"} element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
