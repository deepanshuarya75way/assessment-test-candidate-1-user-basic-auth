import { RouteObject } from "react-router-dom";

import AuthenticatedLayout, { authLoader } from "@/layouts/Authenticated";

import ErrorPage from "@/pages/error";
import Home from "@/pages/homepage";
import Profile, { profileLoader } from "@/pages/profile";

const privateRouter: RouteObject = {
  element: <AuthenticatedLayout />,
  loader: authLoader,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/profile",
      loader: profileLoader,
      element: <Profile />,
    },
  ],
};
export default privateRouter;
