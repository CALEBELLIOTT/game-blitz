import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../pages/MainLayout/MainLayout";
import Account from "../pages/Account/Account";
import Home from "../pages/Home";
import NewRoom from "../pages/NewRoom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'account',
        element: <Account />
      },
      {
        path: '/new-room',
        element: <NewRoom />
      },
    ]
  },
]);

export default router