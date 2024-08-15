import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "../views/login/LoginPage";
import MainPage from "../views/main/MainPage";
import { useContext } from "react";
import { LoginStateContext } from "../../contexts/LoginStateContext";

const Router = () => {
  const { isLoggedIn } = useContext(LoginStateContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to={isLoggedIn ? "/home" : "/login"} />,
    },

    {
      path: "/login",
      element: isLoggedIn ? <Navigate to={"/home"} /> : <LoginPage />,
    },

    {
      path: "/home",
      element: isLoggedIn ? <MainPage /> : <Navigate to={"/login"} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
