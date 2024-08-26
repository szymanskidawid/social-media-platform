import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "../views/login/LoginPage";
import MainPage from "../views/main/MainPage";
import { useContext } from "react";
import { LoginStateContext } from "../../contexts/LoginStateContext";
import Profile from "../views/main/profile/Profile";
import EditProfile from "../views/main/profile/EditProfile";
import Friends from "../views/main/profile/Friends";
import PhotoAlbum from "../views/main/profile/PhotoAlbum";
import Feed from "../views/main/posts/Feed";

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
      children: [
        {
          path: "",
          element: <Feed />,
        },
        {
          path: `/home/profile/:id`,
          element: <Profile />,
        },
        {
          path: `/home/profile/:id/edit`,
          element: <EditProfile />,
        },
        {
          path: `/home/profile/:id/friends`,
          element: <Friends />,
        },
        {
          path: `/home/profile/:id/photos`,
          element: <PhotoAlbum />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
