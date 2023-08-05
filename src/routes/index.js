import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../pages/Dashboard";
import MainLayout from "../pages/MainLayout/MainLayout";
import Account from "../pages/Account/Account";
import Stocks from "../pages/Stocks/Stocks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'account',
        element: <Account />
      },
      {
        path: 'stocks',
        element: <Stocks />
      }
    ]
  },
]);

export default router